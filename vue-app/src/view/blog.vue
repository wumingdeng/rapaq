<template>
<div class="wrapper">
        <div class="mask" style="display: none;"></div>
        <div class="shareMask" data-id="shareMask"></div>
        <div class="mask-z" style="display: none;"></div>
        <nav class="nav is-active">
            <div class="nav-load">
            <div class="nav-content">
    <div class="nav-content-mainbar">
        <div class="mainbar__logo">
            <router-link :to="{name:'share'}">
                <div class="mainbar__logo__logo"></div>
            </router-link>
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
                <div class=""><a href="https://qshare.rapaq.com/works/index">作品</a></div>
                <div class=""><a href="https://qshare.rapaq.com/blog/index">文章</a></div>
                <div class=""><a href="https://qshare.rapaq.com/event/index">活動</a></div>
            </div>
            <div class="mainbar-aside-creat creat-click" style="line-height:59px">
                <div class="creat-icon">
                    <img src="https://qshare.rapaq.com/img/icons/nav-creat-icon.svg" alt="">
                </div>創建
            </div>
            <div class="mainbar-aside-search">
                <form method="GET" action="https://qshare.rapaq.com/search/index?search_type=1" accept-charset="UTF-8">
                    <input class="search__input" placeholder="請輸入關鍵字" name="search" type="text">
                    <button class="search__icon"></button>
                </form>
            </div>
            <div class="mainbar-aside-notify">
                 <div class="member__msg  msg-alert" style="display: none;"></div>
            </div>
                            <div class="mainbar-aside-login member-btn"></div>
                    </div>
    </div>
    <div class="nav-content-toggle is--hide">
        <div class="toggle-member">
            <div class="toggle-member__pic">
                                    <img src="https://qshare.rapaq.com/img/icons/default.png" alt="">
                            </div>
            <ul class="toggle-member-link">
                            <li class="not-login"><a href="https://qshare.rapaq.com/login">登入 / 註冊</a></li>
                        </ul>
        </div>
        <div class="toggle-menu">
            <div class=""><a href="https://qshare.rapaq.com/works/index">作品</a></div>
            <div class=""><a href="https://qshare.rapaq.com/blog/index">文章</a></div>
            <div class=""><a href="https://qshare.rapaq.com/event/index">活動</a></div>
            <div class="mc creat-click">
                <div class="creat-icon">
                    <img src="https://qshare.rapaq.com/img/icons/nav-creat-icon.svg" alt="">
                </div>創建
            </div>
        </div>
        <div class="toggle__search">
            <form method="GET" action="https://qshare.rapaq.com/search/index?search_type=1" accept-charset="UTF-8">
                <input class="search__input" placeholder="請輸入關鍵字" name="search" type="text">
                <button class="search__icon"></button>
            </form>
        </div>
        <ul class="toggle-webs">
            <li class="toggle-webs__1">
                <a href="http://rapaq.com/" target="_blank">
                    <div>RAPAQ</div>
                    <div class="webs__bg"></div>
                </a>
            </li>
            <li class="toggle-webs__4">
                <a href="https://qshare.rapaq.com/index">
                    <div>
                        <span>設群</span>
                        <span>・</span>
                        <span>Q’Share</span>
                    </div>
                </a>
                <div class="webs__bg"></div>
            </li>
            <li class="toggle-webs__2">
                <a href="https://qgoods.rapaq.com/" target="_blank">
                    <div>
                        <span>好物</span>
                        <span>・</span>
                        <span>Q’Goods</span>
                    </div>
                    <div class="webs__bg"></div>
                </a>
            </li>
            <li class="toggle-webs__5">
                <a href="http://qmaker.rapaq.com/" target="_blank">
                    <div>
                        <span>創創</span>
                        <span>・</span>
                        <span>Q’Maker</span>
                    </div>
                </a>
                <div class="webs__bg"></div>
            </li>
            <li class="toggle-webs__3">
                <a href="http://point.rapaq.com/" target="_blank">
                    <div>
                        <span>破點</span>
                        <span>・</span>
                        <span>Point</span>
                    </div>
                </a>
                <div class="webs__bg"></div>
            </li>
        </ul>
    </div>
    <ul class="nav-content-mtoggle is--hide"><!-- click member btn would be show it -->
                    <li class="not-login"><a href="https://qshare.rapaq.com/login">登入 / 註冊</a></li>
            </ul>
    <div class="nav-content-ntoggle  is--hide"><!-- click notify btn would be show it -->
    </div>
    <ul class="nav-content-ctoggle is--hide"><!-- click creat btn would be show it -->
                    <div class="ctoggle-login">
                <h3>創建</h3>
                <p>你必須註冊或登入才能發佈</p>
                <div class="ctoggle-login__btn btn-cancel">取消</div>
                <a href="https://qshare.rapaq.com/login"><div class="ctoggle-login__btn btn-login">註冊/登入</div></a>
            </div>
            </ul>
