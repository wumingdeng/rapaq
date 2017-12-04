var express = require('express');
var user_router = express.Router();
var db = require('../models')
var mem = require('../memory')
var g = require('../global')
var citys = require('../citys.json')
var utils = require('../utils')
var cfg = require('../config.json')
var jwt = require('jsonwebtoken');

function getWeek(lastPeriod, now) {
    if (now) {
        now = now.getTime()
    } else {
        now = new Date().getTime();
    }
    var week = now - (lastPeriod.getTime() - 8 * 3600 * 1000);  //减去8小时
    week = Math.floor(week / (7 * 24 * 3600 * 1000))
    return week;
}

//取标准体重
function getStandardWeight(week, weight, shape, isSingle) {
    weight = Number(weight);
    if (week > 42) {
        week = 42
    }
    var early = g.earlyStage
    if (week <= early) {
        return {
            value: weight + 'kg-' + (weight + g.earlyAdd) + 'kg',
            min: weight,
            max: weight + g.earlyAdd
        }
    }
    week -= early  //减去孕早期
    var config = mem.m.weightRate_configs[shape];
    var minRate, maxRate
    if (isSingle == 1) {
        minRate = config.rateMin
        maxRate = config.rateMax
    } else {
        minRate = config.dRateMin
        maxRate = config.dRateMax
    }
    var minWeight = weight + minRate * week;
    var maxWeight = weight + g.earlyAdd + maxRate * week;
    minWeight = minWeight.toFixed(2);
    maxWeight = maxWeight.toFixed(2);
    return {
        value: minWeight + 'kg-' + maxWeight + 'kg',
        min: minWeight,
        max: maxWeight
    }
}

//计算体型
function getShape(weight, height) {
    var config = g.weightStandard;
    var result = weight / (height * height / 10000);
    console.log(result);
    for (var i = 0; i < config.length; ++i) {
        if (result >= config[i].min && result < config[i].max) {
            return config[i].value;
        }
    }
    return -1
}

function getWeightSize(result){
    switch (result) {
        case g.weightStatus.skinny:
            return 0
        case g.weightStatus.fat:
            return 2
        case g.weightStatus.normal:
            return 1
        default:
            return 0
    }
}
//取体重提示和小贴士
function getWeightTipInfo(week, result) {
    var tipInfo={};
    var tip = mem.m.weightAdvice_configs
    var w_size = getWeightSize(result)
    for (var i = 0 in tip) {
        if (w_size==tip[i].type) {
            tipInfo.con_sug = tip[i].con_sug
            tipInfo.con_diet = tip[i].con_diet
            break;
        }
    }
    

    return tipInfo
}

//取孕周的建议
function getWeightAdvice(week) {
    //取饮食建议
    var dietInfo={};
    var diets = mem.m.weight_diet_configs
     for (var idx in diets) {
        var diet = diets[idx]
        if (week >= diet.minweek && week <= diet.maxweek) {
            if(diet.type == 0){
                dietInfo.key = diet.con_sug
            }else if(diet.type == 1){
                dietInfo.eat = diet.con_sug
            }else if(diet.type == 2){
                dietInfo.sport = diet.con_sug
            }
        }
        if(dietInfo.key && dietInfo.eat && dietInfo.sport){break;}
    }  
    return dietInfo
}



// user_router.route('/getBehavior').get(function (req, res) {
//     db.user_behaviors.findOne({userid:"o6rXewG_WxyiS2ltJPbvWI15_cJw"}).then(function(data) {
//         if (data) {
//             res.json({data:data})
//         } else {
//             res.json({err:0});
//         }
//     })
// })

user_router.route('/quickloginwxUser').post(function (req, res) {
    var code = req.body.code || ''
    if (code === '') {
        res.json({ err: g.errorCode.WRONG_PARAM })
    } else {
        //去微信服务端登录。。。
        console.log('use code:' + code)
        utils.authFromWxServer({
            code:code
        },function(err, response, data) {
            if (data.ok) {
                jwt.sign({ wxid: data.ok.wxid }, cfg.secret, { expiresIn: cfg.expiresIn},function(err, token) { 
                    //返回标识
                    //记录用户token 登录时间
                    mem.r.pub.hmset('user:' + data.ok.wxid, {
                        token:token,
                        tokenTime: new Date().getTime(),
                        loginTime: new Date().getTime(),
                    },function(err) {
                        data.token = token
                        res.json(data)
                    });
                });
            } else {
                res.json(data)
            }
        })
    }
});


