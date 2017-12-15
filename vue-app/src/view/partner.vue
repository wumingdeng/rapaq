<template>
    <div class="wrapper">
                  <div class="mask"></div>
        <div class="mask-z" style="display: none;"></div>
        <nav class="nav nav-index is-active nav-index--click">
            <div class="nav-load"><div class="nav-content">
        <div class="nav-content-mainbar">
            <div class="mainbar__logo" style="background-color: transparent">
                <a href="https://qmaker.rapaq.com">
                    <div class="mainbar__logo__logo" style='display: block;'></div>
                </a>
            </div>
            <div class="mainbar-aside">
                <div class="mainbar-aside__click">                    
                    <div class="click-close">
                        <span class="click-close__left"></span>
                        <span class="click-close__right"></span>
                    </div>
                    <div class="click-menubtn"></div>
                </div>
                <div class="mainbar-aside-menu">
                    <div class=""><a href="#" onclick="comingsoon();">計畫探索</a></div>
                    <div class=""><a href="#" onclick="comingsoon();">發起計畫</a></div>
                    <div class=""><a href="https://qmaker.rapaq.com/partner/index">創創夥伴</a></div>
                </div>
                <div class="mainbar-aside-search">
                    <input id="search" placeholder="請輸入關鍵字" class="search__input" type="text">
                    <button class="search__icon"> <a href="#"></a></button>
                </div>
                                <div class="mainbar-aside-login nav-login">
                    <div style="height: 60px; width: 60px;" class="mainbar-aside-member-div"></div>
                </div>  
                  
            </div>
        </div>
        <div class="nav-content-toggle is--hide">
            <div class="toggle__search">
                <input placeholder="請輸入關鍵字" class="search__input" name="keyword" type="text">
                <form action="https://qmaker.rapaq.com/explore/search" method="POST" id="search_form_nav" enctype="multipart/form-data">
                <input name="nav_keyword" id="nav_keyword" type="hidden">
                <input name="_token" id="_token" value="xqlpIeFQ58to7bAKnS41k7uNlYyQGpguE4TKFFnv" type="hidden">
                </form>
                <button class="search__icon"><a href="#"></a></button>
            </div>
            <div class="toggle-menu">
                <div class=""><a href="#" onclick="comingsoon();">計劃探索</a></div>
                <div class=""><a href="#" onclick="comingsoon();">發起計劃</a></div>
                <div class=""><a href="https://qmaker.rapaq.com/partner/index">創創夥伴</a></div>
            </div>
            <ul class="toggle-webs">
                <li class="toggle-webs__1">
                    <a href="https://www.rapaq.com" target="_blank" style="color:#fff">
                    <div>RAPAQ</div>
                    <div class="webs__bg"></div>  
                    </a>
                </li>
                <li class="toggle-webs__4">
                    <div>
                        <a href="https://qshare.rapaq.com" target="_blank" style="color:#fff">
                        <span>設群</span>
                        <span>・</span>
                        <span>Q’Share</span>
                        </a>
                    </div>
                    <div class="webs__bg"></div> 
                </li>
                <li class="toggle-webs__2">
                    <div>
                        <a href="https://qgoods.rapaq.com" target="_blank" style="color:#fff">
                        <span>好物</span>
                        <span>・</span>
                        <span>Q’Goods</span>
                        </a>
                    </div>
                    <div class="webs__bg"></div> 
                </li>
                <li class="toggle-webs__5">
                    <div>
                        <a href="https://qmaker.rapaq.com" style="color:#fff">
                        <span>創創</span>
                        <span>・</span>
                        <span>Q’Maker</span>
                        </a>
                    </div>
                    <div class="webs__bg"></div> 
                </li>
                 <li class="toggle-webs__3">
                    <div>
                        <a href="http://point.rapaq.com" target="_blank" style="color:#fff">
                        <span>破點</span>
                        <span>・</span>
                        <span>Point</span>
                        </a>
                    </div>
                    <div class="webs__bg"></div> 
                </li>
            </ul>
        </div>
    </div>
