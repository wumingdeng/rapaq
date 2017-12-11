<template>
<div class="wrapper">
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
			<shareWork :workData="webData.workData"></shareWork>
      <!-- works end -->

      <!-- designer start -->
      <shareDesigner :designerData="webData.designerData" ref="shareDesigner"></shareDesigner>
      <!-- designer end -->

      <!-- product start -->
			<shareProduct :productData="webData.productData" ref="shareProduct"></shareProduct>
      <!-- product end -->

      <!-- advertisement start -->
			<shareAdvertisement :AdvertisementData="webData.AdvertisementData" ref="shareAdvertisement"></shareAdvertisement>
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

	import sf from '../../../static/js/share/common.js'
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
								var shareDesigner = self.$refs['shareDesigner']
								shareDesigner.initSwiper();					
								var shareProduct = self.$refs['shareProduct']
								shareProduct.initSwiper();				
								var shareAdvertisement = self.$refs['shareAdvertisement']
								shareAdvertisement.initSwiper();							
							})
						// img[0].src = "../assets/qmaker-graphic.svg"
					}
				})
			},
			onLoad() {
				console.log('onload')
			}
		},
		created() {
			console.log('hehe?')
			sf.init()
		},
		mounted() {
			console.log('mounted...')
			this.getWeb()
		},
		beforeDestroy() {
			sf.distroy()
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