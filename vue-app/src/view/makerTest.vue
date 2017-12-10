<template>
    <div class="wrapper">
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
                        <ul class="swiper-wrapper">
                            <li class="swiper-slide" v-for="(item,index) in resData.blog">
                                <div class="list__pic">
                                    <a :href="'https://qshare.rapaq.com/blog/show/'+item.index">
                                        <img :src="'https://localhost:3000/'+item.img" alt="">
                                    </a>
                                </div>
                                <div class="list-include">
                                    <div class="list-top">
                                        <div class="list-top__title">
                                            <a :href="'https://qshare.rapaq.com/blog/show/'+item.index">{{item.title}}</a>
                                        </div>
                                    </div>
                                    <div class="list__intro">
                                        {{item.intro}}
                                    </div>
                                   
                                </div>
                            </li>
                            <!--
                            <li class="swiper-slide">
                                <div class="list__pic">
                                    <router-link :to="{name:'blog', params: { id: 95 }}">
                                        <img src="https://qmaker.rapaq.com/img/article/article_02.png" alt="">
                                    </router-link>
                                </div>
                                <div class="list-include">
                                    <div class="list-top">
                                        <div class="list-top__title">
                                            <router-link :to="{name:'blog', params: { id: 95 }}">{{resData.list_title1}}</router-link>
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
                            -->
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
      resData: {
        blog:
        [ { title: '你的第一件，享受聽覺的休閒服',
            index: '96',
            img: 'public/img/qmark/article_01.png',
            intro: '\n                                        為休閒服飾注入新的靈魂，將揚聲器相關零組件完美融合在服飾中，透過穿著一件衣服，可以同時享受時尚品味與聽覺盛宴，舒適、設計與科技的完美結合。\n                                    ' },
            { title: 'Sansui - 山水盒，打造個人桌面景致',
            index: '95',
            img: 'public/img/qmark/article_02.png',
            intro: '\n                                        在日本傳統庭院中，找到一個寧靜的下午。這是一款以日本枯山水為概念發想的小物收納盒，模仿水流紋路圍起置物的小空間，讓你的文具悠遊其中，打造個人桌面的悠然景致。\n                                    ' },
            { title: '索驥 - 智能音箱',
            index: '97',
            img: 'public/img/qmark/article_03.png',
            intro: '\n                                        擅長軟體開發、雲端服務及軟硬整合的「索驥創意」，把腦筋動到音樂領域，會擦出什麼樣的火花呢？RapaQ為「索驥創意」找到台灣聲學領域專家「hoomia好米亞」，共創『索驥智能音箱』。想要什麼音樂想要怎麼聽只要對她動口，隨著你的使用變得越來越懂你\n                                    ' },
            { title: '用太陽充電，用背包補水－至誼享樂不斷電背包',
            index: '94',
            img: 'public/img/qmark/article_04.png',
            intro: '\n                                        隨著行動裝置普及，電力消耗變成外出時最大的挑戰，現在台灣擁有40年製造背包經驗的至誼實業結合太陽能供電面板，並採用吸震式減壓背帶與可調整肩背帶，內置貼心水壺與飲水管設計，打造功能最齊全、電力隨身走、享樂不斷電的8L大容量背包。\n                                    ' }
        ]
    };
  },
  methods: {
    alertDismissed() {},
    getWeb() {
      this.$store.dispatch("getMaker", {
        self: this,
        info: {},
        callback(self, res) {
          self.resData = res.body;
        }
      });
    },
    onHeadScroll() {
        var _self = this
        var didScrollID = setTimer();
        var lastScrollTop = 0,
            didScroll = false,
            a = false,
            b = false,
            delta = 120,
            Wheight = $(window).height(),
            Wwidth = $(window).width();
        $(window).resize(function() {
            Wheight = $(window).height();
            Wwidth = $(window).width();
        });
        function setTimer() {
            var i = setInterval(function() {
            if (didScroll) {
                hasScrolled();
                didScroll = false;
            }
            }, 500);
            return i;
        }
         $(window).scroll(function(event) {
             if(!a && !b){
                 didScroll = true
             }
        });
        function hasScrolled() {
            var a = false
            var b = false
            clearInterval(didScrollID);
            var st = $(window).scrollTop();
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
            } else if (st < $Tbottom) {
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
    var $menuClick = $('.mainbar-aside__click'),
        $memberClick = $('.mainbar-aside-member'),
        $loginClick = $('.mainbar-aside-login'),
        $menuContent =  $('.nav-content-toggle'),
        $memberContent =  $('.nav-content-mtoggle'),
        $msg = $('.member__msg'),
        $mask = $('.mask');
    function show_search(){
        $mask.show();
        $mask.toggleClass("is--show");
        didScroll = false;
        clearInterval(didScrollID);
        $('.nav-index').removeClass("nav-index--click");
        $('.mainbar-aside-search input').addClass('is--focus');
    }
    function hide_search(){
        $mask.hide();
        $mask.removeClass("is--show"); 
        didScroll = true;
        didScrollID = setTimer();
        $('.mainbar-aside-search input').removeClass('is--focus');
        
    }

    function show_member(){
        $memberContent.stop(true, false).slideDown(200);
        $memberClick.toggleClass('is--mclick');
        $loginClick.toggleClass('is--mclick');
        $msg.addClass("is--hide");
        $mask.show();
        $mask.toggleClass("is--show");
        didScroll = false;
        clearInterval(didScrollID);
        $('.nav-index').removeClass("nav-index--click");
    }
    function hide_member(){
        $memberContent.stop(true, false).slideUp(200);
        $memberClick.removeClass('is--mclick');
        $loginClick.toggleClass('is--mclick');
        $msg.removeClass("is--hide");
        $mask.hide();
        $mask.removeClass("is--show"); 
        didScroll = true;
        didScrollID = setTimer();
    }
    
    function show_menu(){
        if (Wwidth <= 768) {
            $('.nav').toggleClass('is--absolute');
            $('.nav-content-mainbar').toggleClass('is--fixed add--z-index100');
            $('.mainbar__logo').toggleClass('is--fixed add--z-index100 add--background-color-fff');
            $('.mainbar-aside').toggleClass('is--fixed add--z-index100');
            $menuContent.toggleClass('add--z-index50');
            $('.wrapper-index, .wrapper-inner').toggleClass('is--zeroheight');
        }
        $menuContent.stop(true, false).slideDown(200);
        $menuClick.toggleClass("is--click");
        $mask.show();
        $mask.toggleClass("is--show");
        didScroll = false;
        clearInterval(didScrollID);
        $('.nav-index').removeClass("nav-index--click");
    }
    function hide_menu(){
        if (Wwidth <= 768) {
            $('.nav').removeClass('is--absolute');
            $('.nav-content-mainbar').removeClass('is--fixed add--z-index100');
            $('.mainbar__logo').removeClass('is--fixed add--z-index100 add--background-color-fff');
            $('.mainbar-aside').removeClass('is--fixed add--z-index100');
            $menuContent.removeClass('add--z-index50');
            $('.wrapper-index, .wrapper-inner').removeClass('is--zeroheight');
        }
        $menuContent.stop(true, false).slideUp(200);
        $menuClick.removeClass("is--click");
        $mask.hide();
        $mask.removeClass("is--show"); 
        didScroll = true;
        didScrollID = setTimer();
    }
    $menuClick.bind('click',function(e){
        hide_member();
        b = false;
        if(!a){
            show_menu();
            a = true;
        }else{
            hide_menu();
            a = false;
        }
        
    });
    $memberClick.bind('click',function(e){
        hide_menu();
        a = false;
        if(!b){
            show_member();
            b = true;
        }else{
            hide_member();
            b = false;
        }
    });
    $loginClick.bind('click',function(e){
        console.log(1);
        console.log(b);
        hide_menu();
        a = false;
        if(!b){
            console.log(2);
            show_member();
            b = true;
        }else{
            console.log(3);
            hide_member();
            b = false;
        }
    });    
    $mask.click(function(){
        hide_member();
        b = false;
        hide_menu();
        a = false;
    });
    $(".mainbar-aside-search input").focus(function(){
        hide_member();
        b = false;
        hide_menu();
        a = false;
        show_search();
    });
    $(".mainbar-aside-search input").blur(function(){
        hide_member();
        b = false;
        hide_menu();
        a = false;
        hide_search();
    });
    $('.mainbar-aside-search .search__icon').on('click', function(){
        $mask.show();
        if($('.mainbar-aside-search input').hasClass('is--focus')){
            console.log('clicked');
        }else{
            $('.nav-index').removeClass("nav-index--click");
            $('.mainbar-aside-search input').addClass('is--focus');
        }
        
    });
    $(window).resize(function () {
        hide_member();
        b = false;
        hide_menu();
        a = false;
        hide_search();
        $menuContent.removeAttr( "style" );
        $memberContent.removeAttr( "style" );
        $('.nav, .nav-index, .nav-content-mainbar, .mainbar__logo, .mainbar-aside, .wrapper-index, .wrapper-inner').removeAttr( "style" );
        $menuContent.removeClass('add--z-index50');
    });

    $('.search__input').keypress(function (e) {
        var keyword = $('.search__input').val();
        var code = (e.keyCode ? e.keyCode : e.which);
        if (code == 13) {
            $("#nav_keyword").val(keyword);
            $("#search_form_nav").submit();
            return false;
        }
    });
    },
    oninitJs() {
      var _self = this;
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
    }
  },
  created() {},
  mounted() {
    var self = this;
   
    this.getWeb();
    this.oninitJs();
    this.onHeadScroll();
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