</div>
</nav>
        <div class="wrapper-index ">
            <header class="f-header">
                <div class="f-header-wrap">
                                        <div class="f-header__bgimg" :style="'background-image:url('+getPartnerImg()">
                                       
                    </div>
                    <div class="f-header-focus">
                        <div class="f-header-focus__pic">
                            <img :src="html['f-header-focus__pic']" alt="">
                        </div>
                        <div class="f-header-focus__name">
                            {{html['f-header-focus__name']}}
                        </div>
                        <div class="f-header-focus-icons">
                                                        <div class="icons__like list__like"> </div>
                                                        <div class="icons__share list__share"></div>
                        </div>
                        <div class="f-header-focus-share" style="display: none;">
    <div class="share__title">分享</div>
    <div id="scrolling-icons" style="">
        <ul class="share-icons" style="touch-action: pan-y; -moz-user-select: none; width: 184px; transform: translate3d(-58px, 0px, 0px);">
            <li class="share-icons__fb itemslide-active">
                <a href="https://www.facebook.com/sharer/sharer.php?u=http://qmaker.rapaq.com/partner/show/4" target="_blank"><img src="https://qmaker.rapaq.com/img/icons/share-fb.svg " alt=""></a>
            </li>
            <li class="share-icons__li">
                <div class="line-it-button" data-lang="zh_Hant" data-type="share-d" data-url="http://qmaker.rapaq.com/partner/show/4" style="display: none;"></div>
            </li>
            <li class="share-icons__wb">
                <a href="http://service.weibo.com/share/share.php?url=http://qmaker.rapaq.com/partner/show/4&amp;title=力志國際光電股份有限公司&amp;pic=https://qmaker.rapaq.com/png" target="_blank"><img src="https://qmaker.rapaq.com/img/icons/share-weibo.svg " alt=""></a>
            </li>
        </ul>
        <div class="share__triangle triangle-shadow"></div>
        <div class="share__triangle"></div>
        <div class="share-href">
            <div class="share-href__copy"></div>
            <input class="share-href__input" value="http://qmaker.rapaq.com/partner/show/4" type="text">
        </div>
        <div class="share__cancel">
            <span>取消</span>
        </div>
    </div>
</div>

                    </div>
                </div>
            </header>
            <div class="f-coopBtn btn-border"><a href="https://qmaker.rapaq.com/member/factory_apply">廠商合作</a></div>
            <section class="f-about">
                <div class="f-about-wrap section-wrap">
                    <div class="f-about__title f-title">關於</div>
                    <div class="f-about__pic">
                                                <img src="https://qmaker.rapaq.com/img/factory/4.png" alt="">
                            
                    </div>
                    <div class="f-about__text">
                        {{html['f-about__text']}}
                    </div>
                </div>
            </section>
                        <section class="f-goods">
                <div class="f-goods-wrap section-wrap">
                    <div class="f-goods__title f-title">好物推薦</div>
                    <div class="f-goods-recommend">
                        <ul class="f-goods-recommend-list">
                            <li v-for="(item,idx) in html['infos']" :key="idx">
                                <div class="info-pic">
                                   <a href="https://qgoods.rapaq.com/products/1443">
                                        <div class="info-pic__pic" :style="'background-image:'+item['info-pic__pic'] ">
                                        </div>
                                    </a>
                               </div>
                               <div class="info-all">
                                    <div class="info-text">
                                        <div class="info__brand"><a href="https://qgoods.rapaq.com/brand/"></a></div>
                                        <div class="info__name"><a href="https://qgoods.rapaq.com/products/1443">{{item['info__name']}}</a></div>
                                        <div class="info__store"><a href="https://qgoods.rapaq.com/store/91010777">{{item['info__store']}}</a></div>
                                    </div>
                                    <div class="info__price">
                                                                                <span class="price-sale">
                                            {{item['info__price']}}
                                        </span>
                                                                            </div> 
                                    <div class="info__cart"></div>
                               </div>
                            </li>
                                                    </ul>
                    </div>
                </div>
            </section>
                    </div>
        <cusfooter></cusfooter>
    </div>
</template>
        