user_router.route('/getUserToken').post(function (req, res) {
    var wxid = req.decoded.wxid
    if (!wxid) {
        res.json({ err: g.errorCode.WRONG_PARAM })
    }
    jwt.sign({ wxid: wxid }, cfg.secret, { expiresIn: cfg.expiresIn},function(err, token) { 
            console.log('生成token')
         //记录用户token
        mem.r.pub.hmset('user:' + wxid, {
            token:token,
            tokenTime: new Date().getTime()
        },function(err) {
            console.log('刷新token:' + err)
            //判断行为是否异常
            mem.r.pub.hgetall('user:' + wxid,function(error, object) {
                console.log(object.loginTime)
                console.log(object.token)
                console.log('判断数据')
                var now = new Date().getTime();
                var loginTime = object.loginTime
                if (now - loginTime > 8 * 60 * 60 * 1000) {
                    //记录异常
                    console.log('出事了。。')
                }
            })
            res.json({ok:token})
        });
            console.log('hen??:')
    });
})

user_router.route('/getWeightInfo').post(function (req, res) {
    // console.log('token:' + req.decoded.wxid);
    // for(i in req.decoded) {
    //     console.log("key:" + i + "  " + "value:" + req.decoded[i]);
    // }
    var wxid = req.decoded.wxid || ''
    if (wxid == '') {
        res.json({ err: g.errorCode.WRONG_PARAM })
    } else {
        db.users.findOne({ where: { 'wxid': wxid } }).then(function (data) {
            if (data) {
                var shape = data.dataValues.shape
                if (!shape) {
                    //如果没有 shape 就补上
                    shape = getShape(data.weight, data.height)
                    db.users.update({shape:shape},{where:{id:data.id}});
                }
                db.weight_records.findOne({ where: { 'userid': wxid }, order: 'recordDate DESC' }).then(function (wdata) {
                    var lastPeriod = data.dataValues.lastPeriod;
                    if (!lastPeriod) {  //没有末次月经时间
                        res.json({ok:0})
                        return
                    }
                    var currentWeek = getWeek(lastPeriod);  //取当前周数
                    var currentStandard = getStandardWeight(currentWeek, data.dataValues.weight, shape, data.dataValues.isSingle).value;  //取当前标准体重
                    //取对应提示
                    var diet = getWeightAdvice(currentWeek)
                    if (wdata) {
                        var tip = getWeightTipInfo(currentWeek, wdata.result)
                        wdata.dataValues.currentWeek = currentWeek;
                        wdata.dataValues.currentStandard = currentStandard;
                        wdata.dataValues.diet = diet;   //饮食提示
                        wdata.dataValues.tip = tip; //体重提示
                        res.json({ ok: wdata.dataValues })
                    } else {
                        var resData = {
                            currentWeek: currentWeek,
                            currentStandard: currentStandard,
                            diet: diet
                        }
                        console.log('no weightRecord');
                        res.json({ ok: resData })
                    }
                })
            } else {
                //没数据
                res.json({ ok: 0 })
            }
        })

    }
})

//终端机调用。。。
user_router.route('/fillWeight').post(function (req, res) {
    var wxid = req.body.wxid || ''
    var weight = req.body.weight || ''
    var hospital_no = req.body.hospital_no || ''
    fillWeight(res,wxid,weight,hospital_no)
})

