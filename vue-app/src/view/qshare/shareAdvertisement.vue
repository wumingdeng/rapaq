<template>
  <div class="idx__section bg--gray">
    <div class="idx__wrap">
      <div class="idxSection">
        <div class="idxSection__main idxSection__main--action">
          <div class="idx__leaflet">
            <div class="leaflet leaflet--event">
              <div class="leaflet__content">
                <div class="swiper-container swiper-container--leaflet" data-swiper="leaflet">
                  <div class="swiper-wrapper">
                    <div v-for="(item,index) in AdvertisementData" class="swiper-slide">
                      <div class="name">{{item.title}}</div>
                      <a :href="item.href" class="image">
                          <img :src="item.imgSrc">
                      </a>
                    </div>
                  </div>
                  <div class="navigation">
                    <div class="swiper-button-prev swiperBtn swiperBtn--prev" data-swiper-navigation="prev"></div>
                    <div class="swiper-button-next swiperBtn swiperBtn--next" data-swiper-navigation="next"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="idxSection__action">
          <a href="mailto:com@rapaq.com" class="btn btn--idx btn--main btn--arrow">合作洽談</a>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    props:{
      AdvertisementData:{
        type:Array,
        default: function(){
          return []
        }
      }
    },
    methods:{
      initSwiper() {
        var productSwiper = new Swiper('[data-swiper="leaflet"]', {
          loop: true,
          prevButton: '[data-swiper-navigation="prev"]',
          nextButton: '[data-swiper-navigation="next"]',
          slidesPerView: 'auto',
          centeredSlides: true,
          autoplay: 3000
        });
      }
    }
  }
</script>