<template>
<div class="idx__section bg--white">
  <div class="idx__wrap" id="mainpage_blog">
    <div class="idxSection">
      <div class="idxSection__title">分享文章</div>
      <div class="idxSection__main idxSection__main--action">
        <div class="idxList idxList--blog clearfix">
          <div class="li" v-for="(item,index) in blogData">
            <div class="blogBox">
              <div class="blogBox__topic">
                <div class="author">
                  <a :href="item.authorHref">
                    <div class="author__pic">
                      <img :src="item.authorHead" alt="">
                    </div>
                  </a>
                  <div class="author__info">
                    <a :href="item.authorHref">
                      <div class="name" itemprop="name">
                        {{item.authorName}}
                      </div>
                    </a>
                    <div class="date">
                      {{item.date}}
                    </div>
                  </div>
                </div>
                <div class="like">
                  <i class="icon icon__like create_collect" primary_id="119" type="2"></i>
                </div>
              </div>
              <div class="blogBox__pic">
                <a :href="item.checkUrl" itemprop="url mainEntityOfPage" gtm-category="banner">
                  <img :src="item.imgSrc" :alt="item.blogTitle">
                </a>
              </div>
              <div class="blogBox__info">
                <div class="text">
                  <div class="text__title">
                    <a :href="item.checkUrl">{{item.blogTitle}}</a>
                  </div>
                  <div class="text__intro">
                    <p>{{item.blogIntro}}</p>
                  </div>
                </div>
                <div class="category">
                  <span>{{item.category}}</span>
                </div>
                <div class="freq">
                  {{item.freq}} </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="idxSection__action">
        <a href="https://qshare.rapaq.com/blog/index" class="btn btn--idx btn--main btn--arrow">更多文章</a>
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
      blogData:{
        type:Array,
        default: function(){
          return []
        }
      }
    },
  }
</script>

<style>
	
</style>