<script>
import cusfooter from "../components/footer";
import sf from "../../static/js/maker/custom.js";
export default {
  data() {
    return {
      loading: false,
      html: {},
      pid: 0,
      resData: {},
      didScrollID: {}
    };
  },
  components: {
    cusfooter: cusfooter
  },
  methods: {
      getPartnerImg(){
          var filename= 'factory'+this.pid+'.png'
          if(this.pid === '1' || this.pid ==='2' || this.pid === '3'){
              filename ='banner@2x.png'
          }
          return window.Global.serverAddress+'/img/qmark/'+filename
      },
    getWeb(fb) {
      this.$store.dispatch("getPartnerById", {
        self: this,
        info: { id: this.pid },
        callback(self, res) {
          self.html = res.body;
          fb();
        }
      });
    },
    onLoad() {
      console.log("onload");
    }
  },
  created() {
    this.didScrollID = sf();
  },
  mounted() {
    this.pid = this.$route.params.id || 1;
    this.getWeb(() => {
      //   document.getElementById("page-inner").innerHTML = this.html["page-inner"];
    });
  },
  beforeDestroy() {
    if (this.didScrollID) {
      clearInterval(this.didScrollID);
    }
    $(window).off("scroll");
  }
};
</script>
<style>
@import url("../../static/css/maker/base.css");
@import url("../../static/css/maker/search.css");
@import url("../../static/css/maker/layout.css");
@import url("../../static/css/maker/QMaker.css");
@import url("../../static/css/maker/swiper.css");
@import url("../../static/css/maker/sweetalert2.css");
@import url("../../static/css/maker/helper.css");
.f-header {
  width: 100%;
  height: 505px;
  position: relative;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background-position: 50% 50%;
  background-size: 100%;
  background-repeat: no-repeat;
}

.f-header__bgimg {
  width: 100%;
  height: 505px;
  background-size: cover;
  background-position: 50% 50%;
  filter: blur(10px);
  -webkit-filter: blur(10px);
  -webkit-filter: blur(10px);
  -o-filter: blur(10px);
  -webkit-transform: scale(1.08);
  -moz-transform: scale(1.08);
  -ms-transform: scale(1.08);
  transform: scale(1.08);
  z-index: -1;
  position: absolute;
}

.f-header__bgimg:before {
  display: block;
  content: '';
  width: 100%;
  height: 505px;
  background-color: rgba(46, 46, 46, 0.2);
  position: absolute;
  z-index: 1;
}

.f-header-focus {
  text-align: center;
  padding-top: 210px;
  position: relative;
}

.f-header-focus__pic {
  width: 90px;
  height: 90px;
  margin: 0 auto;
  position: relative;
  -moz-border-radius: 4px;
  -webkit-border-radius: 4px;
  border-radius: 4px;
  position: relative;
  z-index: 5;
  overflow: hidden;
}

.f-header-focus__pic img {
  width: 100%;
  height: auto;
  position: relative;
}

.f-header-focus__name {
  margin-top: 20px;
  color: #fff;
  font-size: 30px;
}

.f-header-focus-icons {
  width: 100%;
  position: relative;
  margin-top: 20px;
  text-align: center;
}

.f-header-focus-icons div {
  width: 44px;
  height: 44px;
  display: inline-block;
  position: relative;
  background-size: 30px 30px;
}

.f-header-focus-icons .list__like {
  /* background-image: url("../img/icons/like-w.svg"); */
}

.f-header-focus-icons .list__like.is--active {
  /* background-image: url("../img/icons/like--active.svg"); */
  background-size: 100% 100%;
}

.f-header-focus-icons .list__like.is--disabled {
  pointer-events: none;
  cursor: default;
  /* background-image: url("../img/icons/like--disabled.svg"); */
}

.f-header-focus-icons .list__like.is--disabled:hover {
  /* background-image: url("../img/icons/like--disabled.svg"); */
}

.f-header-focus-icons .list__share {
  /* background-image: url("../img/icons/share-w.svg"); */
}

.f-header-focus-icons .list__share.is--active {
  /* background-image: url("../img/icons/share--active.svg"); */
  background-size: 100% 100%;
}

.f-header-focus-share {
  position: absolute;
  top: 446px;
  left: calc(50% + 22px);
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
  z-index: 11;
  background-color: #fff;
  padding: 14px 0;
  -webkit-box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.2);
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.2);
}

.f-header-focus-share .share__title {
  display: none;
}

.f-header-focus-share .share-icons {
  padding: 0 14px 16px;
}

.f-header-focus-share .share-icons li {
  display: inline-block;
  margin-right: 10px;
  width: 44px;
  height: 44px;
  -moz-border-radius: 4px;
  -webkit-border-radius: 4px;
  border-radius: 4px;
  cursor: pointer;
}

.f-header-focus-share .share-icons li:last-child {
  margin-right: 0 !important;
}

.f-header-focus-share .share-icons:after {
  clear: both;
  content: "";
  display: table;
}

