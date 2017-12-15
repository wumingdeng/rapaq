<template>
  <div class="wrapper">
    <div class="mask"></div>
    <div class="shareMask" data-id="shareMask"></div>
    <div class="mask-z"></div>

		<shareNav></shareNav>

    <div class="whitebg"></div>
    <div class="wrapper-inner">
      <div itemscope itemtype="http://schema.org/Event">
        <section class="a-contents pb0">
          <div class="a-contents-wrap">
            <div class="a-contents-page">
              <div class="page-cover">
                <div class="page-cover__pic">
                  <img :src="showData.cover_image" :alt="showData.title">
                </div>
              </div>
              <div class="page-header" data-id="js-pageHeader">
                <div class="page-header__info page-header__info--public">
                  <div class="page-header__title">{{showData.title}}</div>
                  <div class="page-header__category">
                    <span><a href="https://qshare.rapaq.com/event/index?event_type=4">{{eventTypeName}}</a></span>
                  </div>
                  <div class="page-header__freq frequency">
                    {{showData.views}}次瀏覽 </div>
                </div>
                <div class="page-header__action page-header__action--activity">
                  <div class="page-header-icons">
                    <div class="icons__save create_collect" primary_id="104" type="3"></div>
                    <div class="icons__share"></div>
                    <div class="icons__edit"></div>
                  </div>
                  <div class="sharestyle" style="display: none">
                    <div class="sharestyle-center">
                      <div class="share__title">分享</div>
                      <div id="scrolling-icons">
                        <ul class="share-icons" type="3" primary_id="104" current_url="">
                          <li class="share-icons__qs">
                            <img src="https://qshare.rapaq.com/img/icons/share-qshare.svg " alt="">
                          </li>
                          <li class="share-icons__fb">
                            <a href="https://www.facebook.com/sharer/sharer.php?u=http://qshare.rapaq.com/event/show/104" target="_blank"><img src="https://qshare.rapaq.com/img/icons/share-fb.svg " alt=""></a>
                          </li>
                          <li class="share-icons__li">
                            <div class="line-it-button" data-lang="zh_Hant" data-type="share-d" data-url="http://qshare.rapaq.com/event/show/104" style="display: none;"></div>
                          </li>
                          <li class="share-icons__wb">
                            <a href="http://service.weibo.com/share/share.php?url=http://qshare.rapaq.com/event/show/104&title=裝風 – 吳其錚個展&pic=https://lh3.googleusercontent.com/VTKR5QS9gqoLiW77tMugvkH7LZbdhB7oqFn6dsG5AD6OFgY9ws5tZ3zhUaIfQFv4MlpfljWKkqwCUthSspu4IkV5" target="_blank"><img src="https://qshare.rapaq.com/img/icons/share-weibo.svg " alt=""></a>
                          </li>
                        </ul>
                        <div class="share__triangle triangle-shadow"></div>
                        <div class="share__triangle"></div>
                        <div class="share-href">
                          <input type="button" class="share-href__copy">
                          <input type="text" class="share-href__input" value="http://qshare.rapaq.com/event/show/104">
                        </div>
                        <div class="share__cancel">
                          <span>取消</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="report"></div>
                  <div class="page-header-more" style="display:none;">
                    <ul class="more-item" primary_id="104" type_id="3">
                      <li class="rrr" report_type="3">檢舉</li>
                    </ul>
                    <div class="more__triangle triangle-shadow"></div>
                    <div class="more__triangle"></div>
                  </div>
                </div>
              </div>
              <div class="page-information">
                <div class="page-information-time">
                  <meta itemprop="startDate" content="2017-12-09 15:00:00">
                  <meta itemprop="endDate" content="2018-01-21 18:00:00">
                  <span>2017年12月09日 - 2018年01月21日</span>
                  <span class="impt time">
                        15:00 - 18:00
                    </span>
                </div>
                <div class="page-information-location">
                  <span>{{showData.position}}</span>
                  <a href="https://www.google.com/maps/dir//台南市台南市安平區慶平路446號" target="_blank" itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
                        <span class="impt location" itemprop="streetAddress">{{showData.address}}</span>
                    </a>
                </div>
                <div class="page-information-organizer">
                  <span>主辦單位</span>
                  <span class="impt organizer" itemprop="performer">{{showData.organizer}}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="a-contents pt20 pb0">
          <div class="a-contents-wrap">
            <div class="a-contents-page">
              <div class="page-actintro">
                活動介紹
              </div>
              <div class="page-inner">
              	<p style="text-align: center;"><img src="http://storage.googleapis.com/rapaq-image/qshare/upload/171117103143619875a0e4a0fa3d27.png" style="width: 1026px;"><br></p>
              </div>
              <div class="page-inner" id="activityContent" v-html="contentHtml">
                
              </div>
              <div class="page-inner">
                <ul class="page-inner-label">
                  <li>風獅爺</li>
                </ul>
                <div class="page-inner-author">
                  <div class="page-inner-author__pic"><img src="https://storage.googleapis.com/rapaq_public/user_pic/headpic_100000099.jpg" alt=""></div>
                  <div class="page-inner-author__name">Q 小編</div>
                  <div class="page-inner-author__status"></div>
                </div>
                <div class="page-inner-btns">
                  <div class="page-inner-btns__btn btn-follow btn-style-small create_follow" followed_userid=100000099>追蹤</div>
                  <div class="page-inner-btns__btn btn-personal btn-style-small"><a href="https://qshare.rapaq.com/member/index/100000099">個人頁</a></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section class="a-other">
        <div class="a-other-wrap">
          <h3>發掘其他活動</h3>
          <div id="scrolling-other">
            <ul class="a-other-all" id="heheda">
              <li class="a-other-all-box" v-for="(item,index) in showData.otherData">
                <div class="box__pic">
                	<div @click="getData(item.id)">
                  	<img :src="item.cover_image" alt="">
                  </div>
                </div>
                <div class="box__title">
                	<div @click="getData(item.id)">
										{{item.title}}
									</div>
                </div>
                <div class="box__info">
                  <span>{{item.start_time}} - {{item.end_time}}</span>
                  <span>{{item.address}}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section class="w-comment">
        <div class="w-comment-wrap">
          <div class="w-comment-content">
