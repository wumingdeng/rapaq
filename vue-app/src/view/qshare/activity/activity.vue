<template>
  <div class="wrapper">
    <div class="mask"></div>
    <div class="shareMask" data-id="shareMask"></div>
    <shareNav></shareNav>
    <div class="wrapper-inner">
      <div class="classify">
        <div class="classify-bar">
          <ul>
            <li class="bar__btn1" style="'cursor: pointer;"><span class="bar__btntop">{{eventSelected}}</span><span class="arrow"></span></li>
            <li class="bar__btn2" style="'cursor: pointer;"><span class="bar__btntop">{{areaSelected}}</span><span class="arrow"></span></li>
            <li class="bar__btn3" style="'cursor: pointer;"><span class="bar__btntop">{{orderSelected}}</span><span class="arrow"></span></li>
          </ul>
        </div>
        <div class="classify-act1 is--hide">
          <ul>
            <div @click="getEventType(0,'所有活動')">
              <li>所有活動</li>
            </div>
            <div @click="getEventType(2,'設計徵件')">
              <li>設計徵件</li>
            </div>
            <div @click="getEventType(3,'講座課程')">
              <li>講座課程</li>
            </div>
            <div @click="getEventType(4,'展覽活動')">
              <li>展覽活動</li>
            </div>
            <div @click="getEventType(5,'藝文展演')">
              <li>藝文展演</li>
            </div>
            <div @click="getEventType(6,'戶外生活')">
              <li>戶外生活</li>
            </div>
            <div @click="getEventType(8,'其他')">
              <li>其他</li>
            </div>
          </ul>
        </div>
        <div class="classify-act2 is--hide">
          <div class="classify-act2-wrap">
            <div class="classify-act2__title">
              <div @click="getAreaType(0,'所有地區')">
                <li style="display: inherit;">所有地區</li>
              </div>
            </div>
            <div class="classify-act2-items">
              <div class="itemsList itemsList1">
                <div class="itemsList__name">台灣
                  <div class="on-off">
                    <span></span>
                    <span></span>
                  </div>
                </div>
                <ul class="itemsList-article">
                  <div @click="getAreaType(1,'台北')">
                    <li>台北</li>
                  </div>
                  <div @click="getAreaType(2,'新北')">
                    <li>新北</li>
                  </div>
                  <div @click="getAreaType(3,'基隆')">
                    <li>基隆</li>
                  </div>
                  <div @click="getAreaType(4,'宜蘭')">
                    <li>宜蘭</li>
                  </div>
                  <div @click="getAreaType(5,'桃園')">
                    <li>桃園</li>
                  </div>
                  <div @click="getAreaType(6,'新竹')">
                    <li>新竹</li>
                  </div>
                  <div @click="getAreaType(7,'苗栗')">
                    <li>苗栗</li>
                  </div>
                  <div @click="getAreaType(8,'台中')">
                    <li>台中</li>
                  </div>
                  <div @click="getAreaType(9,'彰化')">
                    <li>彰化</li>
                  </div>
                  <div @click="getAreaType(10,'南投')">
                    <li>南投</li>
                  </div>
                  <div @click="getAreaType(11,'雲林')">
                    <li>雲林</li>
                  </div>
                  <div @click="getAreaType(12,'嘉義')">
                    <li>嘉義</li>
                  </div>
                  <div @click="getAreaType(13,'台南')">
                    <li>台南</li>
                  </div>
                  <div @click="getAreaType(14,'高雄')">
                    <li>高雄</li>
                  </div>
                  <div @click="getAreaType(15,'屏東')">
                    <li>屏東</li>
                  </div>
                  <div @click="getAreaType(16,'花蓮')">
                    <li>花蓮</li>
                  </div>
                  <div @click="getAreaType(17,'台東')">
                    <li>台東</li>
                  </div>
                  <div @click="getAreaType(18,'澎湖')">
                    <li>澎湖</li>
                  </div>
                  <div @click="getAreaType(19,'金門')">
                    <li>金門</li>
                  </div>
                  <div @click="getAreaType(20,'馬祖')">
                    <li>馬祖</li>
                  </div>
                </ul>
              </div>
              <div class="itemsList itemsList1">
                <div class="itemsList__name">其他
                  <div class="on-off">
                    <span></span>
                    <span></span>
                  </div>
                </div>
                <ul class="itemsList-article">
                  <div @click="getAreaType(21,'中國大陸')">
                    <li>中國大陸</li>
                  </div>
                  <div @click="getAreaType(22,'香港')">
                    <li>香港</li>
                  </div>
                  <div @click="getAreaType(23,'澳門')">
                    <li>澳門</li>
                  </div>
                  <div @click="getAreaType(24,'新加坡')">
                    <li>新加坡</li>
                  </div>
                  <div @click="getAreaType(25,'美國')">
                    <li>美國</li>
                  </div>
                  <div @click="getAreaType(26,'線上')">
                    <li>線上</li>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="classify-act3 is--hide">
          <ul>
            <div @click="getOrderType(1,'最新活動')">
              <li>最新活動</li>
            </div>
            <div @click="getOrderType(2,'本週活動')">
              <li>本週活動</li>
            </div>
            <div @click="getOrderType(3,'設群推薦')">
              <li>設群推薦</li>
            </div>
            <div @click="getOrderType(4,'最多瀏覽')">
              <li>最多瀏覽</li>
            </div>
            <div @click="getOrderType(5,'最多收藏')">
              <li>最多收藏</li>
            </div>
            <div @click="getOrderType(6,'結束活動')">
              <li>結束活動</li>
            </div>
          </ul>
        </div>
      </div>
      <section class="a-activity">
        <div class="a-activity-wrap">
          <ul class="a-activity-list">
            <li v-for="(item,index) in activityData">
              <div class="list__pic">
                <router-link :to="{ path: 'activityShow', query: { id: item.id }}">
                  <img :src="item.cover_image" :alt="item.title">
                </router-link>
              </div>
              <div class="list-text">
                <div class="list-text__date">
                  <span>{{item.start_time.substring(0,10)}}</span> - <span>{{item.end_time.substring(0,10)}}</span>
                </div>
                <div class="list-text__title">
                  <span itemprop="name">
                    <router-link :to="{ path: 'activityPage', query: { id: item.id }}">
                      {{item.title}}
                    </router-link>
                  </span>
                </div>
                <div class="list-text-info">
                  <div class="list-text-info__category">
                    <div @click="getData(0,15,JSON.parse(item.event_type).id)">
                      {{JSON.parse(item.event_type).name}}
                    </div>
                  </div>
                  <div class="list-text-info__freq">{{item.views}}次瀏覽</div>
                </div>
                <div class="list-text__like create_collect" :primary_id="item.id" type="3"></div>
              </div>
            </li>
          </ul>
          <div class="a-activity__btn btn-style-big" id="activity-loadmore" :load_more_id="loadedNum"
            v-show="showLoadMore"
            @click="loadMore">載入更多</div>
          <div class="page-empty" v-show="activityData.length == 0">
              <img src="static/img/icons/no-activity.svg" alt="">
              <p>尚無活動</p>
          </div>
        </div>
      </section>
      
      <cusfooter></cusfooter>
    </div>
  </div>