.f-header-focus-share .share__triangle {
  position: absolute;
  top: -7px;
  right: calc(50% - 10px);
  overflow: hidden;
  width: 12px;
  height: 12px;
  background: #fff;
  border-top: 1px solid #ddd;
  border-left: 1px solid #ddd;
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

.f-header-focus-share .share-href {
  padding: 20px 14px 0;
  border-top: 1px solid #ddd;
}

.f-header-focus-share .share-href__copy {
  float: left;
  width: 44px;
  height: 44px;
  -moz-border-radius: 4px;
  -webkit-border-radius: 4px;
  border-radius: 4px;
  border: 1px solid #ddd;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  /* background: url("../img/icons/share-copy.svg") 50% 50% no-repeat; */
}

.f-header-focus-share .share-href__input {
  width: calc(100% - 58px);
  font-size: 14px;
  float: right;
  height: 44px;
}

.f-header-focus-share .share-href:after {
  clear: both;
  content: "";
  display: table;
}

.f-header-focus-share .share__cancel {
  display: none;
}

@media only screen and (min-width: 769px) {
  .f-header-focus-icons .list__like:hover {
    /* background-image: url("../img/icons/like--hover.svg"); */
    background-size: 70% 70%;
  }
  .f-header-focus-icons .list__share:hover {
    /* background-image: url("../img/icons/share--active.svg"); */
    background-size: 100% 100%;
  }
}

@media only screen and (max-width: 414px) {
  .f-header-focus-share {
    max-width: 100%;
    width: 100%;
    left: 0;
    -webkit-transform: translateX(0%);
    -ms-transform: translateX(0%);
    transform: translateX(0%);
    top: auto;
    position: fixed;
    bottom: 0;
    padding: 0 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  .f-header-focus-share .share__title {
    display: block;
    text-align: center;
    font-size: 18px;
    width: 100%;
    padding: 15px 0;
    border-bottom: 1px solid #f2f2f2;
    color: #929292;
  }
  .f-header-focus-share .share-icons {
    padding: 20px 0px 14px;
    text-align: center;
  }
  .f-header-focus-share .share-icons li {
    float: left;
    margin-left: 14px;
    margin-right: 0;
  }
  .f-header-focus-share .share__triangle {
    display: none;
  }
  .f-header-focus-share .share-href {
    border-top: 1px solid #f2f2f2;
    padding: 0 14px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding-top: 20px;
  }
  .f-header-focus-share .share__cancel {
    display: block;
    width: 100%;
    padding: 20px 14px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding-bottom: 14px;
  }
  .f-header-focus-share .share__cancel span {
    display: block;
    padding: 15px 0;
    background-color: #4a4a4a;
    text-align: center;
    color: #fff;
    -moz-border-radius: 4px;
    -webkit-border-radius: 4px;
    border-radius: 4px;
  }
}

.f-coopBtn {
  position: absolute;
  z-index: 1;
  top: 450px;
  text-align: center;
  background-color: #5a11bd;
  color: #fff;
  left: 50%;
  margin-left: -57px;
}

.f-coopBtn a {
  color: #fff;
}

.f-coopBtn.is--docking {
  width: 220px;
  position: fixed;
  bottom: 10px;
  top: auto;
  z-index: 7;
  margin-left: -110px;
  -webkit-transition: all 0.2s ease;
  -o-transition: all 0.2s ease;
  transition: all 0.2s ease;
}

.f-coopBtn.is--docking.is--bottom {
  bottom: 310px;
}

@media only screen and (max-width: 768px) {
  .f-coopBtn.is--docking.is--bottom {
    bottom: 110px;
  }
}

@media only screen and (max-width: 500px) {
  .f-coopBtn.is--docking {
    -moz-border-radius: 0;
    -webkit-border-radius: 0;
    border-radius: 0;
    margin-left: 0;
    left: 0;
    width: 100%;
    bottom: 0;
  }
  .f-coopBtn.is--docking.is--bottom {
    -moz-border-radius: 50px;
    -webkit-border-radius: 50px;
    border-radius: 50px;
    width: 220px;
    left: 50%;
    margin-left: -110px;
  }
}

.f-title {
  font-size: 24px;
  font-weight: bold;
  color: #2e2e2e;
  text-align: center;
  margin-bottom: 20px;
}

@media only screen and (max-width: 414px) {
  .f-title {
    margin-bottom: 20px;
  }
}

.f-about {
  background-color: #fff;
}

.f-about-wrap {
  width: 620px;
}

.f-about__pic img {
  width: 100%;
  display: block;
}

.f-about__text {
  margin-top: 30px;
  font-size: 15px;
  line-height: 1.47;
  color: #666;
}

@media only screen and (max-width: 960px) {
  .f-about-wrap {
    max-width: 620px !important;
  }
}

@media only screen and (max-width: 768px) {
  .f-about {
    padding-bottom: 60px;
  }
  .f-about-wrap {
    width: 600px;
    padding: 0 14px !important;
  }
  .f-about__text {
    margin-top: 20px;
  }
}

@media only screen and (max-width: 414px) {
  .f-about {
    padding-bottom: 50px;
  }
  .f-about-wrap {
    padding: 0 14px !important;
  }
}

.f-goods {
  padding-bottom: 60px;
}

.f-goods-recommend {
  padding-bottom: 30px;
  width: 100%;
  overflow: hidden;
}

.f-goods-recommend-list li {
  position: relative;
  margin-bottom: 20px;
  float: left;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background-color: #fff;
  width: 31.91489%;
  float: left;
  margin-right: 2.12766%;
}

.f-goods-recommend-list li:nth-child(3n) {
  margin-right: 0;
}

.f-goods-btn {
  margin-top: 20px;
  text-align: center;
}

@media only screen and (max-width: 768px) {
  .f-goods {
    padding-bottom: 80px;
  }
}

@media screen and (max-width: 667px) {
  .f-goods-recommend-list > li {
    width: 47.5%;
    width: calc(50% - 10px);
    margin-right: 20px;
  }
  .f-goods-recommend-list > li:nth-child(3n) {
    margin-right: 20px;
  }
  .f-goods-recommend-list > li:nth-child(2n) {
    margin-right: 0;
  }
}

@media screen and (max-width: 450px) {
  .f-goods {
    padding-bottom: 100px;
  }
  .f-goods-recommend-list > li {
    width: 100%;
    height: auto;
    margin: 0 auto;
    position: relative;
    margin-bottom: 20px;
  }
  .f-goods-recommend-list > li:last-child {
    margin-bottom: 0px;
  }
}

.info-pic__pic {
  height: 0;
  width: 100%;
  padding-bottom: 50%;
  position: relative;
  background-size: cover;
  background-position: 50%  50%;
}

.info-all {
  background-color: #fff;
  padding: 20px 20px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

@media only screen and (max-width: 414px) {
  .info-all {
    padding: 14px 14px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
}

.info-text {
  height: 100px;
}

.info__name {
  margin-top: 5px;
  font-weight: bold;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  color: #2e2e2e;
}

@-moz-document url-prefix() {
  .info__name {
    max-height: 48px;
  }
}

.info__name a {
  color: #2e2e2e;
}

.info__name a:hover {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  color: #5a11bd;
}

.info__brand, .info__store {
  color: #5a11bd;
  font-size: 14px;
  position: relative;
  width: 70%;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.info__brand a, .info__store a {
  color: #5a11bd;
}

.info__brand a:hover, .info__store a:hover {
  text-decoration: underline;
}

.info__store {
  margin-top: 5px;
}

.info__store a {
  color: #666;
}

.info__price {
  font-size: 15px;
  margin-top: 12px;
}

.info__price .price-offical {
  color: #bbb;
  text-decoration: line-through;
}

.info__price .price-offical::after {
  content: '锛�';
  display: inline-block;
  color: #2e2e2e;
}

.info__price .price-sale {
  color: #5a11bd;
}

@media only screen and (max-width: 414px) {
  .info__price {
    left: 14px;
    bottom: 14px;
  }
}

.info__cart {
  /* background: url("../img/icons/cart-g.svg") 50% 50% no-repeat; */
  cursor: pointer;
  width: 44px;
  height: 44px;
  position: absolute;
  right: 10px;
  bottom: 10px;
}

.info__cart:hover, .info__cart:active {
  /* background: url("../img/icons/cart-v.svg") 50% 50% no-repeat !important; */
}

@media only screen and (max-width: 768px) {
  .info__cart {
    /* background: url("../img/icons/cart-g.svg") 50% 50% no-repeat; */
  }
}

@media only screen and (max-width: 414px) {
  .info__cart {
    right: 7px;
    bottom: 7px;
  }
}

.wrapper-inner {
  padding: 0;
}

.nav-index--click .nav-content-mainbar .mainbar__logo__logo {
  display: none;
}


</style>