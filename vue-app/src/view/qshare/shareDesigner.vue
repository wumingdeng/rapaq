<template>
<div class="idx__section bg--gray">
  <div class="idx__wrap" id="mainpage_designer">
    <div class="idxSection">
      <div class="idxSection__title">本週設計師</div>
      <div class="idxSection__main idxSection__main--normal">
        <div class="idxList idxList--designer swiper-container--designer clearfix swiper-container-horizontal" data-swiper="designer">
          <div class="swiper-wrapper clearfix" style="transform: translate3d(-1185px, 0px, 0px); transition-duration: 0ms;">
            <div v-for="(item,index) in designerData" class="li swiper-slide" :data-swiper-slide-index="index" style="margin-right: 20px;">
              <div class="designerBox">
                <ul class="designerBox__pic  clearfix">
                  <li v-for="(pic,idx) in item.picArr">
                    <a :href="pic.href" :style="pic.style"></a>
                  </li>
                </ul>
                <div class="designerBox__info">
                  <a :href="item.authorHref" class="face">
                  <img :src="item.authorHead" alt="">
                  </a>
                  <div class="name">
                    <a :href="item.authorHref">
                      {{item.authorName}}
                    </a>
                  </div>
                  <div class="status">
                  </div>
                  <div class="action">
                    <button type="button" class="btn btn--idx btn--follow create_follow" :followed_userid="item.authorId"
                    style="background-color:#fff">追蹤</button>
                  </div>
                  <div class="follower"><span data-id="cnt">{{item.followCount}}</span> 人追蹤</div>
                </div>
              </div>
            </div>
            
          </div>
          <div class="pagination">
            <div class="swiper-pagination swiperPager--designer" data-swiper-pagination="designer"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

</template>

<script>
  export default {

    props:{
      designerData:{
        type:Array,
        default: function(){
          return []
        }
      }
    },
    methods:{
      initSwiper() {
        var designerSwiper = new Swiper('[data-swiper="designer"]', {
          loop: true,
          slideClass: 'li',
          pagination: '[data-swiper-pagination="designer"]',
          paginationClickable: true,
          slidesPerView: 'auto',
          centeredSlides: true,
          spaceBetween: 20,
          // autoplay: 3000
        });
      }
    },
    mounted() {
    }
  }

</script>