</template>

<script>
	import shareNav from '../shareNav'
  import cusfooter from '../../../components/footer'
  import sf from '../../../../static/js/share/common.js'
  export default {
    data () {
      return {
        num: 15,  //每次取活动的个数
        loadedNum: 0, //已加载的tiao s
        activityData: [],
        eventSelected: '所有活動',
        areaSelected: '所有地區',
        orderSelected: '最新活動',
        eventType: 0,
        areaType: 0,
        orderType: 0
      }
    },
    components:{
      "shareNav":shareNav,
      "cusfooter":cusfooter,
    },
    computed: {
      showLoadMore() {
        if (this.loadedNum % this.num == 0) {
          return true
        }
        return false
      }
    },
    methods:{
      closeList() {
        if($('.bar__btn1').hasClass('mc')) {
          $('.bar__btn1').trigger('click')
        } else if($('.bar__btn2').hasClass('mc')) {
          $('.bar__btn2').trigger('click')
        } else if($('.bar__btn3').hasClass('mc')) {
          $('.bar__btn3').trigger('click')
        }
      },
      getEventType(value,name) {
        this.closeList()
        this.eventSelected = name
        this.eventType = value
        this.getData(0,this.num,value,this.areaType,this.orderType)
      },
      getAreaType(value, name) {
        this.closeList()
        this.areaSelected = name
        this.areaType = value
        this.getData(0,this.num,this.eventType, value, this.orderType)
      },
      getOrderType(value, name) {
        this.closeList()
        this.orderSelected = name
        this.orderType = value
        this.getData(0,this.num,this.eventType, this.areaType, value)
      },
      getData(first_id, num, event_type, area_type, order_type) {
        this.$store.dispatch('getActivity',{
          self: this,
          info: {
            first_id: first_id,
            num: num,
            event_type: event_type,
            area_type: area_type,
            order_type: order_type
          },
          callback(self, res) {
            if (res.body.ok) {
              console.log(res.body.ok)
              if (first_id == 0) {
                self.activityData = res.body.ok
                self.loadedNum = self.activityData.length
              } else {
                self.activityData = self.activityData.concat(res.body.ok)
                self.loadedNum += self.activityData.length
              }
            }
          }
        })
      },
      loadMore() {
        this.getData(this.loadedNum,this.num,this.eventType,this.areaType,this.orderType)
        $('html,body').animate({
          scrollTop: $(this).offset().top - 20
        }, 1500);
      },
      loadData() {
        var append_obj, loadmore_obj;
        var data = {};
        var num = this.num;
        data.first_id = this.num
        data.num = num;

        data.order_type = null;

        var url = "https://qshare.rapaq.com/event/loadmore";
        append_obj = $(".a-activity-list");
        loadmore_obj = $("#activity-loadmore");
        data.event_type = null;
        data.area_type = null;

        if (submitting) {
          return false;
        }
        submitting = true;

        $.ajax({
          url: url,
          dataType: 'json',
          type: "GET",
          data: data,
          error: function(xhr, ajaxOptions, throwError) {
            alert('例外錯誤！\n(' + xhr.status + ") " + throwError);
            window.location.reload();
          },
          success: function(result) {
            if (result.html.length > 0) {
              append_obj.append(result.html);
              loadmore_obj.attr('load_more_id', parseInt(parseInt(loadmore_obj.attr('load_more_id')) + parseInt(num)));
              submitting = false;
              if (result.data_num < num) {
                loadmore_obj.remove();
              }
            } else {
              loadmore_obj.fadeOut(500);
              submitting = false;
            }
          }
        });
      }
    },
    created() {
    },
    mounted() {
      sf.initClassify()
      console.log('mounted...')
      this.getData(0,15)
    },
    beforeDestroy() {
      // sf.distroy()
    }
  }
	
</script>

<style type="text/css" src="../../../../static/css/share/activity.css" scoped></style>
<style>
	
</style>