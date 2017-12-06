<template>
<div class="wrapper">
  <div class="mask" style="display: none;"></div>
  <div class="shareMask" data-id="shareMask"></div>
  <div class="authorMask" data-id="authorMask"></div>
  <div class="wrapper-inner">
    <div itemscope="" itemtype="http://schema.org/WebSite" style="display: none">
      <meta itemprop="url" content="https://qshare.rapaq.com/index">
      <meta itemprop="name" content="RapaQ 設群－台灣領先設計資訊平台">
      <meta itemprop="description" content="RapaQ 設群 - Q'share 是一個提供設計師與創客分享作品與討論的空間，希望藉此成立設計培育基地，將 RapaQ 打造成設計 Wonderland。">
      <meta itemprop="url" content="https://lh3.googleusercontent.com/CZgfOlEhZSUysV-XP7udEczvYAoOIpG4s6RCvYx9qHhWWHNvwVPmBhFKrj8AHdniF3gKSjwZACbQUbOXb8UOgsyaiA">
    </div>
    <ul itemscope="" itemtype="http://www.schema.org/SiteNavigationElement" style="display: none">
      <li itemprop="name"><a itemprop="url" href="https://qshare.rapaq.com/works/index">作品</a></li>
      <li itemprop="name"><a itemprop="url" href="https://qshare.rapaq.com/blog/index">文章</a></li>
      <li itemprop="name"><a itemprop="url" href="https://qshare.rapaq.com/event/index">活動</a></li>
    </ul>

    <shareNav></shareNav>

    <div class="idx">
      <!-- KV start -->
      <shareSwiper></shareSwiper>
      <!-- KV end -->
      <!-- blog start -->
			<shareBlog></shareBlog>
      <!-- blog end -->
      <!-- activity start -->
			<shareActivity></shareActivity>
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
	export default {
	  data () {
			return {
				loading: false,
				html: '',
				url: "https://qgoods.rapaq.com"
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
	  },
		methods: {
			getWeb() {
				this.$store.dispatch("getShare", {
					self: this,
					info:{},
					callback(self,res) {
						self.html = res.body
							var img = document.getElementsByTagName("img")
							console.log(img.length)
						self.$nextTick(function () {
							var img = document.getElementsByTagName("img")

							console.log(img[0].src)
						})
						// img[0].src = "../assets/qmaker-graphic.svg"
					}
				})
			},
			onLoad() {
				console.log('onload')
			}
		},
		mounted() {


		}
	}
</script>

<style>
	
</style>