<!--             <div class="w-comment-content__total">評論 ( 0 )</div>
            <div class="a-comment-content__login">
              你必須 <a href="https://oauth.rapaq.com/register/web" target="_blank">註冊</a> 或 <a href="https://qshare.rapaq.com/login">登入</a> 才能評論。
            </div>
            <ul class="w-comment-content-say">
            </ul> -->
          </div>
        </div>
      </section>

      <cusfooter></cusfooter>
    </div>
  </div>
</template>

<script>
	import sf from '../../../../static/js/share/common.js'
	import shareNav from '../shareNav'
  import cusfooter from '../../../components/footer'
	export default {
		data() {
			return {
				id:0,
				contentHtml:'',
				showData:{}
			}
		},
    components:{
      "shareNav":shareNav,
      "cusfooter":cusfooter,
    },
    computed:{
    	eventTypeName() {
    		if (this.showData.event_type)
    			return JSON.parse(this.showData.event_type).name
    		else 
    			return ''
    	}
    },
    methods:{
    	getData(id) {
    		id = id || this.id
    		this.$store.dispatch('getActivityById',{
    			self: this,
    			info: {
    				id: id
    			},
    			callback(self, res) {
    				if (res.body.ok) {
    					self.showData = res.body.ok
    					self.contentHtml = res.body.ok.content
    					self.initItemSlide()
			        $('html,body').animate({
			          scrollTop: $('body').offset().top - 20
			        }, 500);
    				}
    			}
    		})
    	},
    	initItemSlide() {
			  if (window.innerWidth <= 768) {
		    	var carouselOther;
		    	this.$nextTick(function(){
			      carouselOther = $("ul.a-other-all");
			      carouselOther.itemslide({
			        left_sided: true
			      });
		    	})
			  }
			  if (window.innerWidth <= 414) {
			    var carouselIcons;
			    $(document).ready(function() {
			      carouselIcons = $("ul.share-icons");
			      carouselIcons.itemslide({
			        left_sided: true
			      });
			    });
			  }
    	}
    },
		mounted() {
			sf.init()
			this.id = this.$route.query.id
			this.getData()
		},
		beforeDestroy() {
			sf.distroy()
		}
	}
</script>

<style type="text/css" src="../../../../static/css/share/page.css"></style>
<style>
	
</style>