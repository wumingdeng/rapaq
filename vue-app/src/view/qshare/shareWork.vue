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
            <a href="https://qshare.rapaq.com/works/index" class="btn btn--idx btn--main btn--arrow">更多作品</a>
          </div>
        </div>
        <div class="tab_panel" data-id="js-panel" data-tab-id="02">
          <div class="promo clearfix">
            <div class="promo__left">
              <a href="https://qshare.rapaq.com/works/show/145" class="promo__item" itemscope="" itemtype="http://schema.org/Article">
                <div class="image"><img src="https://lh3.googleusercontent.com/HjN5vjWA5vHlZUXwa6PpzCIp2S3KzNn5bX2ocBu9rzMaa5g6SsP2sBkIYM8gpjNLjgzHljCMBMS3v57WXRmxqbb-=s560" alt="走秀" itemprop="image"></div>
                <div class="info">
                  <div class="info__title" itemprop="name headline">走秀</div>
                  <div class="info__bottom">
                    <div class="author">
                      <div class="author__pic">
                        <img src="https://storage.googleapis.com/rapaq_public/user_pic/headpic_100000121.jpg " alt="">
                      </div>
                      <div class="author__info" itemprop="author" itemscope="" itemtype="http://schema.org/Person">
                        <div class="name" itemprop="name">
                          椪小雨
                        </div>
                        <div class="date">2017年12月04日</div>
                      </div>
                      <meta itemprop="datePublished dateModified" content="2017-12-04">
                    </div>
                    <div class="like">
                      <i class="icon icon__like create_collect" primary_id="145" type="1"></i>
                    </div>
                  </div>
                </div>
                <div itemprop="publisher" itemscope="" itemtype="http://schema.org/Organization">
                  <meta itemprop="name" content="Rapaq 社群">
                  <div itemprop="logo" itemscope="" itemtype="http://schema.org/ImageObject">
                    <meta itemprop="url" content="https://storage.googleapis.com/rapaq_public/browser_icon/qshare.ico">
                  </div>
                </div>
                <meta itemprop="url mainEntityOfPage" content="https://qshare.rapaq.com/works/show/145">
              </a>
              <a href="https://qshare.rapaq.com/works/show/144" class="promo__item" itemscope="" itemtype="http://schema.org/Article">
                <div class="image"><img src="https://lh3.googleusercontent.com/2rJaJDYjmfJ1RHCA9BP_An8X9doyCHO_c0AKpFVMxYXwnLb-AiU6v5yg4uipj8Rp8jGqf2_gp6hL6xy4mmLDbS45jQ=s560" alt="遇見一扇窗" itemprop="image"></div>
                <div class="info">
                  <div class="info__title" itemprop="name headline">遇見一扇窗</div>
                  <div class="info__bottom">
                    <div class="author">
                      <div class="author__pic">
                        <img src="https://storage.googleapis.com/rapaq_public/user_pic/headpic_100000121.jpg " alt="">
                      </div>
                      <div class="author__info" itemprop="author" itemscope="" itemtype="http://schema.org/Person">
                        <div class="name" itemprop="name">
                          椪小雨
                        </div>
                        <div class="date">2017年12月04日</div>
                      </div>
                      <meta itemprop="datePublished dateModified" content="2017-12-04">
                    </div>
                    <div class="like">
                      <i class="icon icon__like create_collect" primary_id="144" type="1"></i>
                    </div>
                  </div>
                </div>
                <div itemprop="publisher" itemscope="" itemtype="http://schema.org/Organization">
                  <meta itemprop="name" content="Rapaq 社群">
                  <div itemprop="logo" itemscope="" itemtype="http://schema.org/ImageObject">
                    <meta itemprop="url" content="https://storage.googleapis.com/rapaq_public/browser_icon/qshare.ico">
                  </div>
                </div>
                <meta itemprop="url mainEntityOfPage" content="https://qshare.rapaq.com/works/show/144">
              </a>
              <a href="https://qshare.rapaq.com/works/show/143" class="promo__item" itemscope="" itemtype="http://schema.org/Article">
                <div class="image"><img src="https://lh3.googleusercontent.com/Ve2M2iWa5HNI5isFxwClsJmQ5eZ32Uct1ddMd8_O6DXAOGHaMz76KihmNkKxAxg9vhQadN-Af-XjXX5YO7rRSzDgcQ=s560" alt="[贈獎活動] 5000粉絲達成！送你披薩先生簽名畫" itemprop="image"></div>
                <div class="info">
                  <div class="info__title" itemprop="name headline">[贈獎活動] 5000粉絲達成！送你披薩先生簽名畫</div>
                  <div class="info__bottom">
                    <div class="author">
                      <div class="author__pic">
                        <img src="https://storage.googleapis.com/rapaq_public/user_pic/headpic_100000099.jpg " alt="">
                      </div>
                      <div class="author__info" itemprop="author" itemscope="" itemtype="http://schema.org/Person">
                        <div class="name" itemprop="name">
                          Q 小編
                        </div>
                        <div class="date">2017年11月23日</div>
                      </div>
                      <meta itemprop="datePublished dateModified" content="2017-11-23">
                    </div>
                    <div class="like">
                      <i class="icon icon__like create_collect" primary_id="143" type="1"></i>
                    </div>
                  </div>
                </div>
                <div itemprop="publisher" itemscope="" itemtype="http://schema.org/Organization">
                  <meta itemprop="name" content="Rapaq 社群">
                  <div itemprop="logo" itemscope="" itemtype="http://schema.org/ImageObject">
                    <meta itemprop="url" content="https://storage.googleapis.com/rapaq_public/browser_icon/qshare.ico">
                  </div>
                </div>
                <meta itemprop="url mainEntityOfPage" content="https://qshare.rapaq.com/works/show/143">
              </a>
            </div>
            <div class="promo__right">
              <a href="https://qshare.rapaq.com/works/show/142" class="promo__item" itemscope="" itemtype="http://schema.org/Article">
                <div class="image"><img src="https://lh3.googleusercontent.com/MJ96lphGulgF80t6U-ph6ibf0iTHc7x7HY2ADEQH3IAAJCIKOur4VU5dSi4g7yaoer8SBcWBSMAyD7exynXbvGhYDw=s560" alt="淡水" itemprop="image"></div>
                <div class="info">
                  <div class="info__title" itemprop="name headline">淡水</div>
                  <div class="info__bottom">
                    <div class="author">
                      <div class="author__pic">
                        <img src="https://graph.facebook.com/v2.10/1561674273899204/picture?type=large " alt="">
                      </div>
                      <div class="author__info" itemprop="author" itemscope="" itemtype="http://schema.org/Person">
                        <div class="name" itemprop="name">
                          林鎮球
                        </div>
                        <div class="date">2017年11月22日</div>
                      </div>
                      <meta itemprop="datePublished dateModified" content="2017-11-22">
                    </div>
                    <div class="like">
                      <i class="icon icon__like create_collect" primary_id="142" type="1"></i>
                    </div>
                  </div>
                </div>
                <div itemprop="publisher" itemscope="" itemtype="http://schema.org/Organization">
                  <meta itemprop="name" content="Rapaq 社群">
                  <div itemprop="logo" itemscope="" itemtype="http://schema.org/ImageObject">
                    <meta itemprop="url" content="https://storage.googleapis.com/rapaq_public/browser_icon/qshare.ico">
                  </div>
                </div>
                <meta itemprop="url mainEntityOfPage" content="https://qshare.rapaq.com/works/show/142">
              </a>
              <a href="https://qshare.rapaq.com/works/show/141" class="promo__item" itemscope="" itemtype="http://schema.org/Article">
                <div class="image"><img src="https://lh3.googleusercontent.com/hVXZQnAOYd5FlFqDxt3_7xF1dtUQyWtGfEbK_UivzgYkj8I-8mgrYunnSXxEIYI3o1NwwVYt0YTeI8xdpm2qxZO_tvI=s560" alt="刺刺小松果耳環" itemprop="image"></div>
                <div class="info">
                  <div class="info__title" itemprop="name headline">刺刺小松果耳環</div>
                  <div class="info__bottom">
                    <div class="author">
                      <div class="author__pic">
                        <img src="https://storage.googleapis.com/rapaq_public/user_pic/headpic_100001511.png " alt="">
                      </div>
                      <div class="author__info" itemprop="author" itemscope="" itemtype="http://schema.org/Person">
                        <div class="name" itemprop="name">
                          SUMOMO
                        </div>
                        <div class="date">2017年11月21日</div>
                      </div>
                      <meta itemprop="datePublished dateModified" content="2017-11-21">
                    </div>
                    <div class="like">
                      <i class="icon icon__like create_collect" primary_id="141" type="1"></i>
                    </div>
                  </div>
                </div>
                <div itemprop="publisher" itemscope="" itemtype="http://schema.org/Organization">
                  <meta itemprop="name" content="Rapaq 社群">
                  <div itemprop="logo" itemscope="" itemtype="http://schema.org/ImageObject">
                    <meta itemprop="url" content="https://storage.googleapis.com/rapaq_public/browser_icon/qshare.ico">
                  </div>
                </div>
                <meta itemprop="url mainEntityOfPage" content="https://qshare.rapaq.com/works/show/141">
              </a>
            </div>
          </div>
          <div class="tab__action">
            <a href="https://qshare.rapaq.com/works/index" class="btn btn--idx btn--main btn--arrow">更多作品</a>
          </div>
        </div>
        <div class="tab_panel" data-id="js-panel" data-tab-id="03" style="display: none;">
          <div class="promo clearfix">
            <div class="promo__left">
              <a href="https://qshare.rapaq.com/works/show/143" class="promo__item" itemscope="" itemtype="http://schema.org/Article">
                <div class="image"><img src="https://lh3.googleusercontent.com/Ve2M2iWa5HNI5isFxwClsJmQ5eZ32Uct1ddMd8_O6DXAOGHaMz76KihmNkKxAxg9vhQadN-Af-XjXX5YO7rRSzDgcQ=s560" alt="[贈獎活動] 5000粉絲達成！送你披薩先生簽名畫" itemprop="image"></div>
                <div class="info">
                  <div class="info__title" itemprop="name headline">[贈獎活動] 5000粉絲達成！送你披薩先生簽名畫</div>
                  <div class="info__bottom">
                    <div class="author">
                      <div class="author__pic">
                        <img src="https://storage.googleapis.com/rapaq_public/user_pic/headpic_100000099.jpg " alt="">
                      </div>
                      <div class="author__info" itemprop="author" itemscope="" itemtype="http://schema.org/Person">
                        <div class="name" itemprop="name">
                          Q 小編
                        </div>
                        <div class="date">2017年11月23日</div>
                      </div>
                      <meta itemprop="datePublished dateModified" content="2017-11-23">
                    </div>
                    <div class="like">
                      <i class="icon icon__like create_collect" primary_id="143" type="1"></i>
                    </div>
                  </div>
                </div>
                <div itemprop="publisher" itemscope="" itemtype="http://schema.org/Organization">
                  <meta itemprop="name" content="Rapaq 社群">
                  <div itemprop="logo" itemscope="" itemtype="http://schema.org/ImageObject">
                    <meta itemprop="url" content="https://storage.googleapis.com/rapaq_public/browser_icon/qshare.ico">
                  </div>
                </div>
                <meta itemprop="url mainEntityOfPage" content="https://qshare.rapaq.com/works/show/143">
              </a>
              <a href="https://qshare.rapaq.com/works/show/3" class="promo__item" itemscope="" itemtype="http://schema.org/Article">
                <div class="image"><img src="https://lh3.googleusercontent.com/ZaL6a46VEb2x3D-fmd-MGEFUm7HN2v92-IECO4d9GE_GXmRBdJA5-ogs7zINLayqBPvloGuAbWP3NBIbqhWwp2EMGQ=s560" alt="轉載－創意月餅禮盒設計，把「月光」摘下來做伴！" itemprop="image"></div>
                <div class="info">
                  <div class="info__title" itemprop="name headline">轉載－創意月餅禮盒設計，把「月光」摘下來做伴！</div>
                  <div class="info__bottom">
                    <div class="author">
                      <div class="author__pic">
                        <img src="https://storage.googleapis.com/rapaq_public/user_pic/headpic_100000047.png " alt="">
                      </div>
                      <div class="author__info" itemprop="author" itemscope="" itemtype="http://schema.org/Person">
                        <div class="name" itemprop="name">
                          Xunyu
                        </div>
                        <div class="date">2017年08月29日</div>
                      </div>
                      <meta itemprop="datePublished dateModified" content="2017-08-29">
                    </div>
                    <div class="like">
                      <i class="icon icon__like create_collect" primary_id="3" type="1"></i>
                    </div>
                  </div>
                </div>
                <div itemprop="publisher" itemscope="" itemtype="http://schema.org/Organization">
                  <meta itemprop="name" content="Rapaq 社群">
                  <div itemprop="logo" itemscope="" itemtype="http://schema.org/ImageObject">
                    <meta itemprop="url" content="https://storage.googleapis.com/rapaq_public/browser_icon/qshare.ico">
                  </div>
                </div>
                <meta itemprop="url mainEntityOfPage" content="https://qshare.rapaq.com/works/show/3">
              </a>
              <a href="https://qshare.rapaq.com/works/show/79" class="promo__item" itemscope="" itemtype="http://schema.org/Article">
                <div class="image"><img src="https://lh3.googleusercontent.com/WwPbtqrAJg0ugUGLVFZrFRpmgca2W4tqTDpn6hvp68caqJg13Inifdy34pk3V9BtuMOLXimPbA8J8xbyRltmheGPh74=s560" alt="街拍 | 澳門" itemprop="image"></div>
                <div class="info">
                  <div class="info__title" itemprop="name headline">街拍 | 澳門</div>
                  <div class="info__bottom">
                    <div class="author">
                      <div class="author__pic">
                        <img src="https://lh3.googleusercontent.com/-dlBA3WQJJlY/AAAAAAAAAAI/AAAAAAAAC1U/AwH1Q6P6mwA/photo.jpg?sz=150 " alt="">
                      </div>
                      <div class="author__info" itemprop="author" itemscope="" itemtype="http://schema.org/Person">
                        <div class="name" itemprop="name">
                          ChunHao Chen
                        </div>
                        <div class="date">2017年09月13日</div>
                      </div>
                      <meta itemprop="datePublished dateModified" content="2017-09-13">
                    </div>
                    <div class="like">
                      <i class="icon icon__like create_collect" primary_id="79" type="1"></i>
                    </div>
                  </div>
                </div>
                <div itemprop="publisher" itemscope="" itemtype="http://schema.org/Organization">
                  <meta itemprop="name" content="Rapaq 社群">
                  <div itemprop="logo" itemscope="" itemtype="http://schema.org/ImageObject">
                    <meta itemprop="url" content="https://storage.googleapis.com/rapaq_public/browser_icon/qshare.ico">
                  </div>
                </div>
                <meta itemprop="url mainEntityOfPage" content="https://qshare.rapaq.com/works/show/79">
              </a>
            </div>
            <div class="promo__right">
              <a href="https://qshare.rapaq.com/works/show/65" class="promo__item" itemscope="" itemtype="http://schema.org/Article">
                <div class="image"><img src="https://lh3.googleusercontent.com/OhJRKfhkcYda7dtqircgLCNqydzU3AcSURcX69uJ4GL1kEUZfnl1IhaFPlEceY6paRLspbXTAengjT2a_fUVPXO9hBc=s560" alt="Fairy Garden" itemprop="image"></div>
                <div class="info">
                  <div class="info__title" itemprop="name headline">Fairy Garden</div>
                  <div class="info__bottom">
                    <div class="author">
                      <div class="author__pic">
                        <img src="https://lh5.googleusercontent.com/-gNFgBIPjM5o/AAAAAAAAAAI/AAAAAAAAADo/jhTbYI83bk4/photo.jpg?sz=150 " alt="">
                      </div>
                      <div class="author__info" itemprop="author" itemscope="" itemtype="http://schema.org/Person">
                        <div class="name" itemprop="name">
                          Jean Tai
                        </div>
                        <div class="date">2017年09月08日</div>
                      </div>
                      <meta itemprop="datePublished dateModified" content="2017-09-08">
                    </div>
                    <div class="like">
                      <i class="icon icon__like create_collect" primary_id="65" type="1"></i>
                    </div>
                  </div>
                </div>
                <div itemprop="publisher" itemscope="" itemtype="http://schema.org/Organization">
                  <meta itemprop="name" content="Rapaq 社群">
                  <div itemprop="logo" itemscope="" itemtype="http://schema.org/ImageObject">
                    <meta itemprop="url" content="https://storage.googleapis.com/rapaq_public/browser_icon/qshare.ico">
                  </div>
                </div>
                <meta itemprop="url mainEntityOfPage" content="https://qshare.rapaq.com/works/show/65">
              </a>
              <a href="https://qshare.rapaq.com/works/show/85" class="promo__item" itemscope="" itemtype="http://schema.org/Article">
                <div class="image"><img src="https://lh3.googleusercontent.com/vbWVe5FqvkRJ6NJkYaa29hS1Y3WncX_7BC04Hh0hXqa_iUM8bOa8BvSBlZ-TqVRzAmetmDS6JWe1TjEaw5N5jZBfAw=s560" alt="街拍 | 澳門 II" itemprop="image"></div>
                <div class="info">
                  <div class="info__title" itemprop="name headline">街拍 | 澳門 II</div>
                  <div class="info__bottom">
                    <div class="author">
                      <div class="author__pic">
                        <img src="https://lh3.googleusercontent.com/-dlBA3WQJJlY/AAAAAAAAAAI/AAAAAAAAC1U/AwH1Q6P6mwA/photo.jpg?sz=150 " alt="">
                      </div>
                      <div class="author__info" itemprop="author" itemscope="" itemtype="http://schema.org/Person">
                        <div class="name" itemprop="name">
                          ChunHao Chen
                        </div>
                        <div class="date">2017年09月20日</div>
                      </div>
                      <meta itemprop="datePublished dateModified" content="2017-09-20">
                    </div>
                    <div class="like">
                      <i class="icon icon__like create_collect" primary_id="85" type="1"></i>
                    </div>
                  </div>
                </div>
                <div itemprop="publisher" itemscope="" itemtype="http://schema.org/Organization">
                  <meta itemprop="name" content="Rapaq 社群">
                  <div itemprop="logo" itemscope="" itemtype="http://schema.org/ImageObject">
                    <meta itemprop="url" content="https://storage.googleapis.com/rapaq_public/browser_icon/qshare.ico">
                  </div>
                </div>
                <meta itemprop="url mainEntityOfPage" content="https://qshare.rapaq.com/works/show/85">
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