<template>
    <div class="wrapper">
                  <div class="mask"></div>
        <div class="mask-z" style="display: none;"></div>
        <nav class="nav nav-index is-active nav-index--click">
            <div class="nav-load"><div class="nav-content">
        <div class="nav-content-mainbar">
            <div class="mainbar__logo">
                <a href="https://qmaker.rapaq.com">
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
                                        <div class="f-header__bgimg" style="background-image:url('https://qmaker.rapaq.com/img/factory/4.png')">
                                       
                    </div>
                    <div class="f-header-focus">
                        <div class="f-header-focus__pic">
                                                        <img src="https://qmaker.rapaq.com/img/logo/4.png" alt="">
                                                    </div>
                        <div class="f-header-focus__name">
                            力志國際光電股份有限公司
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
                        是OLED照明產業的先驅，創業以來在堅持創新的原則下，已累積數十間發明專利及豐厚的研發成果，結合台灣優秀生產廠商創立生產台灣第一的OLED照明品牌。OLED照明具有輕、薄、色彩豐富、光線柔和同時沒有強度藍光傷害眼睛的缺點，被認為是下一世代最好的室內照明光源，非常適合商業與家庭室內照明使用。
                    </div>
                </div>
            </section>
                        <section class="f-goods">
                <div class="f-goods-wrap section-wrap">
                    <div class="f-goods__title f-title">好物推薦</div>
                    <div class="f-goods-recommend">
                        <ul class="f-goods-recommend-list">
                                                        <li>
                                <div class="info-pic">
                                   <a href="https://qgoods.rapaq.com/products/1443">
                                        <div class="info-pic__pic" style="background-image: url('https://storage.googleapis.com/rapaq-store/products/91010777-17103006124690860.png')">
                                        </div>
                                    </a>
                               </div>
                               <div class="info-all">
                                    <div class="info-text">
                                        <div class="info__brand"><a href="https://qgoods.rapaq.com/brand/"></a></div>
                                        <div class="info__name"><a href="https://qgoods.rapaq.com/products/1443">GNH E3 時尚白 OLED 檯燈</a></div>
                                        <div class="info__store"><a href="https://qgoods.rapaq.com/store/91010777">力志光電</a></div>
                                    </div>
                                    <div class="info__price">
                                                                                <span class="price-sale">
                                            NT$2490
                                        </span>
                                                                            </div> 
                                    <div class="info__cart"></div>
                               </div>
                            </li>
                                                        <li>
                                <div class="info-pic">
                                   <a href="https://qgoods.rapaq.com/products/1444">
                                        <div class="info-pic__pic" style="background-image: url('https://storage.googleapis.com/rapaq-store/products/91010777-17103006214159604.png')">
                                        </div>
                                    </a>
                               </div>
                               <div class="info-all">
                                    <div class="info-text">
                                        <div class="info__brand"><a href="https://qgoods.rapaq.com/brand/"></a></div>
                                        <div class="info__name"><a href="https://qgoods.rapaq.com/products/1444">GNH E3t OLED 手工製原木OLED桌燈/床頭燈</a></div>
                                        <div class="info__store"><a href="https://qgoods.rapaq.com/store/91010777">力志光電</a></div>
                                    </div>
                                    <div class="info__price">
                                                                                <span class="price-sale">
                                            NT$1690
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
import cusfooter from '../components/footer'
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
  components:{
	  	"cusfooter":cusfooter
	  },
  methods: {
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
      document.getElementById("page-inner").innerHTML = this.html["page-inner"];
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

<style scoped>

</style>