//用户调用
user_router.route('/userFillWeight').post(function (req, res) {
    var wxid = req.decoded.wxid || ''
    var weight = req.body.weight || ''
    var hospital_no = req.body.hospital_no || ''
    fillWeight(res,wxid,weight,hospital_no)
})
function fillWeight(res,wxid,weight,hospital_no) {
    if (wxid == '' || weight == '' || typeof Number(weight) != 'number') {
        res.json({ err: g.errorCode.WRONG_PARAM })
    } else {
        weight = Number(weight)
        //取出最新的一条数据 如果是当天存的 就覆盖掉
        var newRecord = { weight: weight, recordDate: new Date() };
        if (hospital_no != '') {
            newRecord.hospital = hospital_no
        }
        db.users.findOne({ where: { 'wxid': wxid } }).then(function (udata) {
            //计算周数
            if (udata) {
                var shape = udata.dataValues.shape
                if (!shape) {
                    //如果没有 shape 就补上
                    shape = getShape(udata.weight, udata.height)
                    db.users.update({shape:shape},{where:{id:udata.id}});
                }
                //根据算法 得出体重数据 存入体重数据表中
                //计算标准体重
                var lastPeriod = udata.dataValues.lastPeriod;
                var currentWeek = getWeek(lastPeriod);  //取当前周数
                newRecord.userid = wxid;
                newRecord.week = currentWeek;
                var standard = getStandardWeight(currentWeek, udata.dataValues.weight, shape, udata.dataValues.isSingle);
                newRecord.standard = standard.value
                var result
                if (weight < standard.min) {
                    result = g.weightStatus.skinny;
                } else if (weight > standard.max) {
                    result = g.weightStatus.fat
                } else {
                    result = g.weightStatus.normal
                }
                newRecord.result = result

                

                // console.log(newRecord)
                db.weight_records.update(newRecord, {
                    where: [
                        { userid: wxid },
                        db.sequelize.where(db.sequelize.fn('TO_DAYS', db.sequelize.col('recordDate')), '=', db.sequelize.fn('TO_DAYS', new Date()))
                    ]
                }).then(function (data) {
                    var tip = getWeightTipInfo(currentWeek, result)
                    var diet = getWeightAdvice(currentWeek)
                    var tempRecord = Object.assign({},newRecord)
                    tempRecord.tip = tip;
                    tempRecord.diet = diet;
                    if (data[0] != 0) {
                        console.log('更新体重数据')
                        // tempRecord.recordDate = newRecord.recordDate.toLocaleDateString()
                        res.json({ ok: tempRecord })
                    } else {
                        db.weight_records.create(newRecord).then(function () {
                            console.log('创建体重数据')
                            //取对应提示
                            
                            res.json({ ok: tempRecord })
                        }, function (err) {
                            console.log(err)
                            console.log('不能创建数据。。')
                            res.json({ ok: 0 })
                        })
                    }
                });
            } else {
                res.json({ ok: 0 })
            }
        })
    }
}

//取用户体重图表的数据
user_router.route('/getWeightChart').post(function (req, res) {
    var wxid = req.decoded.wxid || ''
    if (wxid == '') {
        res.json({ err: g.errorCode.WRONG_PARAM })
    } else {
        db.weight_records.findAll({
            where: { userid: wxid }
        }).then(function (records) {
            if (records) {
                //每周取一条体重最大的
                var result = [];
                var temp = {}
                for (var i = 0; i < records.length; i++) {
                    var rec = records[i];
                    var nowWeight
                    if (temp[rec.week]) {
                        nowWeight = temp[rec.week].weight
                    } else {
                        nowWeight = 0;
                    }
                    if (rec.weight > nowWeight) {
                        temp[rec.week] = rec;
                    }
                }
                for (var item in temp) {
                    //只取体重和周数
                    var data = {
                        week: temp[item].week,
                        weight: temp[item].weight
                    }
                    if (data.week >= 0) {
                        result.push(data)
                    }
                }
                res.json({ ok: result })
            } else {
                res.json({ ok: 0 })
            }
        })
    }
})

//取用户体重记录
user_router.route('/getWeightData').post(function (req, res) {
    var wxid = req.decoded.wxid || ''
    var offset = req.body.offset || 0
    var limit = req.body.limit || 0
    if (wxid === 0) {
        res.json({ err: g.errorCode.WRONG_PARAM })
    } else {
        db.weight_records.findAll({ order: 'recordDate DESC', offset: offset, limit: limit, where: { 'userid': wxid, week: { $gte: 0 } } }).then(function (records) {
            if (records) {
                res.json({ ok: records })
            } else {
                res.json({ ok: 0 })
            }
        })
    }
})

