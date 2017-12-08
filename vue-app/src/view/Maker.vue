<template>
    <div class="wrapper" @scroll="onScorll">
        <div class="mask"></div>
        <nav class="nav nav-index nav-index--click">
            <div class="nav-load">
            <div class="nav-content">
        <div class="nav-content-mainbar">
            <div class="mainbar__logo">
                <a href="/">
                    <div class="mainbar__logo__logo"></div>
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
        <div class="nav-content-toggle is--hide" style="display: none">
            <div class="toggle__search">
                <input placeholder="請輸入關鍵字" class="search__input" name="keyword" type="text">
                <form action="https://qmaker.rapaq.com/explore/search" method="POST" id="search_form_nav" enctype="multipart/form-data">
                <input name="nav_keyword" id="nav_keyword" type="hidden">
                <input name="_token" id="_token" value="NUuXZqtVlzBr2zQaQH7s3C14NMK4SiLgFKkMxp0F" type="hidden">
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
                    <a href="https://www.rapaq.com" style="color:#fff">
                    <div>RAPAQ</div>
                    <div class="webs__bg"></div>  
                    </a>
                </li>
                <li class="toggle-webs__4">
                    <div>
                        <a href="https://qshare.rapaq.com" style="color:#fff">
                        <span>設群</span>
                        <span>・</span>
                        <span>Q’Share</span>
                        </a>
                    </div>
                    <div class="webs__bg"></div> 
                </li>
                <li class="toggle-webs__2">
                    <div>
                        <a href="https://qgoods.rapaq.com" style="color:#fff">
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
                        <a href="http://point.rapaq.com" style="color:#fff">
                        <span>破點</span>
                        <span>・</span>
                        <span>Point</span>
                        </a>
                    </div>
                    <div class="webs__bg"></div> 
                </li>
            </ul>
        </div>
        <ul class="nav-content-mtoggle is--hide">
                <li><a href="https://qmaker.rapaq.com/login">登入</a></li>
                    </ul>
    </div>
            </div>
        </nav>
        <div class="wrapper-index">
            <header class="header">
                <div class="header-banner swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <img :src="banner01" alt="">
                            <div class="header-banner__text">
                                <div class="banner__title title-w">夢想合夥人，創意變生意</div>
                                <div class="banner__btn btn-project"><a href="https://qmaker.rapaq.com/member/factory_apply">成為夥伴</a></div>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <img :src="banner02" alt="">
                            <div class="header-banner__text">
                                <div class="banner__title title-w">發現好點子，集資好作品</div>
                                <div class="banner__btn btn-project"><a href="#" onclick="comingsoon();">計畫探索</a></div>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <img :src="banner03" alt="">
                            <div class="header-banner__text">
                                <div class="banner__title title-w">創意無限，創造驚艷</div>
                                <div class="banner__btn btn-project"><a href="#" onclick="comingsoon();">發起計畫</a></div>
                            </div>
                        </div>
                    </div>
                    <!-- Add Pagination -->
                    <div class="swiper-pagination"></div>
                </div>
            </header>
            <section class="project">
                <div class="project-wrap section-wrap">
                    <div class="project__title title-b">未來計畫</div>
                    <div class="project-list">
                        <ul class="swiper-wrapper ">
                            <li class="swiper-slide">
                                <div class="list__pic">
                                    <a href="https://qshare.rapaq.com/blog/show/96">
                                        <img src="https://qmaker.rapaq.com/img/article/article_01.png" alt="">
                                    </a>
                                </div>
                                <div class="list-include">
                                    <div class="list-top">
                                        <div class="list-top__title">
                                            <a href="https://qshare.rapaq.com/blog/show/96">{{resData.list_title0}}</a>
                                        </div>
                                    </div>
                                    <div class="list__intro">
                                        {{resData.list_intro0}}
                                    </div>
                                   
                                </div>
                            </li>
                            <li class="swiper-slide">
                                <div class="list__pic">
                                    <router-link :to="{name:'blog', params: { idx: 95 }}">
                                        <img src="https://qmaker.rapaq.com/img/article/article_02.png" alt="">
                                    </router-link>
                                </div>
                                <div class="list-include">
                                    <div class="list-top">
                                        <div class="list-top__title">
                                            <router-link :to="{name:'blog', params: { idx: 95 }}">{{resData.list_title1}}</router-link>
                                        </div>
                                    </div>
                                    <div class="list__intro">
                                        {{resData.list_intro1}}
                                    </div>
                                </div>
                            </li>
                            <li class="swiper-slide">
                                <div class="list__pic">
                                    <a href="https://qshare.rapaq.com/blog/show/97">
                                        <img src="https://qmaker.rapaq.com/img/article/article_03.png" alt="">
                                    </a>
                                </div>
                                <div class="list-include">
                                    <div class="list-top">
                                        <div class="list-top__title">
                                            <a href="https://qshare.rapaq.com/blog/show/97">{{resData.list_title2}}</a>
                                        </div>
                                    </div>
                                    <div class="list__intro">
                                        {{resData.list_intro2}}
                                    </div>
                                </div>
                            </li>                            
                            <li class="swiper-slide">
                                <div class="list__pic">
                                    <a href="https://qshare.rapaq.com/blog/show/94">
                                        <img src="https://qmaker.rapaq.com/img/article/article_04.png" alt="">
                                    </a>
                                </div>
                                <div class="list-include">
                                    <div class="list-top">
                                        <div class="list-top__title">
                                            <a href="https://qshare.rapaq.com/blog/show/94">{{resData.list_title3}}</a>
                                        </div>
                                    </div>
                                    <div class="list__intro">
                                        {{resData.list_intro3}}
                                    </div>
                                   
                                </div>
                            </li>
                        </ul>
                        <div class="swiper-button-next projectNext"></div>
                        <div class="swiper-button-prev projectPrev"></div>
                    </div>
                </div>
            </section>
            <section class="life">
                <div class="life-wrap section-wrap">
                    <div class="life__title title-b">智造生態圈</div>
                    <ul class="life-switch">
                       <li class="is--now">智造工廠</li> 
                    </ul>
                    <div class="life-routine">
                        <ul class="swiper-wrapper">
                                                        <li class="swiper-slide">
                                <div class="life-routine__pic">
                                    <a href="https://qmaker.rapaq.com/partner/show/1"> 
                                                                                <img src="https://qmaker.rapaq.com/img/banner@2x.png" alt="">
                                                                            </a>
                                </div>
                                <div class="life-routine-text">
                                    <div class="life-routine-text__title list__title">
                                        <a href="https://qmaker.rapaq.com/partner/show/1"> 
                                            {{resData.life_company0}}
                                        </a>
                                    </div>
                                    <div class="life-routine-text__intro">{{resData.life_company_intro0}}</div>
                                </div>
                            </li> 
                                                        <li class="swiper-slide">
                                <div class="life-routine__pic">
                                    <a href="https://qmaker.rapaq.com/partner/show/2"> 
                                                                                <img src="https://qmaker.rapaq.com/img/banner@2x.png" alt="">
                                                                            </a>
                                </div>
                                <div class="life-routine-text">
                                    <!--div class="list__like"></div-->
                                    <div class="life-routine-text__title list__title">
                                        <a href="https://qmaker.rapaq.com/partner/show/2"> 
                                            {{resData.life_company1}}
                                        </a>
                                    </div>
                                    <div class="life-routine-text__intro">{{resData.life_company_intro1}}</div>
                                </div>
                            </li> 
                                                        <li class="swiper-slide">
                                <div class="life-routine__pic">
                                    <a href="https://qmaker.rapaq.com/partner/show/3"> 
                                                                                <img src="https://qmaker.rapaq.com/img/factory/3.png" alt="">
                                                                            </a>
                                </div>
                                <div class="life-routine-text">
                                    <!--div class="list__like"></div-->
                                    <div class="life-routine-text__title list__title">
                                        <a href="https://qmaker.rapaq.com/partner/show/3"> 
                                            {{resData.life_company2}}
                                        </a>
                                    </div>
                                    <div class="life-routine-text__intro">{{resData.life_company_intro2}}</div>
                                </div>
                            </li> 
                                                        <li class="swiper-slide">
                                <div class="life-routine__pic">
                                    <a href="https://qmaker.rapaq.com/partner/show/4"> 
                                                                                <img src="https://qmaker.rapaq.com/img/factory/4.png" alt="">
                                                                            </a>
                                </div>
                                <div class="life-routine-text">
                                    <!--div class="list__like"></div-->
                                    <div class="life-routine-text__title list__title">
                                        <a href="https://qmaker.rapaq.com/partner/show/4"> 
                                            {{resData.life_company3}}
                                        </a>
                                    </div>
                                    <div class="life-routine-text__intro">{{resData.life_company_intro3}}</div>
                                </div>
                            </li> 
                                                        <li class="swiper-slide">
                                <div class="life-routine__pic">
                                    <a href="https://qmaker.rapaq.com/partner/show/5"> 
                                                                                <img src="https://qmaker.rapaq.com/img/factory/5.png" alt="">
                                                                            </a>
                                </div>
                                <div class="life-routine-text">
                                    <!--div class="list__like"></div-->
                                    <div class="life-routine-text__title list__title">
                                        <a href="https://qmaker.rapaq.com/partner/show/5"> 
                                             {{resData.life_company4}}
                                        </a>
                                    </div>
                                    <div class="life-routine-text__intro">{{resData.life_company_intro4}}</div>
                                </div>
                            </li> 
                                                        <li class="swiper-slide">
                                <div class="life-routine__pic">
                                    <a href="https://qmaker.rapaq.com/partner/show/6"> 
                                                                                <img src="https://qmaker.rapaq.com/img/factory/6.png" alt="">
                                                                            </a>
                                </div>
                                <div class="life-routine-text">
                                    <!--div class="list__like"></div-->
                                    <div class="life-routine-text__title list__title">
                                        <a href="https://qmaker.rapaq.com/partner/show/6"> 
                                            {{resData.life_company5}}
                                        </a>
                                    </div>
                                    <div class="life-routine-text__intro">{{resData.life_company_intro5}}</div>
                                </div>
                            </li> 
                                                        <li class="swiper-slide">
                                <div class="life-routine__pic">
                                    <a href="https://qmaker.rapaq.com/partner/show/7"> 
                                                                                <img src="https://qmaker.rapaq.com/img/factory/7.png" alt="">
                                                                            </a>
                                </div>
                                <div class="life-routine-text">
                                    <!--div class="list__like"></div-->
                                    <div class="life-routine-text__title list__title">
                                        <a href="https://qmaker.rapaq.com/partner/show/7"> 
                                              {{resData.life_company6}}
                                        </a>
                                    </div>
                                    <div class="life-routine-text__intro">{{resData.life_company_intro6}}</div>
                                </div>
                            </li> 
                                                        <li class="swiper-slide">
                                <div class="life-routine__pic">
                                    <a href="https://qmaker.rapaq.com/partner/show/8"> 
                                                                                <img src="https://qmaker.rapaq.com/img/factory/8.png" alt="">
                                                                            </a>
                                </div>
                                <div class="life-routine-text">
                                    <!--div class="list__like"></div-->
                                    <div class="life-routine-text__title list__title">
                                        <a href="https://qmaker.rapaq.com/partner/show/8"> 
                                             {{resData.life_company7}}
                                        </a>
                                    </div>
                                    <div class="life-routine-text__intro"> {{resData.life_company_intro7}}</div>
                                </div>
                            </li> 
                                                        <li class="swiper-slide">
                                <div class="life-routine__pic">
                                    <a href="https://qmaker.rapaq.com/partner/show/9"> 
                                                                                <img src="https://qmaker.rapaq.com/img/factory/9.png" alt="">
                                                                            </a>
                                </div>
                                <div class="life-routine-text">
                                    <!--div class="list__like"></div-->
                                    <div class="life-routine-text__title list__title">
                                        <a href="https://qmaker.rapaq.com/partner/show/9"> 
                                             {{resData.life_company8}}
                                        </a>
                                    </div>
                                    <div class="life-routine-text__intro"> {{resData.life_company_intro8}}</div>
                                </div>
                            </li> 
                                                        <li class="swiper-slide">
                                <div class="life-routine__pic">
                                    <a href="https://qmaker.rapaq.com/partner/show/10"> 
                                                                                <img src="https://qmaker.rapaq.com/img/factory/10.png" alt="">
                                                                            </a>
                                </div>
                                <div class="life-routine-text">
                                    <!--div class="list__like"></div-->
                                    <div class="life-routine-text__title list__title">
                                        <a href="https://qmaker.rapaq.com/partner/show/10"> 
                                             {{resData.life_company9}}
                                        </a>
                                    </div>
                                    <div class="life-routine-text__intro">{{resData.life_company_intro9}}</div>
                                </div>
                            </li> 
                                                        <li class="swiper-slide">
                                <div class="life-routine__pic">
                                    <a href="https://qmaker.rapaq.com/partner/show/11"> 
                                                                                <img src="https://qmaker.rapaq.com/img/factory/11.png" alt="">
                                                                            </a>
                                </div>
                                <div class="life-routine-text">
                                    <!--div class="list__like"></div-->
                                    <div class="life-routine-text__title list__title">
                                        <a href="https://qmaker.rapaq.com/partner/show/11"> 
                                            {{resData.life_company10}}
                                        </a>
                                    </div>
                                    <div class="life-routine-text__intro">{{resData.life_company_intro10}}</div>
                                </div>
                            </li> 
                                                        <li class="swiper-slide">
                                <div class="life-routine__pic">
                                    <a href="https://qmaker.rapaq.com/partner/show/12"> 
                                                                                <img src="https://qmaker.rapaq.com/img/factory/12.png" alt="">
                                                                            </a>
                                </div>
                                <div class="life-routine-text">
                                    <!--div class="list__like"></div-->
                                    <div class="life-routine-text__title list__title">
                                        <a href="https://qmaker.rapaq.com/partner/show/12"> 
                                            {{resData.life_company11}}
                                        </a>
                                    </div>
                                    <div class="life-routine-text__intro">{{resData.life_company_intro11}}</div>
                                </div>
                            </li> 
                                                        <li class="swiper-slide">
                                <div class="life-routine__pic">
                                    <a href="https://qmaker.rapaq.com/partner/show/13"> 
                                                                                <img src="https://qmaker.rapaq.com/img/factory/13.png" alt="">
                                                                            </a>
                                </div>
                                <div class="life-routine-text">
                                    <!--div class="list__like"></div-->
                                    <div class="life-routine-text__title list__title">
                                        <a href="https://qmaker.rapaq.com/partner/show/13"> 
                                             {{resData.life_company12}}
                                        </a>
                                    </div>
                                    <div class="life-routine-text__intro">{{resData.life_company_intro12}}</div>
                                </div>
                            </li> 
                                                        <li class="swiper-slide">
                                <div class="life-routine__pic">
                                    <a href="https://qmaker.rapaq.com/partner/show/14"> 
                                                                                <img src="https://qmaker.rapaq.com/img/factory/14.png" alt="">
                                                                            </a>
                                </div>
                                <div class="life-routine-text">
                                    <!--div class="list__like"></div-->
                                    <div class="life-routine-text__title list__title">
                                        <a href="https://qmaker.rapaq.com/partner/show/14"> 
                                              {{resData.life_company13}}
                                        </a>
                                    </div>
                                    <div class="life-routine-text__intro">{{resData.life_company_intro13}}</div>
                                </div>
                            </li> 
                                                     
                        </ul>
               
                    </div>
                                          
                </div>
            </section>
            <section class="dream">
                <div class="dream-wrap section-wrap">
                    <div class="dream__title title-w">
                        <span class="dreamword01">攜眾人之力</span>
                        <span class="dreamword02">將創意落實</span>
                    </div>
                    <div class="dream-btns">
                        <div class="dream-btns__explore" onclick="comingsoon();">
                            <a>計畫探索</a>
                        </div>
                        <div class="dream-btns__launch" onclick="comingsoon();">
                            <a>發起計畫</a>
                        </div>
                        <div class="dream-btns__partner">
                            <a href="https://qmaker.rapaq.com/member/factory_apply">成為夥伴</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        </div>
