<template>
<div class="wrapper" @scroll.native="onScroll">
  <div class="mask" style="display: none;"></div>
  <div class="shareMask" data-id="shareMask"></div>
  <div class="authorMask" data-id="authorMask"></div>

  <shareNav></shareNav>
  <div class="wrapper-inner">
    <ul itemscope="" itemtype="http://www.schema.org/SiteNavigationElement" style="display: none">
      <li itemprop="name"><a itemprop="url" href="https://qshare.rapaq.com/works/index">作品</a></li>
      <li itemprop="name"><a itemprop="url" href="https://qshare.rapaq.com/blog/index">文章</a></li>
      <li itemprop="name"><a itemprop="url" href="https://qshare.rapaq.com/event/index">活動</a></li>
    </ul>

    <div class="idx">
      <!-- KV start -->
      <shareSwiper :swiperData="webData.swiperData" ref="topSwiper"></shareSwiper>
      <!-- KV end -->
      <!-- blog start -->
			<shareBlog :blogData="webData.blogData"></shareBlog>
      <!-- blog end -->
      <!-- activity start -->
			<shareActivity :activityData="webData.activityData"></shareActivity>
      <!-- activity end -->
			
      <!-- works start -->
			<shareWork></shareWork>
      <!-- works end -->

      <!-- designer start -->
      <shareDesigner></shareDesigner>
      <!-- designer end -->

      <!-- product start -->
			<shareProduct></shareProduct>
      <!-- product end -->

      <!-- advertisement start -->
			<shareAdvertisement></shareAdvertisement>
      <!-- advertisement end -->
    </div>
    
		<cusfooter></cusfooter>
  </div>
</div>

</template>

<script>
	import shareNav from './shareNav'
	import shareSwiper from './shareSwiper'
	import shareBlog from './shareBlog'
	import shareActivity from './shareActivity'
	import shareWork from './shareWork'
	import shareDesigner from './shareDesigner'
	import shareProduct from './shareProduct'
	import shareAdvertisement from './shareAdvertisement'
	import cusfooter from '../../components/footer'
	export default {
	  data () {
			return {
				loading: false,
				lastScrollTop:0,
				webData: {}
			}
	  },
	  components:{
	  	"shareNav":shareNav,
	  	"shareSwiper":shareSwiper,
	  	"shareBlog":shareBlog,
	  	"shareActivity":shareActivity,
	  	"shareWork":shareWork,
	  	"shareDesigner":shareDesigner,
	  	"shareProduct":shareProduct,
	  	"shareAdvertisement":shareAdvertisement,
	  	"cusfooter":cusfooter,
	  },
		methods: {
			getWeb() {
				this.$store.dispatch("getShare", {
					self: this,
					info:{},
					callback(self,res) {
						if (res.body)
							self.webData = res.body
							self.$nextTick(function() {
								var topSwiper = self.$refs['topSwiper']
								topSwiper.initSwiper();
								console.log(topSwiper)
							})
						// img[0].src = "../assets/qmaker-graphic.svg"
					}
				})
			},
			onLoad() {
				console.log('onload')
			},
			onScroll() {
        didScroll = true;
	    	// console.log('scroll..')
	    	var worksOffsetTop = $('[data-id="idx_works"]').offset().top;
	      var worksHeight = $('[data-id="idx_works"]').outerHeight(true);
	      var worksOffsetBottom = worksOffsetTop + worksHeight;
	      var winTop = $(window).scrollTop();
	      var navH = $('nav').outerHeight(true);
	      if (winTop >= worksOffsetTop && winTop <= worksOffsetBottom) {
	        $('[data-id="idx_works"]').addClass('docking');
	        if ($('nav').hasClass('is-hide')) {
	          $('[data-id="idx_works"]').find('.idxSection__title').css({ 'top': 0 });
	        } else {
	          $('[data-id="idx_works"]').find('.idxSection__title').css({ 'top': navH });
	        }
	      } else if (winTop > worksOffsetBottom || winTop < worksOffsetTop) {
	        $('[data-id="idx_works"]').removeClass('docking');
	      }

			},
			hasScrolled() {
	      var delta = 120,
	      Wheight = $(window).height();
	      Wwidth = $(window).width();
		    $(window).resize(function () {
		        Wheight = $(window).height();
		        Wwidth = $(window).width();
		    });
        clearInterval(didScrollID);
        var st = $(document).scrollTop();
        var $Tbottom = $('.wrapper-inner').height() - Wheight - 120;
        if (st > this.lastScrollTop && st > Wheight){
            $('.nav').removeClass('is-active').addClass('is-hide');
            $('.nav-index').removeClass('nav-index--click');
            
            if ( st > $Tbottom ) {
                $('.nav').removeClass('is-hide').addClass('is-active');
                $('.nav-index').removeClass('nav-index--click');
                
            }
        } else {
            if(st + Wheight < $('.wrapper-inner').height()) {
                $('.nav').removeClass('is-hide').addClass('is-active');
                
            }
        }
        if (st < $(".nav-content").height()) {
            $('.nav-index').addClass('nav-index--click');
            $('.mainbar-aside-search input').removeClass('is--focus');
        } else {
            $('.nav-index').removeClass('nav-index--click');
        }
        
        this.lastScrollTop = st;
        didScrollID = this.setTimer();
	    },
	    setTimer(){
	    	var self = this
        var i = setInterval(function(){
          if (didScroll) {
        		console.log('do scro')
            self.hasScrolled();
            didScroll = false;
          }
        }, 500);
        return i;
	    }
		},
		created() {
			console.log('create...')
			//nav
			$('.nav-load').load('/nav');
	    didScrollID = this.setTimer();
	    didScroll = false
	    // $(document).scroll(function (event) {
	    //     if( a == false && b == false){
	    //         didScroll = true;
	    //     }
	    // });
		},
		mounted() {
			console.log('mounted...')
			this.getWeb()
			$(window).scroll(this.onScroll);
		}
	}
</script>

<style>
	@import url('../../../static/css/share/swiper.css');
	@import url('../../../static/css/share/slick.css');
	@import url('../../../static/css/share/base.css');
	@import url('../../../static/css/share/layout.css');
	@import url('../../../static/css/share/sweetalert2.css');
	@import url('../../../static/css/share/step.css');
	@import url('../../../static/css/share/create.css');
	@import url('../../../static/css/share/loading.css');
	@import url('../../../static/css/share/helper.css');
	@import url('../../../static/css/share/works.css');
	@import url('../../../static/css/share/index.css');
</style>