//保存用户资料
user_router.route('/updateInfo').post(function (req, res) {
    var wxid = req.decoded.wxid || ''
    var height = req.body.height || 0
    var weight = req.body.weight || 0
    weight = Number(weight);
    var lastPeriod = req.body.lastPeriod || 0
    var isSingle = req.body.isSingle || 0
    if (wxid === 0 || height == 0 || weight == 0 || lastPeriod == 0) {
        res.json({ err: g.errorCode.WRONG_PARAM })
    } else {
        //TODO 验证参数
        //计算体型
        var shape = getShape(weight, height);
        var newInfo = {
            height: height,
            weight: weight,
            shape: shape,
            lastPeriod: new Date(lastPeriod),
            isSingle: isSingle
        };
        db.users.update(
            newInfo,
            { where: { wxid: wxid } }
        ).then(function (data) {
            if (data) {
                //更新体重记录
                db.weight_records.findAll({ where: { userid: wxid } }).then(function (records) {
                    for (var i = 0; i < records.length; i++) {
                        var record = records[i];
                        var newRecord = {}
                        console.log('-------------')
                        console.log(new Date(lastPeriod))
                        console.log(record.recordDate)
                        console.log(new Date(record.recordDate));
                        var currentWeek = getWeek(new Date(lastPeriod), new Date(record.recordDate))
                        newRecord.week = currentWeek
                        var standard = getStandardWeight(currentWeek, weight, shape, isSingle);
                        newRecord.standard = standard.value
                        var result
                        if (record.weight < standard.min) {
                            result = g.weightStatus.skinny;
                        } else if (record.weight > standard.max) {
                            result = g.weightStatus.fat
                        } else {
                            result = g.weightStatus.normal
                        }
                        newRecord.result = result
                        
                        db.weight_records.update(
                            newRecord,
                            { where: { id: record.id } }
                        ).then(function () {
                            console.log('更新记录')
                        }, function (err) {
                            console.log(err)
                        })
                    }
                })
                res.json({ ok: newInfo });
            }
        })
    }
})

// 用戶最新報告
user_router.route('/get_user_latest_report').post(function(req,res){
    console.log('get_user_latest_report at:'+Date.now())
    var openid = req.decoded.wxid || ''
     if(openid === ''){
        res.json({error:g.errorCode.WRONG_PARAM})
    }else{
        getLatestReport(openid,res)
   }
})

function getLatestReport(openid,res){
    // db.yxd_basicinfos.findAndCountAll({attributes: ['mac_id','open_id','card_id','user_id','date_server',
    //     'name','birth','date_yunfu','hospital_name','doctor_name'],
    //     where:{open_id:openid},order: db.sequelize.literal('ID DESC'),limit:1}).then(function(records){
    //         // if(records.length>0){
    //         //     res.json({r:records[0]})
    //         // }else{
    //         //     res.json({r:{}})
    //         // }
    //         res.json({r:records})
    // }).catch(function(err){
    //     res.json({error:g.errorCode.WRONG_SQL})
    // })
    var query = `select yb.mac_id,yb.user_id,yb.open_id,yb.card_id,yb.name,yb.age,yb.sex,yb.date_server,
        ypp.left_width,ypp.left_length,ypp.right_length,ypp.right_width,yp.left_urla,yp.right_urla,
        ys.left_foot_size,ys.left_foot_width,ys.left_foot_width2,left_foot_status,ys.right_foot_size,ys.right_foot_width,
        ys.right_foot_width2,right_foot_status from yxd_basicinfos yb join yxd_pictures yp join yxd_parameters ypp join 
        yxd_suggestions ys ON yb.mac_id=yp.mac_id and yb.mac_id=ypp.mac_id and yb.mac_id=ys.mac_id and yb.open_id=? order by yb.id desc limit 1`
    db.sequelize.query(query, { replacements: [openid], 
        type: db.sequelize.QueryTypes.SELECT }
        ).then(function(records){
            //取足部建议
            if(records && records.length > 0){
                // console.log(records)
                var record = records[0]
                db.users.findOne({where:{'wxid':openid}}).then(function(data){
                    if(data){
                        // console.log(data.dataValues.lastPeriod)
                        var lastPeriod = data.dataValues.lastPeriod;
                        if (!lastPeriod) {  //没有末次月经时间
                            res.json({data:record})
                            return
                        }
                        var currentWeek = getWeek(lastPeriod);  //取当前周数
                        var footknowledges = mem.m.footknowledge_configs
                        for (var i in footknowledges) {
                            var fData = footknowledges[i]
                            if (fData.minWeek <= currentWeek && fData.maxWeek >= currentWeek) {
                                record.footknowledge = fData.content;
                                break;
                            }
                        }
                        var footTypeAdvice = mem.m.footType_advice_configs
                        // console.log(record)
                        for (var i in footTypeAdvice) {
                            var faData = footTypeAdvice[i]
                            var fy = record.left_foot_status == "正常足弓" ? record.right_foot_status : record.left_foot_status

                            if (faData.minWeek <= currentWeek && faData.maxWeek >= currentWeek && fy == faData.footType ) {
                                record.footAdvice = faData.content;
                            }
                        }
                        res.json({data:records})
                    } else {
                        res.json({data:[]})
                    }
                })
            }else{
                res.json({data:[]})
            }
        }).catch(function(err){
            res.json({error:g.errorCode.WRONG_SQL})
    })
}

