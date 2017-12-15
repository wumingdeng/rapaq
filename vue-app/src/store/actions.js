// import g from '../globals/global'
import g from '../globals/global'

var serverAddress
if (process.env.NODE_ENV == 'development') {
  serverAddress = g.debugServerAddress;
} else {
  serverAddress = g.serverAddress;
}

function onErrorRefresh(vue,err) {
  // vue.$f7.params.modalButtonOk = '刷新'
  alert(err || '刷新重试',()=>{
    // window.location.reload(); 
  })
}

function onErrorHandler(errCode) {
  if (errCode == 101) {
    //token过期了
    Global.s.state.isLogin = false; //重新登录
    Global.v.$router.replace('/')
  } else if (errCode == 23) {
    // Global.v.$f7.alert('','无效的二维码',function() {
    //   //关闭页面
    //   if (typeof WeixinJSBridge != "undefined") {
    //       WeixinJSBridge.invoke("closeWindow")
    //   } 
    // })
  } else if (errCode == 999) {
    Global.v.$f7.alert('','参数错误')
  }
}


//用户申提现明细
export function getShare ({commit, state},data) {
  var self = data.self;
  self.$http.get(g.serverAddress+'/api/getShare',data.info)
    .then((response) => {
      // success callback
      console.log(response)
      if (data.callback) {
        data.callback(self,response)
      }
      if(response.body.err){
        // onErrorHandler(response.body.err)
        // self.$f7.alert('',response.body.err)
      }     
    }, (response) => {
      // error callback
      // onErrorRefresh(self);
    });
}

export function getMaker ({commit, state},data) {
  var self = data.self;
  self.$http.get(g.serverAddress+'/api/getMaker',data.info)
    .then((response) => {
      // success callback
      if (data.callback) {
        data.callback(self,response)
      }
      if(response.body.err){
        // onErrorHandler(response.body.err)
        // self.$f7.alert('',response.body.err)
      }     
    }, (response) => {
      // error callback
      // onErrorRefresh(self);
    });
}
export function getBlogById ({commit, state},data) {
  var self = data.self;
  console.log("getBlogById")
  self.$http.post(g.serverAddress+'/api/getBlogById',data.info)
    .then((response) => {
      // success callback
      if (data.callback) {
        data.callback(self,response)
      }
      if(response.body.err){
        // onErrorHandler(response.body.err)
        // self.$f7.alert('',response.body.err)
      }     
    }, (response) => {
      // error callback
      // onErrorRefresh(self);
    });
}

//取活动数据
export function getActivity ({commit, state},data) {
  var self = data.self;
  self.$http.post(g.serverAddress+'/api/getActivity',data.info)
    .then((response) => {
      // success callback
      console.log(response)
      if (data.callback) {
        data.callback(self,response)
      }
      if(response.body.err){
        // onErrorHandler(response.body.err)
        // self.$f7.alert('',response.body.err)
      }     
    }, (response) => {
      // error callback
      // onErrorRefresh(self);
    });
}
//取活动数据
export function getActivityById ({commit, state},data) {
  var self = data.self;
  self.$http.post(g.serverAddress+'/api/getActivityById',data.info)
    .then((response) => {
      // success callback
      console.log(response)
      if (data.callback) {
        data.callback(self,response)
      }
      if(response.body.err){
        // onErrorHandler(response.body.err)
        // self.$f7.alert('',response.body.err)
      }     
    }, (response) => {
      // error callback
      // onErrorRefresh(self);
    });
}