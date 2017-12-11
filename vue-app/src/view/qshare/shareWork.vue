<template>
<div class="idx__section bg--white" data-id="idx_works">
  <div class="idx__wrap" id="mainpage_works">
    <div class="idxSection">
      <div class="idxSection__title">
        <ul class="idx__tab clearfix" data-js-tabs="true">
          <li data-id="js-tab"><span data-tab-href="01">設群推薦</span></li>
          <li data-id="js-tab"><span data-tab-href="02">最新作品</span></li>
          <li data-id="js-tab"><span data-tab-href="03">熱門作品</span></li>
        </ul>
      </div>
      <div class="idxSection__main idxSection__main--tab">
        <div class="tab_panel" data-id="js-panel" data-tab-id="01" style="display: none;">
          <div class="promo clearfix">
            <div class="promo__left">
              <a v-for="(item,index) in workData.sqtj" class="promo__item" :href="item.checkUrl">
                <div class="image">
                  <img :src="item.imgSrc" :alt="item.title">
                </div>
                <div class="info">
                  <div class="info__title" itemprop="name headline">{{item.title}}</div>
                  <div class="info__bottom">
                    <div class="author">
                      <div class="author__pic">
                        <img :src="item.authorHead" alt="">
                      </div>
                      <div class="author__info" itemprop="author" itemscope="" itemtype="http://schema.org/Person">
                        <div class="name">
                          {{item.authorName}}
                        </div>
                        <div class="date">{{item.date}}</div>
                      </div>
                    </div>
                    <div class="like">
                      <i class="icon icon__like create_collect" primary_id="118" type="1"></i>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div class="tab__action">
            <a href="https://qshare.rapaq.com/works/index" class="btn btn--idx btn--main btn--arrow" target="_self">更多作品</a>
          </div>
        </div>
        <div class="tab_panel" data-id="js-panel" data-tab-id="02">
          <div class="promo clearfix">
            <div class="promo__left">
              <a v-for="(item,index) in workData.zxzp" class="promo__item" :href="item.checkUrl">
                <div class="image">
                  <img :src="item.imgSrc" :alt="item.title">
                </div>
                <div class="info">
                  <div class="info__title" itemprop="name headline">{{item.title}}</div>
                  <div class="info__bottom">
                    <div class="author">
                      <div class="author__pic">
                        <img :src="item.authorHead" alt="">
                      </div>
                      <div class="author__info" itemprop="author" itemscope="" itemtype="http://schema.org/Person">
                        <div class="name">
                          {{item.authorName}}
                        </div>
                        <div class="date">{{item.date}}</div>
                      </div>
                    </div>
                    <div class="like">
                      <i class="icon icon__like create_collect" primary_id="118" type="1"></i>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div class="tab__action">
            <a href="https://qshare.rapaq.com/works/index" class="btn btn--idx btn--main btn--arrow" target="_blank">更多作品</a>
          </div>
        </div>
        <div class="tab_panel" data-id="js-panel" data-tab-id="03" style="display: none;">
          <div class="promo clearfix">
            <div class="promo__left">
              <a v-for="(item,index) in workData.rmzp" class="promo__item" :href="item.checkUrl">
                <div class="image">
                  <img :src="item.imgSrc" :alt="item.title">
                </div>
                <div class="info">
                  <div class="info__title" itemprop="name headline">{{item.title}}</div>
                  <div class="info__bottom">
                    <div class="author">
                      <div class="author__pic">
                        <img :src="item.authorHead" alt="">
                      </div>
                      <div class="author__info" itemprop="author" itemscope="" itemtype="http://schema.org/Person">
                        <div class="name">
                          {{item.authorName}}
                        </div>
                        <div class="date">{{item.date}}</div>
                      </div>
                    </div>
                    <div class="like">
                      <i class="icon icon__like create_collect" primary_id="118" type="1"></i>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div class="tab__action">
            <a href="https://qshare.rapaq.com/works/index" class="btn btn--idx btn--main btn--arrow">更多作品</a>
          </div>
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
      workData:{
        type:Object,
        default: function(){
          return {}
        }
      }
    },
    mounted() {
      $('[data-js-tabs="true"]').tabs();

    }
  }
	
</script>

<style>
	
</style>