// 報告細節,按ID取
user_router.route('/getreport').post(function(req,res){
    console.log('getreport at:'+Date.now())
    var report_id = req.body.rid || ''
    var openid = req.decoded.wxid || ''
    if(report_id==='' && openid===''){
        res.json({error:g.errorCode.WRONG_PARAM})
    }else{
        if(report_id==='' || report_id=="null" || report_id=="undefined" || report_id == null){
            getLatestReport(openid,res)
        }else{
            var query = `select yb.mac_id,yb.user_id,yb.open_id,yb.card_id,yb.name,yb.age,yb.sex,yb.date_server,
                ypp.left_width,ypp.left_length,ypp.right_length,ypp.right_width,yp.left_urla,yp.right_urla,
                ys.left_foot_size,ys.left_foot_width,ys.left_foot_width2,left_foot_status,ys.right_foot_size,ys.right_foot_width,
                ys.right_foot_width2,right_foot_status from yxd_basicinfos yb join yxd_pictures yp join yxd_parameters ypp join 
                yxd_suggestions ys ON yb.mac_id=yp.mac_id and yb.mac_id=ypp.mac_id and yb.mac_id=ys.mac_id and yb.mac_id=?`
            db.sequelize.query(query, { replacements: [report_id], 
                type: db.sequelize.QueryTypes.SELECT }
                ).then(function(records){
                if(records && records.length > 0){
                    var record = records[0]
                    if (!record) {
                        res.json({data:[]})
                        return;
                    }
                    //取足部建议
                    db.users.findOne({where:{'wxid':openid}}).then(function(data){
                        if(data){
                            var lastPeriod = data.dataValues.lastPeriod;
                            if (!lastPeriod) {  //没有末次月经时间
                                res.json({data:record})
                                return
                            }
                            var currentWeek = getWeek(lastPeriod);  //取当前周数
                            var footknowledges = mem.m.footknowledge_configs
                            for (var i in footknowledges) {
                                var fData = footknowledges[i]
                                if (fData.minWeek <= currentWeek && fData.maxWeek >= currentWeek) {
                                    record.footknowledge = fData.content;
                                    break;
                                }
                            }
                            var footTypeAdvice = mem.m.footType_advice_configs
                            for (var i in footTypeAdvice) {
                                var faData = footTypeAdvice[i]
                                var fy = record.left_foot_status == "正常足弓" ? record.right_foot_status : record.left_foot_status
                                if (faData.minWeek <= currentWeek && faData.maxWeek >= currentWeek && fy == faData.footType ) {
                                    record.footAdvice = faData.content;
                                }
                            }
                            res.json({data:records})
                        }
                    })
                }else{
                    res.json({data:[]})
                }
            }).catch(function(err){
                res.json({error:g.errorCode.WRONG_SQL})
            })
        }
    }
})





module.exports = user_router;
