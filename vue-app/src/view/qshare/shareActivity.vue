<template>
<div class="idx__section bg--gray">
  <div class="idx__wrap" id="mainpage_event">
    <div class="idxSection">
      <div class="idxSection__title">活動新鮮事</div>
      <div class="idxSection__main idxSection__main--action">
        <div class="idx__activity">
          <ul class="idxList idxList--activity clearfix">
            <li class="li main" v-for="(item,index) in activityData">
              <div class="activityBox activityBox--main">
                <a :href="item.checkUrl" class="activityBox__image">
                <img :src="item.imgSrc" :alt="item.title">
                </a>
                <div class="activityBox__text">
                  <div class="top clearfix">
                    <div class="date">
                      <span class="dateBox dateBox--square">
                        {{item.date}}
                      </span>
                    </div>
                    <div class="txt" >
                      <a :href="item.checkUrl" class="txt__title cusTitle">
                        {{item.title}}
                      </a>
                    </div>
                  </div>
                </div>
                <div class="activityBox__bottom">
                  <div class="follow">
                    <span class="follow__amount">
                      <span data-id="cnt">{{item.followCount}}</span>人收藏
                    </span>
                  </div>
                  <!-- <a href="https://qshare.rapaq.com/event/index?event_type=3" itemprop="url"><span class="category">講座課程</span></a> -->
                </div>
                <div class="activityBox__collection">
                  <i class="icon icon__like create_collect" primary_id="81" type="3"></i>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="idxSection__action">
        <a href="https://qshare.rapaq.com/event/index" class="btn btn--idx btn--main btn--arrow">更多活動</a>
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
      activityData:{
        type:Array,
        default: function(){
          return []
        }
      }
    },
  }
</script>

<style>
  .activityBox--main .activityBox__text .top .cusTitle {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    white-space: inherit;
  }
</style>