<template>
<div class="idx__section bg--white">
  <div class="idxSection__title">好物櫥窗</div>
  <div class="idxSection__main">
    <div class="swiper-container swiper-container--product" data-swiper="product">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in productData">
          <div class="productBox">
            <!-- <a :href="item.checkUrl"> -->
            <a>
              <div class="productBox__image">
                <img :src="item.imgSrc" :alt="item.title">
              </div>
            </a>
            <div class="productBox__text">
              <div class="logo">
                <img src="https://storage.googleapis.com/rapaq-store/products/91010795-17120409293421661.jpg">
              </div>
              <div class="txt">
                <span class="txt__brand"> {{item.brand}} </span>
                <span class="txt__name">{{item.title}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="navigation">
        <div class="swiper-button-prev swiperBtn swiperBtn--prev" data-swiper-navigation="prev"></div>
        <div class="swiper-button-next swiperBtn swiperBtn--next" data-swiper-navigation="next"></div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  export default {


    props:{
      productData:{
        type:Array,
        default: function(){
          return []
        }
      }
    },
    methods:{
      initSwiper() {
        var $goodElement
        var productSwiper = new Swiper('[data-swiper="product"]', {
          loop: true,
          prevButton: '[data-swiper-navigation="prev"]',
          nextButton: '[data-swiper-navigation="next"]',
          slidesPerView: 'auto',
          centeredSlides: true,
          spaceBetween: 20,
          runCallbacksOnInit: true,
          autoplay: 3000,
          onInit: function(swiper) {
            var $goodContainer = $(swiper.slides),
              goodContainerW = $goodContainer.outerWidth();
            $goodElement = $goodContainer.find('.productBox__image').css({
              'height': (goodContainerW * 9) / 16
            })
            $goodContainer.each(function() {
              var imgHeight = $(this).find('.productBox__image').children('img').height();
              $(this).find('.productBox__image').children('img').css({
                'margin-top': -(imgHeight / 2)
              });
            });
          },
          onSlideChangeStart(swiper) {
            var $goodContainer = $(swiper.slides),
              goodContainerW = $goodContainer.outerWidth();
            $goodElement = $goodContainer.find('.productBox__image').css({
              'height': (goodContainerW * 9) / 16
            })
            $goodContainer.each(function() {
              var imgHeight = $(this).find('.productBox__image').children('img').height();
              $(this).find('.productBox__image').children('img').css({
                'margin-top': -(imgHeight / 2)
              });
            });
          },
          onBeforeResize: function(swiper) {
            var $goodContainer = $(swiper.slides),
              goodContainerW = $goodContainer.outerWidth();
            $goodElement = $goodContainer.find('.productBox__image').css({
              'height': (goodContainerW * 9) / 16
            })
            $goodContainer.each(function() {
              var imgHeight = $(this).find('.productBox__image').children('img').height();
              $(this).find('.productBox__image').children('img').css({
                'margin-top': -(imgHeight / 2)
              });
            });
          }

        });
      }
    }
  }
</script>

<style>
  
</style>