</template>
<script>
require("../../static/js/nav.js");
require("../../static/js/common.js");
require("../../static/js/maker/jquery.js");
require("../../static/js/maker/mousewheel.min.js");
require("../../static/js/maker/swiper.js");
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      curDom: {},
      banner01:
        (window.Global.isDev ? "static/" : "") + "img/maker/banner01.jpg",
      banner02:
        (window.Global.isDev ? "static/" : "") + "img/maker/banner02.jpg",
      banner03:
        (window.Global.isDev ? "static/" : "") + "img/maker/banner03.jpg",
      resData: {},
      didScroll: false
    };
  },
  methods: {
    alertDismissed() {},
    onScorll() {
      this.didScroll = true;
    },
    getWeb() {
      this.$store.dispatch("getMaker", {
        self: this,
        info: {},
        callback(self, res) {
          self.resData = res.body;
        }
      });
    },
    oninitJs() {
        var _self = this
      var swiper = new Swiper(".header .swiper-container", {
        pagination: ".swiper-pagination",
        paginationClickable: true,
        centeredSlides: true,
        loop: true,
        autoplay: 3000
      });

      //swiper-project
      var swiperCart = new Swiper(".project-list", {
        nextButton: ".projectNext",
        prevButton: ".projectPrev",
        slidesPerView: 2,
        spaceBetween: 20,
        breakpoints: {
          414: {
            slidesPerView: 1,
            spaceBetweenSlides: 0
          }
        }
      });
      var didScrollID = setTimer();
    var lastScrollTop = 0,
        delta = 120,
        Wheight = $(window).height();
        Wwidth = $(window).width();
    $(window).resize(function () {
        Wheight = $(window).height();
        Wwidth = $(window).width();
    });
      function setTimer() {
        i = setInterval(function() {
          if (_self.didScroll) {
            hasScrolled();
            _self.didScroll = false;
          }
        }, 500);
        return i;
      }
      //   $(window).scroll(function(event) {
      //     if (a == false && b == false) {
      //       didScroll = true;
      //     }
      //   });

      function hasScrolled() {
        clearInterval(didScrollID);
        var st = $('.wrapper').scrollTop();
        var $Tbottom = Wheight - 120;
        if (st > lastScrollTop && st > Wheight) {
          $(".nav")
            .removeClass("is-active")
            .addClass("is-hide");
          $(".nav-index").removeClass("nav-index--click");
        } else {
          if (st < Wheight) {
            $(".nav")
              .removeClass("is-hide")
              .addClass("is-active");
          }else if(st<$Tbottom){
            $(".nav")
              .removeClass("is-hide")
              .addClass("is-active");
            $(".nav-index").removeClass("nav-index--click");
          }
        }
        if (st < $(".nav-content").height()) {
          $(".nav-index").addClass("nav-index--click");
          $(".mainbar-aside-search input").removeClass("is--focus");
        } else {
          $(".nav-index").removeClass("nav-index--click");
        }

        lastScrollTop = st;
        didScrollID = setTimer();
      }
    }
  },
  created() {},
  mounted() {
      this.getWeb();
    this.oninitJs();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../../static/css/maker/base.css";
@import "../../static/css/maker/search.css";
@import "../../static/css/maker/swiper.css";
@import "../../static/css/maker/sweetalert2.css";
@import "../../static/css/maker/QMaker.css";
@import "../../static/css/maker/helper.css";
@import "../../static/css/maker/layout.css";
</style>
