<template>
	<div class="idx__kv clearfix" id="mainpage_banner">
        <div class="swiper-container swiper-container-horizontal swiper-container-autoheight" data-swiper="KV">
          <div class="swiper-wrapper" style="height: 589px; transform: translate3d(-1125px, 0px, 0px); transition-duration: 0ms;">
            <!-- Slides element -->

            <div v-for="(item,index) in swiperData"
              class="swiper-slide" :data-swiper-slide-index="index" style="width: 375px;">
              <div class="idx__kv--image">
                <div class="square square--left">
                  <div class="square__content square__content--image">
                    <a :href="item.checkUrl">
                      <div class="image" data-id="imageContainer">
                        <img :src="item.imgSrc">
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div class="idx__kv--info">
                <div class="square square--right">
                  <div class="square__content  square__content--info">
                    <div class="info">
                      <div class="info__title">{{item.title}}</div>
                      <div class="info__author">
                        <a :href="item.authorHref">
                          <div class="pic"><img :src="item.authorHead"></div>
                          <div class="name">{{item.authorName}}</div>
                        </a>
                        <div class="date">{{item.date}}</div>
                        <div class="action">
                          <a :href="item.checkUrl" class="btn btn--idx btn--main btn--kv">查看作品</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="pagination clearfix">
            <div class="left">
              <div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets" data-swiper-pagination="kv">
              </div>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
  export default {
    data() {
      return {
      }
    },
    props:{
      swiperData:{
        type:Array,
        default: function(){
          return []
        }
      }
    },
    methods:{
      initSwiper() {
        console.log('init.....')
        var KVswiper = new Swiper('[data-swiper="KV"]', {
          loop: true,
          pagination: '[data-swiper-pagination="kv"]',
          // pagination: '.swiper-pagination',
          paginationClickable: true,
          autoHeight: true,
          autoplay: 3000
        });
      }
    },
    mounted() {
    }
  }
</script>

<style>
	
</style>