</div>            </div>
        </nav>
            <div class="whitebg" style="height: 126px; display: none; opacity: 1;"></div>
        <div class="wrapper-inner">
                        <section class="b-contents pb0" itemscope="" itemtype="http://schema.org/Article">
    <meta itemprop="url mainEntityOfPage" content="http://qshare.rapaq.com/blog/show/95">
    <div class="b-contents-wrap">
        <div class="b-contents-page">
            <div class="page-bcover">
                <img itemprop="image" :src="html['page-bcover']" alt="[創創集資] Sansui -&nbsp;山水盒，打造個人桌面景致">
            </div>
            <div class="page-inner pb0">
                <div class="page-header page-header--blog" data-id="js-pageHeader">
                                        <div class="page-header__info page-header__info--public" style="">
                                            <div class="page-header__title" itemprop="name headline">{{html['page-header_title']}}</div>
                        <div class="page-header__category">
                            <span><a href="https://qshare.rapaq.com/blog/index?blog_type=2">{{html['page-header__category']}}</a></span>
                        </div>
                        <div class="page-header__date">{{html['page-header__date']}}</div>
                        <meta itemprop="datePublished dateModified" content="2017-11-02">
                        <div class="page-header__freq frequency">
                            {{html['page-header__freq']}}                                                                             </div>
                    </div>
                </div>
            </div>
            <div id="page-inner" class="page-inner" itemprop="articleBody description">
            </div>
            <div class="page-inner">
                <ul class="page-inner-label">
                                    <li>RapaQ創創</li>
                                    <li>山水盒</li>
                                </ul>
                <div class="page-inner-author">
                    <div class="page-inner-author__pic"><img src="/static/img/headpic_100000233.jpg" alt=""></div>
                    <span itemprop="author" itemscope="" itemtype="http://schema.org/Person">
                        <div class="page-inner-author__name" itemprop="name">RapaQ 創創</div>
                    </span>  
                    <div class="page-inner-author__status">創設計・找合夥</div>
                    <div itemprop="publisher" itemscope="" itemtype="http://schema.org/Organization">
                        <meta itemprop="name" content="Rapaq 社群">
                        <div itemprop="logo" itemscope="" itemtype="http://schema.org/ImageObject">
                            <meta itemprop="url" content="https://storage.googleapis.com/rapaq_public/browser_icon/qshare.ico">
                        </div>
                    </div>
                </div>
                <div class="page-inner-btns">
                                                            <div class="page-inner-btns__btn btn-follow btn-style-small create_follow" followed_userid="100000233">追蹤</div>
                                                        <a href="https://qshare.rapaq.com/member/index/100000233">
                        <div class="page-inner-btns__btn btn-personal btn-style-small">個人頁</div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>
<section class="b-other" style="padding-top:20px">
    <div class="b-other-wrap">
        <h3>發掘其他文章</h3>
        <div id="scrolling-other">
            <div class="idxSection__main idxSection__main--action">
        <div class="idxList idxList--blog clearfix" style="min-width: 1080px;">
                <li class="b-other-all-box" v-for="(item,index) in html['b-other']" :key="index">
                    <div class="box__pic">
                        <router-link :to="{name:'blog', params: { id: item.blogId }}">
                            <img :src="item['img']" :alt="item.title">
                        </router-link>
                    </div>
                    <div class="box-author">
                        <a href="https://qshare.rapaq.com/member/index/100000047">
                            <div class="box-author__pic">
                                <img :src="item['img-author']">
                            </div>
                            <div class="box-author__name">
                                {{item['name-author']}}
                            </div>
                        </a>
                        <div class="box-author__date">
                             {{item.data}}
                        </div>
                    </div>
                    <div class="box__title">
                        <router-link :to="{name:'blog', params: { id: item.blogId }}">
                        {{item.title}}
                        </router-link>
                    </div>
                </li>
        </div></div>
        </div>
    </div>
</section>

                   <cusfooter></cusfooter>
                    </div>
     
</div>
</template>

<script>
import cusfooter from '../components/footer'
import sf from "../../static/js/blog/custom.js";
export default {
  data() {
    return {
      loading: false,
      html: {},
      blogId: 0,
      resData: {}
    };
  },
   components:{
	  	"cusfooter":cusfooter
	  },
  methods: {
    getWeb(fb) {
      this.$store.dispatch("getBlogById", {
        self: this,
        info: { id: this.blogId },
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
    console.log("hehe?");
    sf();
  },
  mounted() {
    this.blogId = this.$route.params.id || 1;
    this.getWeb(() => {
      document.getElementById("page-inner").innerHTML = this.html["page-inner"];
    });
  }
};
</script>

<style>
@import url("../../static/css/share/swiper.css");
@import url("../../static/css/share/slick.css");
@import url("../../static/css/share/base.css");
@import url("../../static/css/share/layout.css");
@import url("../../static/css/share/sweetalert2.css");
@import url("../../static/css/share/step.css");
@import url("../../static/css/share/create.css");
@import url("../../static/css/share/loading.css");
@import url("../../static/css/share/helper.css");
@import url("../../static/css/share/works.css");
@import url("../../static/css/share/index.css");
@import "../../static/css/share/page.css";
@import url("../../static/css/share/classify.css");
</style>