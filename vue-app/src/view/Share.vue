<template>
	<div class="wrapper">
		<div class="mask" style="display: none;"></div>
		<div class="shareMask" data-id="shareMask"></div>
		<div class="authorMask" data-id="authorMask"></div>
		<nav class="nav is-active">
			<div class="nav-load">
			<div class="nav-content">
	    <div class="nav-content-mainbar">
      <div class="mainbar__logo">
          <a href="https://qshare.rapaq.com/index">
              <div class="mainbar__logo__logo"></div>
          </a>
      </div>
        <div class="mainbar-aside">
            <div class="mainbar-aside__click">
                <div class="click-close">
                    <span class="click-close__left"></span>
                    <span class="click-close__right"></span>
                </div>
                <div class="click-menubtn"></div>
            </div>
            <div class="mainbar-aside-menu">
                <div class=""><a href="https://qshare.rapaq.com/works/index">作品</a></div>
                <div class=""><a href="https://qshare.rapaq.com/blog/index">文章</a></div>
                <div class=""><a href="https://qshare.rapaq.com/event/index">活動</a></div>
            </div>
            <div class="mainbar-aside-creat creat-click" style="line-height:59px">
                <div class="creat-icon">
                    <img src="https://qshare.rapaq.com/img/icons/nav-creat-icon.svg" alt="">
                </div>創建
            </div>
            <div class="mainbar-aside-search">
                <form method="GET" action="https://qshare.rapaq.com/search/index?search_type=1" accept-charset="UTF-8">
                    <input type="text" class="search__input" placeholder="請輸入關鍵字" name="search">
                    <button class="search__icon"></button>
                </form>
            </div>
            <div class="mainbar-aside-notify">
                 <div class="member__msg  msg-alert" style="display: none;"></div>
            </div>
                            <div class="mainbar-aside-login member-btn"></div>
                    </div>
    </div>
    <div class="nav-content-toggle is--hide" style="">
        <div class="toggle-member">
            <div class="toggle-member__pic">
                                    <img src="https://qshare.rapaq.com/img/icons/default.png" alt="">
                            </div>
            <ul class="toggle-member-link">
                            <li class="not-login"><a href="https://qshare.rapaq.com/login">登入 / 註冊</a></li>
                        </ul>
        </div>
        <div class="toggle-menu">
            <div class=""><a href="https://qshare.rapaq.com/works/index">作品</a></div>
            <div class=""><a href="https://qshare.rapaq.com/blog/index">文章</a></div>
            <div class=""><a href="https://qshare.rapaq.com/event/index">活動</a></div>
            <div class="mc creat-click">
                <div class="creat-icon">
                    <img src="https://qshare.rapaq.com/img/icons/nav-creat-icon.svg" alt="">
                </div>創建
            </div>
        </div>
        <div class="toggle__search">
            <form method="GET" action="https://qshare.rapaq.com/search/index?search_type=1" accept-charset="UTF-8">
                <input type="text" class="search__input" placeholder="請輸入關鍵字" name="search">
                <button class="search__icon"></button>
            </form>
        </div>
        <ul class="toggle-webs">
            <li class="toggle-webs__1">
                <a href="http://rapaq.com/" target="_blank">
                    <div>RAPAQ</div>
                    <div class="webs__bg"></div>
                </a>
            </li>
            <li class="toggle-webs__4">
                <a href="https://qshare.rapaq.com/index">
                    <div>
                        <span>設群</span>
                        <span>・</span>
                        <span>Q’Share</span>
                    </div>
                </a>
                <div class="webs__bg"></div>
            </li>
            <li class="toggle-webs__2">
                <a href="https://qgoods.rapaq.com/" target="_blank">
                    <div>
                        <span>好物</span>
                        <span>・</span>
                        <span>Q’Goods</span>
                    </div>
                    <div class="webs__bg"></div>
                </a>
            </li>
            <li class="toggle-webs__5">
                <a href="http://qmaker.rapaq.com/" target="_blank">
                    <div>
                        <span>創創</span>
                        <span>・</span>
                        <span>Q’Maker</span>
                    </div>
                </a>
                <div class="webs__bg"></div>
            </li>
            <li class="toggle-webs__3">
                <a href="http://point.rapaq.com/" target="_blank">
                    <div>
                        <span>破點</span>
                        <span>・</span>
                        <span>Point</span>
                    </div>
                </a>
                <div class="webs__bg"></div>
            </li>
        </ul>
    </div>
    <ul class="nav-content-mtoggle is--hide"><!-- click member btn would be show it -->
                    <li class="not-login"><a href="https://qshare.rapaq.com/login">登入 / 註冊</a></li>
            </ul>
    <div class="nav-content-ntoggle  is--hide" style=""><!-- click notify btn would be show it -->
    </div>
    <ul class="nav-content-ctoggle is--hide"><!-- click creat btn would be show it -->
                    <div class="ctoggle-login">
                <h3>創建</h3>
                <p>你必須註冊或登入才能發佈</p>
                <div class="ctoggle-login__btn btn-cancel">取消</div>
                <a href="https://qshare.rapaq.com/login"><div class="ctoggle-login__btn btn-login">註冊/登入</div></a>
            </div>
            </ul>
</div>            
</div>
        </nav>
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
<div class="idx">
   <!-- KV start -->
    <div class="idx__kv clearfix" id="mainpage_banner">
        <div class="swiper-container swiper-container-horizontal swiper-container-autoheight" data-swiper="KV">
            <div class="swiper-wrapper" style="height: 589px; transform: translate3d(-1125px, 0px, 0px); transition-duration: 0ms;"><div class="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="5" style="width: 375px;">
    <div class="idx__kv--image">
        <div class="square square--left">
            <div class="square__content square__content--image">
                <a href="https://qshare.rapaq.com/works/show/140">
                    <div class="image" data-id="imageContainer">
                        <img src="https://lh3.googleusercontent.com/vKIYgLec8cW2C8KApSnKmaHYiT9YSSz-klbHMx1408oYWPqCs2hy6PSCNqtafRZ-VtQMrqco9M-0eyc1UFgLp7gNhw=s2382" alt="与玥樓構築記 / 裝幀設計 / 美術設計">
                    </div>
                </a>
            </div>
        </div>
    </div>
    <div class="idx__kv--info">
        <div class="square square--right">
            <div class="square__content  square__content--info">
                <div class="info">
                    <div class="info__title">与玥樓構築記 / 裝幀設計 / 美術設計</div>
                                                                        <div class="info__author">
                                <a href="https://qshare.rapaq.com/member/index/100000126">
                                    <div class="pic"><img src="https://storage.googleapis.com/rapaq_public/user_pic/headpic_100000126.jpg"></div>
                                    <div class="name">Nomadhouse Studio</div>
                                </a>
                                <div class="date">2017年11月13日</div>
                                <div class="action">
                                    <a href="https://qshare.rapaq.com/works/show/140" class="btn btn--idx btn--main btn--kv">查看作品</a>
                                </div>
                            </div>
                                                            </div>
            </div>
        </div>
    </div>
</div>
                <!-- Slides element -->
                                    <div class="swiper-slide" data-swiper-slide-index="0" style="width: 375px;">
    <div class="idx__kv--image">
        <div class="square square--left">
            <div class="square__content square__content--image">
                <a href="https://qshare.rapaq.com/works/show/144">
                    <div class="image" data-id="imageContainer">
                        <img src="https://lh3.googleusercontent.com/2rJaJDYjmfJ1RHCA9BP_An8X9doyCHO_c0AKpFVMxYXwnLb-AiU6v5yg4uipj8Rp8jGqf2_gp6hL6xy4mmLDbS45jQ=s2382" alt="遇見一扇窗">
                    </div>
                </a>
            </div>
        </div>
    </div>
    <div class="idx__kv--info">
        <div class="square square--right">
            <div class="square__content  square__content--info">
                <div class="info">
                    <div class="info__title">遇見一扇窗</div>
                                                                        <div class="info__author">
                                <a href="https://qshare.rapaq.com/member/index/100000121">
                                    <div class="pic"><img src="https://storage.googleapis.com/rapaq_public/user_pic/headpic_100000121.jpg"></div>
                                    <div class="name">椪小雨</div>
                                </a>
                                <div class="date">2017年12月04日</div>
                                <div class="action">
                                    <a href="https://qshare.rapaq.com/works/show/144" class="btn btn--idx btn--main btn--kv">查看作品</a>
                                </div>
                            </div>
                                                            </div>
            </div>
        </div>
    </div>
</div>                                    <div class="swiper-slide swiper-slide-prev" data-swiper-slide-index="1" style="width: 375px;">
    <div class="idx__kv--image">
        <div class="square square--left">
            <div class="square__content square__content--image">
                <a href="https://qshare.rapaq.com/works/show/143">
                    <div class="image" data-id="imageContainer">
                        <img src="https://lh3.googleusercontent.com/Ve2M2iWa5HNI5isFxwClsJmQ5eZ32Uct1ddMd8_O6DXAOGHaMz76KihmNkKxAxg9vhQadN-Af-XjXX5YO7rRSzDgcQ=s2382" alt="[贈獎活動] 5000粉絲達成！送你披薩先生簽名畫">
                    </div>
                </a>
            </div>
        </div>
    </div>
    <div class="idx__kv--info">
        <div class="square square--right">
            <div class="square__content  square__content--info">
                <div class="info">
                    <div class="info__title">[贈獎活動] 5000粉絲達成！送你披薩先生簽名畫</div>
                                                                        <div class="info__author">
                                <a href="https://qshare.rapaq.com/member/index/100000099">
                                    <div class="pic"><img src="https://storage.googleapis.com/rapaq_public/user_pic/headpic_100000099.jpg"></div>
                                    <div class="name">Q 小編</div>
                                </a>
                                <div class="date">2017年11月23日</div>
                                <div class="action">
                                    <a href="https://qshare.rapaq.com/works/show/143" class="btn btn--idx btn--main btn--kv">查看作品</a>
                                </div>
                            </div>
                                                            </div>
            </div>
        </div>
    </div>
</div>                                    <div class="swiper-slide swiper-slide-active" data-swiper-slide-index="2" style="width: 375px;">
    <div class="idx__kv--image">
        <div class="square square--left">
            <div class="square__content square__content--image">
                <a href="https://qshare.rapaq.com/works/show/135">
                    <div class="image" data-id="imageContainer">
                        <img src="https://lh3.googleusercontent.com/rEb7C9bMYL_c0uV3ss9EivWsCDiibzIAYtnrxSicVGtomunq4HCRODaauYii-8led6bLG0438cFCZjreE49CNR3Xeg=s2382" alt="Time">
                    </div>
                </a>
            </div>
        </div>
    </div>
    <div class="idx__kv--info">
        <div class="square square--right">
            <div class="square__content  square__content--info">
                <div class="info">
                    <div class="info__title">Time</div>
                                                                        <div class="info__author">
                                <a href="https://qshare.rapaq.com/member/index/100000111">
                                    <div class="pic"><img src="https://storage.googleapis.com/rapaq_public/user_pic/headpic_100000111.jpg"></div>
                                    <div class="name">blue流</div>
                                </a>
                                <div class="date">2017年10月31日</div>
                                <div class="action">
                                    <a href="https://qshare.rapaq.com/works/show/135" class="btn btn--idx btn--main btn--kv">查看作品</a>
                                </div>
                            </div>
                                                            </div>
            </div>
        </div>
    </div>
</div>                                    <div class="swiper-slide swiper-slide-next" data-swiper-slide-index="3" style="width: 375px;">
    <div class="idx__kv--image">
        <div class="square square--left">
            <div class="square__content square__content--image">
                <a href="https://qshare.rapaq.com/works/show/128">
                    <div class="image" data-id="imageContainer">
                        <img src="https://lh3.googleusercontent.com/49Y5yQpmVZaOKatHEOjEN43VbFGHtX9K7JO7U-AmgXXtofSR0tAB68B1MRRlBjIpkaEFbhF4BUmIfJtXYVl_34V_UrQ=s2382" alt="晚安晚安">
                    </div>
                </a>
            </div>
        </div>
    </div>
    <div class="idx__kv--info">
        <div class="square square--right">
            <div class="square__content  square__content--info">
                <div class="info">
                    <div class="info__title">晚安晚安</div>
                                                                        <div class="info__author">
                                <a href="https://qshare.rapaq.com/member/index/100000289">
                                    <div class="pic"><img src="https://storage.googleapis.com/rapaq_public/user_pic/headpic_100000289.jpg"></div>
                                    <div class="name">蛋妹</div>
                                </a>
                                <div class="date">2017年10月27日</div>
                                <div class="action">
                                    <a href="https://qshare.rapaq.com/works/show/128" class="btn btn--idx btn--main btn--kv">查看作品</a>
                                </div>
                            </div>
                                                            </div>
            </div>
        </div>
    </div>
</div>                                    <div class="swiper-slide" data-swiper-slide-index="4" style="width: 375px;">
    <div class="idx__kv--image">
        <div class="square square--left">
            <div class="square__content square__content--image">
                <a href="https://qshare.rapaq.com/works/show/141">
                    <div class="image" data-id="imageContainer">
                        <img src="https://lh3.googleusercontent.com/hVXZQnAOYd5FlFqDxt3_7xF1dtUQyWtGfEbK_UivzgYkj8I-8mgrYunnSXxEIYI3o1NwwVYt0YTeI8xdpm2qxZO_tvI=s2382" alt="刺刺小松果耳環">
                    </div>
                </a>
            </div>
        </div>
    </div>
    <div class="idx__kv--info">
        <div class="square square--right">
            <div class="square__content  square__content--info">
                <div class="info">
                    <div class="info__title">刺刺小松果耳環</div>
                                                                        <div class="info__author">
                                <a href="https://qshare.rapaq.com/member/index/100001511">
                                    <div class="pic"><img src="https://storage.googleapis.com/rapaq_public/user_pic/headpic_100001511.png"></div>
                                    <div class="name">SUMOMO</div>
                                </a>
                                <div class="date">2017年11月21日</div>
                                <div class="action">
                                    <a href="https://qshare.rapaq.com/works/show/141" class="btn btn--idx btn--main btn--kv">查看作品</a>
                                </div>
                            </div>
                                                            </div>
            </div>
        </div>
    </div>
</div>                                    <div class="swiper-slide" data-swiper-slide-index="5" style="width: 375px;">
    <div class="idx__kv--image">
        <div class="square square--left">
            <div class="square__content square__content--image">
                <a href="https://qshare.rapaq.com/works/show/140">
                    <div class="image" data-id="imageContainer">
                        <img src="https://lh3.googleusercontent.com/vKIYgLec8cW2C8KApSnKmaHYiT9YSSz-klbHMx1408oYWPqCs2hy6PSCNqtafRZ-VtQMrqco9M-0eyc1UFgLp7gNhw=s2382" alt="与玥樓構築記 / 裝幀設計 / 美術設計">
                    </div>
                </a>
            </div>
        </div>
    </div>
    <div class="idx__kv--info">
        <div class="square square--right">
            <div class="square__content  square__content--info">
                <div class="info">
                    <div class="info__title">与玥樓構築記 / 裝幀設計 / 美術設計</div>
                                                                        <div class="info__author">
                                <a href="https://qshare.rapaq.com/member/index/100000126">
                                    <div class="pic"><img src="https://storage.googleapis.com/rapaq_public/user_pic/headpic_100000126.jpg"></div>
                                    <div class="name">Nomadhouse Studio</div>
                                </a>
                                <div class="date">2017年11月13日</div>
                                <div class="action">
                                    <a href="https://qshare.rapaq.com/works/show/140" class="btn btn--idx btn--main btn--kv">查看作品</a>
                                </div>
                            </div>
                                                            </div>
            </div>
        </div>
    </div>
</div>                            <div class="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="0" style="width: 375px;">
    <div class="idx__kv--image">
        <div class="square square--left">
            <div class="square__content square__content--image">
                <a href="https://qshare.rapaq.com/works/show/144">
                    <div class="image" data-id="imageContainer">
                        <img src="https://lh3.googleusercontent.com/2rJaJDYjmfJ1RHCA9BP_An8X9doyCHO_c0AKpFVMxYXwnLb-AiU6v5yg4uipj8Rp8jGqf2_gp6hL6xy4mmLDbS45jQ=s2382" alt="遇見一扇窗">
                    </div>
                </a>
            </div>
        </div>
    </div>
    <div class="idx__kv--info">
        <div class="square square--right">
            <div class="square__content  square__content--info">
                <div class="info">
                    <div class="info__title">遇見一扇窗</div>
                                                                        <div class="info__author">
                                <a href="https://qshare.rapaq.com/member/index/100000121">
                                    <div class="pic"><img src="https://storage.googleapis.com/rapaq_public/user_pic/headpic_100000121.jpg"></div>
                                    <div class="name">椪小雨</div>
                                </a>
                                <div class="date">2017年12月04日</div>
                                <div class="action">
                                    <a href="https://qshare.rapaq.com/works/show/144" class="btn btn--idx btn--main btn--kv">查看作品</a>
                                </div>
                            </div>
                                                            </div>
            </div>
        </div>
    </div>
</div></div>
            <div class="pagination clearfix">
                <div class="left">
                    <div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets" data-swiper-pagination="kv"><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet swiper-pagination-bullet-active"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span></div>
                </div>
            </div>
        </div>
    </div>
    <!-- KV end -->
    <!-- blog start -->
    <div class="idx__section bg--white">
        <div class="idx__wrap" id="mainpage_blog">
            <div class="idxSection">
                <div class="idxSection__title">分享文章</div>
                <div class="idxSection__main idxSection__main--action">
                    <div class="idxList idxList--blog clearfix">
                                                    <div class="li" itemscope="" itemtype="http://schema.org/Article" itemprop="url mainEntityOfPage">
    <div class="blogBox">
        <div class="blogBox__topic">
            <div class="author">
                <a href="https://qshare.rapaq.com/member/index/100000134">
                    <div class="author__pic">
                        <img src="https://storage.googleapis.com/rapaq_public/user_pic/headpic_100000134.png" alt="">
                    </div>
                </a>
                <div class="author__info" itemprop="author" itemscope="" itemtype="http://schema.org/Person">
                    <a href="https://qshare.rapaq.com/member/index/100000134">
                        <div class="name" itemprop="name">
                            滾動力 rollor - 華文人物影音故事庫
                        </div>
                    </a>
                    <div class="date">
                        2017年12月01日
                    </div>
                </div>
            </div>
            <div class="like">
                                                            <i class="icon icon__like create_collect" primary_id="119" type="2"></i>
                                                </div>
        </div>
        <div class="blogBox__pic">
            <a href="https://qshare.rapaq.com/blog/show/119" itemprop="url mainEntityOfPage" gtm-category="banner"><img src="https://lh3.googleusercontent.com/j3X5VqR8xmU-A5ur_bZgSOua3vGesbYLQDoZimonqcldQOFEe3nEVv21sOpN0VsNhgub-7mgMlNbFWzLsj58GYI42eI=h170" alt="家有肉事 禮品手作空間 - GP X 莎曼莎 X 信雄" itemprop="image"></a>
        </div>
        <div class="blogBox__info">
            <div class="text">
                <div class="text__title">
                    <a href="https://qshare.rapaq.com/blog/show/119">家有肉事 禮品手作空間 - GP X 莎曼莎 X 信雄</a>
                </div>
                <div class="text__intro" itemprop="articleBody description">
                    <p>灑一點巧克力脆片
放一塊史瑞克耳朵
攪拌一下是
長了肉的幸福
黏一下
給他和她打氣完整版：http://rollor.cc/videos/succulentandcoffeesind●滾動力 rollor&nbsp;- 華文人物影</p>
                </div>
            </div>
            <div class="category">
                <span>生活知識</span>
            </div>
            <div class="freq">
                69次瀏覽                                ．1次分享            </div>
        </div>
    </div>
    
    <div itemprop="publisher" itemscope="" itemtype="http://schema.org/Organization">
        <meta itemprop="name" content="Rapaq 社群">
        <div itemprop="logo" itemscope="" itemtype="http://schema.org/ImageObject">
            <meta itemprop="url" content="https://storage.googleapis.com/rapaq_public/browser_icon/qshare.ico">
        </div>
    </div>
    <meta itemprop="datePublished dateModified" content="2017-12-01">
    <meta itemprop="name headline" content="家有肉事 禮品手作空間 - GP X 莎曼莎 X 信雄">
</div>                                                    <div class="li" itemscope="" itemtype="http://schema.org/Article" itemprop="url mainEntityOfPage">
    <div class="blogBox">
        <div class="blogBox__topic">
            <div class="author">
                <a href="https://qshare.rapaq.com/member/index/100001322">
                    <div class="author__pic">
                        <img src="https://storage.googleapis.com/rapaq_public/user_pic/headpic_100001322.jpg" alt="">
                    </div>
                </a>
                <div class="author__info" itemprop="author" itemscope="" itemtype="http://schema.org/Person">
                    <a href="https://qshare.rapaq.com/member/index/100001322">
                        <div class="name" itemprop="name">
                            破點 POINT
                        </div>
                    </a>
                    <div class="date">
                        2017年11月30日
                    </div>
                </div>
            </div>
            <div class="like">
                                                            <i class="icon icon__like create_collect" primary_id="118" type="2"></i>
                                                </div>
        </div>
        <div class="blogBox__pic">
            <a href="https://qshare.rapaq.com/blog/show/118" itemprop="url mainEntityOfPage" gtm-category="banner"><img src="https://lh3.googleusercontent.com/oF4WuPNWkcpPeW8uYM8HZ2vseXrSA5WWLJcFe7bj5G9U0ZStRp8qgaF8AeyaZhIORRBTUeS4A7fcLuU9Ec-2KOsw-CY=h170" alt="越台越有味兒 他用草根文化說硬漢故事" itemprop="image"></a>
        </div>
        <div class="blogBox__info">
            <div class="text">
                <div class="text__title">
                    <a href="https://qshare.rapaq.com/blog/show/118">越台越有味兒 他用草根文化說硬漢故事</a>
                </div>
                <div class="text__intro" itemprop="articleBody description">
                    <p>用色鮮艷、字體斗大、作品常呈現生猛華麗台灣庶民元素的小子，在台灣中生代設計師中可說是風格獨樹一幟，一般人認為俗豔、不登大雅之堂的電子花車、六合彩報，甚至第四台的蓋台廣告，他都可以巧妙運用在作品中。他認為美醜並無絕對的定義，庶民文化代表了某一</p>
                </div>
            </div>
            <div class="category">
                <span>設計趨勢</span>
            </div>
            <div class="freq">
                76次瀏覽                                ．2次分享            </div>
        </div>
    </div>
    
    <div itemprop="publisher" itemscope="" itemtype="http://schema.org/Organization">
        <meta itemprop="name" content="Rapaq 社群">
        <div itemprop="logo" itemscope="" itemtype="http://schema.org/ImageObject">
            <meta itemprop="url" content="https://storage.googleapis.com/rapaq_public/browser_icon/qshare.ico">
        </div>
    </div>
    <meta itemprop="datePublished dateModified" content="2017-11-30">
    <meta itemprop="name headline" content="越台越有味兒 他用草根文化說硬漢故事">
</div>                                                    <div class="li" itemscope="" itemtype="http://schema.org/Article" itemprop="url mainEntityOfPage">
    <div class="blogBox">
        <div class="blogBox__topic">
            <div class="author">
                <a href="https://qshare.rapaq.com/member/index/100000242">
                    <div class="author__pic">
                        <img src="https://storage.googleapis.com/rapaq_public/user_pic/headpic_100000242.png" alt="">
                    </div>
                </a>
                <div class="author__info" itemprop="author" itemscope="" itemtype="http://schema.org/Person">
                    <a href="https://qshare.rapaq.com/member/index/100000242">
                        <div class="name" itemprop="name">
                            White do 白做研究所
                        </div>
                    </a>
                    <div class="date">
                        2017年11月28日
                    </div>
                </div>
            </div>
            <div class="like">
                                                            <i class="icon icon__like create_collect" primary_id="117" type="2"></i>
                                                </div>
        </div>
        <div class="blogBox__pic">
            <a href="https://qshare.rapaq.com/blog/show/117" itemprop="url mainEntityOfPage" gtm-category="banner"><img src="https://lh3.googleusercontent.com/2WESnEiOmyVwPzAr2Fw1K2u9_iHokNzhyGbF422E-TL3crnORiSm-yoLsh6UbQlhxHgglgTPvEBHy-pe70aQnpAL7Q=h170" alt="感官淨化 日月星街變成圓" itemprop="image"></a>
        </div>
        <div class="blogBox__info">
            <div class="text">
                <div class="text__title">
                    <a href="https://qshare.rapaq.com/blog/show/117">感官淨化 日月星街變成圓</a>
                </div>
                <div class="text__intro" itemprop="articleBody description">
                    <p>人氣插畫家 Noritake 親臨香港白做研究所為插畫展「變成圓」主持開幕此際資訊爆炸，甚麼都量化。多Like多Share多曝光多爭議便是皇道，萬象紛陳，吵鬧不絕。來自東京的插畫家Noritake（のりたけ）卻是異數，他筆下只有黑白，線條圓</p>
                </div>
            </div>
            <div class="category">
                <span>設計趨勢</span>
            </div>
            <div class="freq">
                38次瀏覽                                            </div>
        </div>
    </div>
    
    <div itemprop="publisher" itemscope="" itemtype="http://schema.org/Organization">
        <meta itemprop="name" content="Rapaq 社群">
        <div itemprop="logo" itemscope="" itemtype="http://schema.org/ImageObject">
            <meta itemprop="url" content="https://storage.googleapis.com/rapaq_public/browser_icon/qshare.ico">
        </div>
    </div>
    <meta itemprop="datePublished dateModified" content="2017-11-28">
    <meta itemprop="name headline" content="感官淨化 日月星街變成圓">
</div>                                                    <div class="li" itemscope="" itemtype="http://schema.org/Article" itemprop="url mainEntityOfPage">
    <div class="blogBox">
        <div class="blogBox__topic">
            <div class="author">
                <a href="https://qshare.rapaq.com/member/index/100000099">
                    <div class="author__pic">
                        <img src="https://storage.googleapis.com/rapaq_public/user_pic/headpic_100000099.jpg" alt="">
                    </div>
                </a>
                <div class="author__info" itemprop="author" itemscope="" itemtype="http://schema.org/Person">
                    <a href="https://qshare.rapaq.com/member/index/100000099">
                        <div class="name" itemprop="name">
                            Q 小編
                        </div>
                    </a>
                    <div class="date">
                        2017年11月27日
                    </div>
                </div>
            </div>
            <div class="like">
                                                            <i class="icon icon__like create_collect" primary_id="116" type="2"></i>
                                                </div>
        </div>
        <div class="blogBox__pic">
            <a href="https://qshare.rapaq.com/blog/show/116" itemprop="url mainEntityOfPage" gtm-category="banner"><img src="https://lh3.googleusercontent.com/4DgRB-p8YOvLTY29443ra5sHWy4Qcp5k0_ic0tK6nyIXQmFzjrpiZrUsx7v905J7ZT9lme97yFHlE8d60CmppH_92Q=h170" alt="昏昏欲睡，吃吃下午茶補充糖分囉！" itemprop="image"></a>
        </div>
        <div class="blogBox__info">
            <div class="text">
                <div class="text__title">
                    <a href="https://qshare.rapaq.com/blog/show/116">昏昏欲睡，吃吃下午茶補充糖分囉！</a>
                </div>
                <div class="text__intro" itemprop="articleBody description">
                    <p>下午茶的習慣越來越成為大家每天的例行公事，它的存在，也讓每天苦悶的上班族多了一些可以期待的小確幸。但是下午茶的文化是從何而來呢？雞排加珍珠奶茶基本上是很多上班族下午茶的王牌搭配說到下午茶，就不得不提最傳統的「英式下午茶」。在英國維多利亞時代</p>
                </div>
            </div>
            <div class="category">
                <span>生活知識</span>
            </div>
            <div class="freq">
                36次瀏覽                                ．4次分享            </div>
        </div>
    </div>
    
    <div itemprop="publisher" itemscope="" itemtype="http://schema.org/Organization">
        <meta itemprop="name" content="Rapaq 社群">
        <div itemprop="logo" itemscope="" itemtype="http://schema.org/ImageObject">
            <meta itemprop="url" content="https://storage.googleapis.com/rapaq_public/browser_icon/qshare.ico">
        </div>
    </div>
    <meta itemprop="datePublished dateModified" content="2017-11-27">
    <meta itemprop="name headline" content="昏昏欲睡，吃吃下午茶補充糖分囉！">
</div>                                            </div>
                </div>
                <div class="idxSection__action">
                    <a href="https://qshare.rapaq.com/blog/index" class="btn btn--idx btn--main btn--arrow">更多文章</a>
                </div>
            </div>
        </div>
    </div>
    <!-- blog end -->
    <!-- activity start -->
    <div class="idx__section bg--gray">
        <div class="idx__wrap" id="mainpage_event">
            <div class="idxSection">
                <div class="idxSection__title">活動新鮮事</div>
                <div class="idxSection__main idxSection__main--action">
                    <div class="idx__activity">
                        <ul class="idxList idxList--activity clearfix">
                                                                                    <li class="li main" itemscope="" itemtype="http://schema.org/Event">
                                    <div class="activityBox activityBox--main">
                                    <a href="https://qshare.rapaq.com/event/show/81" class="activityBox__image">
    <img src="https://lh3.googleusercontent.com/OYzolK_w2aQ4yNm04L5Aloc1RFKVbBDka8dflZ6BgPHaJRVazN5_cyKF0HPyWY-Kf1GCfEILYClIAba5Hmoej7ALDQ=s340" alt="「設計X生活」 馬賽Kyo 插畫養成之路：憑什麼要人家買你 12/6(三) 講座免費報名" itemprop="image">
</a>
<div class="activityBox__text">
    <div class="top clearfix">
        <div class="date">
            <span class="dateBox dateBox--square">12月06日
        </span></div>
        <div class="txt">
            <a href="https://qshare.rapaq.com/event/show/81" class="txt__title">
                「設計X生活」 馬賽Kyo 插畫養成之路：憑什麼要人家買你 12/6(三) 講座免費報名
            </a>
            <div class="txt__intro">
                <span>2017年12月06日 - 2017年12月06日</span>
                <span>藍色藝文空間</span>
            </div>
        </div>
    </div>
    <div class="middle" itemprop="description">
        給參加者的小提醒：因之前有很多答應主辦單位要來的朋友，都在沒有通知的情況下無故出席，除了我們的心很冷外（嘆），也造成很多有興趣的朋友沒有辦法報名，非常可惜。為讓出更多機會給確定可參與的朋友，未來如沒有
    </div>
</div>
<div class="activityBox__bottom">
            <div class="follow">
            <ul class="follow__image clearfix">
                            <li><img src="https://lh3.googleusercontent.com/5L5s1WePM0oWif91lA-zezCZCOTu80ykAoH7RQyc4h337InZ73moleaG6Bo4b_WJbEFgkav_ZA18efvgCYhXHHUTqw=s150" alt=""></li>
                        </ul>
            <span class="follow__amount"><span data-id="cnt">1</span>人收藏</span>
        </div>
        <a href="https://qshare.rapaq.com/event/index?event_type=3" itemprop="url"><span class="category">講座課程</span></a>
</div>
<div class="activityBox__collection">
                        <i class="icon icon__like create_collect" primary_id="81" type="3"></i>
            </div>
<meta itemprop="name" content="「設計X生活」 馬賽Kyo 插畫養成之路：憑什麼要人家買你 12/6(三) 講座免費報名">
<meta itemprop="startDate" content="2017-12-06 19:30:00">
<meta itemprop="endDate" content="2017-12-06 21:00:00">
<div itemprop="location" itemscope="" itemtype="http://schema.org/Place" style="display: none;">
    <span itemprop="name">藍色藝文空間</span>
    <span itemprop="address">藍色藝文空間</span>
</div>                                    </div>
                                </li>
                                                                                                            <li class="li sub" itemscope="" itemtype="http://schema.org/Event">
                                <div class="activityBox activityBox--sub">
                                <a href="https://qshare.rapaq.com/event/show/98" class="activityBox__image">
    <img src="https://lh3.googleusercontent.com/qVvjTieZeLO3fyJklGIQCBBrEFXRVt3gDmDJzznEt-irJeaL-y3nv0N2_AfVTi7PyoYi4Zy183LurXdLUpl4wZvw9g=s340" alt="柳依蘭個展《凝．關》" itemprop="image">
</a>
<div class="activityBox__text">
    <div class="top clearfix">
        <div class="date">
            <span class="dateBox dateBox--square">11月24日
        </span></div>
        <div class="txt">
            <a href="https://qshare.rapaq.com/event/show/98" class="txt__title">
                柳依蘭個展《凝．關》
            </a>
            <div class="txt__intro">
                <span>2017年11月24日 - 2017年12月22日</span>
                <span>新苑藝術 Galerie Grand Siècle, Taipei</span>
            </div>
        </div>
    </div>
    <div class="middle" itemprop="description">
        藝術家柳依蘭用自我生命經驗走出藝術創作的路，對生命有著深摯的關注，透過藝術形式側寫生而為人一生中的愛恨嗔癡，新苑藝術將於2017年11月24日至12月22日推出新苑藝術家柳依蘭個展「凝．關」，開幕活動
    </div>
</div>
<div class="activityBox__bottom">
            <div class="follow">
            <ul class="follow__image clearfix">
                            <li><img src="https://storage.googleapis.com/rapaq_public/user_pic/headpic_100000047.png" alt=""></li>
                        </ul>
            <span class="follow__amount"><span data-id="cnt">1</span>人收藏</span>
        </div>
        <a href="https://qshare.rapaq.com/event/index?event_type=4" itemprop="url"><span class="category">展覽活動</span></a>
</div>
<div class="activityBox__collection">
                        <i class="icon icon__like create_collect" primary_id="98" type="3"></i>
            </div>
<meta itemprop="name" content="柳依蘭個展《凝．關》">
<meta itemprop="startDate" content="2017-11-24 13:00:00">
<meta itemprop="endDate" content="2017-12-22 18:00:00">
<div itemprop="location" itemscope="" itemtype="http://schema.org/Place" style="display: none;">
    <span itemprop="name">新苑藝術 Galerie Grand Siècle, Taipei</span>
    <span itemprop="address">新苑藝術 Galerie Grand Siècle, Taipei</span>
</div>                                </div>
                            </li>
                                                                                                            <li class="li sub" itemscope="" itemtype="http://schema.org/Event">
                                <div class="activityBox activityBox--sub">
                                <a href="https://qshare.rapaq.com/event/show/85" class="activityBox__image">
    <img src="https://lh3.googleusercontent.com/ZTQVStP7rDvv_5bNIJ9SE1GZ-QBgNq8t8G8K_18QwQUR7MlSwFBK0igYGsfWcnPcTICsmAkXJT5QHKYzjPQo7o0DJg=s340" alt="Noritake 變成圓（まるくなる）香港 at 白做研究所" itemprop="image">
</a>
<div class="activityBox__text">
    <div class="top clearfix">
        <div class="date">
            <span class="dateBox dateBox--square">12月15日
        </span></div>
        <div class="txt">
            <a href="https://qshare.rapaq.com/event/show/85" class="txt__title">
                Noritake 變成圓（まるくなる）香港 at 白做研究所
            </a>
            <div class="txt__intro">
                <span>2017年12月15日 - 2018年01月07日</span>
                <span>香港灣仔日街</span>
            </div>
        </div>
    </div>
    <div class="middle" itemprop="description">
        人氣插畫家 Noritake 親臨香港白做研究所為插畫展「變成圓」主持開幕Noritake自08年開始於日本各地展開個人插畫展之後，其畫作已經靜靜地滲透到不同層面。今個12月，台南小店「白做研究所」將
    </div>
</div>
<div class="activityBox__bottom">
        <a href="https://qshare.rapaq.com/event/index?event_type=4" itemprop="url"><span class="category">展覽活動</span></a>
</div>
<div class="activityBox__collection">
                        <i class="icon icon__like create_collect" primary_id="85" type="3"></i>
            </div>
<meta itemprop="name" content="Noritake 變成圓（まるくなる）香港 at 白做研究所">
<meta itemprop="startDate" content="2017-12-15 11:00:00">
<meta itemprop="endDate" content="2018-01-07 20:00:00">
<div itemprop="location" itemscope="" itemtype="http://schema.org/Place" style="display: none;">
    <span itemprop="name">香港灣仔日街</span>
    <span itemprop="address">香港灣仔日街</span>
</div>                                </div>
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
    <!-- activity end -->
    <!-- works start -->
    <div class="idx__section bg--white" data-id="idx_works">
        <div class="idx__wrap" id="mainpage_works">
            <div class="idxSection">
                <div class="idxSection__title">
                    <ul class="idx__tab clearfix" data-js-tabs="true">
                        <li data-id="js-tab"><span data-tab-href="01">設群推薦</span></li>
                        <li data-id="js-tab" class="active"><span data-tab-href="02" class="on">最新作品</span></li>
                        <li data-id="js-tab"><span data-tab-href="03">熱門作品</span></li>
                    </ul>
                </div>
                <div class="idxSection__main idxSection__main--tab">
                    <div class="tab_panel" data-id="js-panel" data-tab-id="01" style="display: none;">
                        <div class="promo clearfix">
                            <div class="promo__left">
                                                                                                    <a href="https://qshare.rapaq.com/works/show/118" class="promo__item" itemscope="" itemtype="http://schema.org/Article">
    <div class="image"><img src="https://lh3.googleusercontent.com/lC8saqIkK1pv0m2fKeRPVpXy_3zdOyOwSJpH1K_ScjMVp5v7nld2KsSx1gC_pDydt-aOU1KwH1UA0u4vqVl3cpxA=s560" alt="銀河雲鳥" itemprop="image"></div>
    <div class="info">
        <div class="info__title" itemprop="name headline">銀河雲鳥</div>
        <div class="info__bottom">
            <div class="author">
                                                        <div class="author__pic">
                        <img src="https://storage.googleapis.com/rapaq_public/user_pic/headpic_100000266.jpg " alt="">
                    </div>
                                        <div class="author__info" itemprop="author" itemscope="" itemtype="http://schema.org/Person">
                                                    <div class="name" itemprop="name">
                                57 Art &amp; Illustration Studio
                            </div>
                                                    <div class="date">2017年10月25日</div>
                    </div>
                                <meta itemprop="datePublished dateModified" content="2017-10-25">
            </div>
            <div class="like">
                                                <i class="icon icon__like create_collect" primary_id="118" type="1"></i>
                                        </div>
        </div>
    </div>
    
    <div itemprop="publisher" itemscope="" itemtype="http://schema.org/Organization">
        <meta itemprop="name" content="Rapaq 社群">
        <div itemprop="logo" itemscope="" itemtype="http://schema.org/ImageObject">
            <meta itemprop="url" content="https://storage.googleapis.com/rapaq_public/browser_icon/qshare.ico">
        </div>
    </div>
    <meta itemprop="url mainEntityOfPage" content="https://qshare.rapaq.com/works/show/118">
</a>                                                                                                                                    <a href="https://qshare.rapaq.com/works/show/108" class="promo__item" itemscope="" itemtype="http://schema.org/Article">
    <div class="image"><img src="https://lh3.googleusercontent.com/yQf89HfWzurMhdn-sKFnWVd6iivpCoZN6mAOHYMkvvR8i5g-lDBMp3be4usCyhLELn_YZdt2p45XHCbNfndq7ygY9NM=s560" alt="HAVE FUN!" itemprop="image"></div>
    <div class="info">
        <div class="info__title" itemprop="name headline">HAVE FUN!</div>
        <div class="info__bottom">
            <div class="author">
                                                        <div class="author__pic">
                        <img src="https://storage.googleapis.com/rapaq_public/user_pic/headpic_100000267.jpg " alt="">
                    </div>
                                        <div class="author__info" itemprop="author" itemscope="" itemtype="http://schema.org/Person">
                                                    <div class="name" itemprop="name">
                                披薩先生
                            </div>
                                                    <div class="date">2017年10月23日</div>
                    </div>
                                <meta itemprop="datePublished dateModified" content="2017-10-23">
            </div>
            <div class="like">
                                                <i class="icon icon__like create_collect" primary_id="108" type="1"></i>
                                        </div>
        </div>
    </div>
    
    <div itemprop="publisher" itemscope="" itemtype="http://schema.org/Organization">
        <meta itemprop="name" content="Rapaq 社群">
        <div itemprop="logo" itemscope="" itemtype="http://schema.org/ImageObject">
            <meta itemprop="url" content="https://storage.googleapis.com/rapaq_public/browser_icon/qshare.ico">
        </div>
    </div>
    <meta itemprop="url mainEntityOfPage" content="https://qshare.rapaq.com/works/show/108">
</a>                                                                                                                                    <a href="https://qshare.rapaq.com/works/show/62" class="promo__item" itemscope="" itemtype="http://schema.org/Article">
    <div class="image"><img src="https://lh3.googleusercontent.com/ZwWLCKnITjfZUK_kc26ts6BChb1Juet52Pidw_WyrEej-X9cf7mIe5thaQl2XU8tcxgZiLZH6ivEaDFCYXOxn9JpJQ=s560" alt="春聯設計spring couplet | Illustration" itemprop="image"></div>
    <div class="info">
        <div class="info__title" itemprop="name headline">春聯設計spring couplet | Illustration</div>
        <div class="info__bottom">
            <div class="author">
                                                        <div class="author__pic">
                        <img src="https://storage.googleapis.com/rapaq_public/user_pic/headpic_100000122.jpg " alt="">
                    </div>
                                        <div class="author__info" itemprop="author" itemscope="" itemtype="http://schema.org/Person">
                                                    <div class="name" itemprop="name">
                                Damee Wu
                            </div>
                                                    <div class="date">2017年09月07日</div>
                    </div>
                                <meta itemprop="datePublished dateModified" content="2017-09-07">
            </div>
            <div class="like">
                                                <i class="icon icon__like create_collect" primary_id="62" type="1"></i>
                                        </div>
        </div>
    </div>
    
    <div itemprop="publisher" itemscope="" itemtype="http://schema.org/Organization">
        <meta itemprop="name" content="Rapaq 社群">
        <div itemprop="logo" itemscope="" itemtype="http://schema.org/ImageObject">
            <meta itemprop="url" content="https://storage.googleapis.com/rapaq_public/browser_icon/qshare.ico">
        </div>
    </div>
    <meta itemprop="url mainEntityOfPage" content="https://qshare.rapaq.com/works/show/62">
</a>                                                                                                                                                                                                                            </div>
                            <div class="promo__right">
                                                                                                                                                                                                                                                                                                    <a href="https://qshare.rapaq.com/works/show/131" class="promo__item" itemscope="" itemtype="http://schema.org/Article">
    <div class="image"><img src="https://lh3.googleusercontent.com/0M_v_xF2TqLn3M5ZRm0wX4d3Lt1qnpCtO7ZhpqlaQVSwWxVlGE5LQ50z7ExYZFja8ZcBx8q4nksHL7pxEE3Yr4b5=s560" alt="用遊樂場來比喻" itemprop="image"></div>
    <div class="info">
        <div class="info__title" itemprop="name headline">用遊樂場來比喻</div>
        <div class="info__bottom">
            <div class="author">
                                                        <div class="author__pic">
                        <img src="https://storage.googleapis.com/rapaq_public/user_pic/headpic_100000121.jpg " alt="">
                    </div>
                                        <div class="author__info" itemprop="author" itemscope="" itemtype="http://schema.org/Person">
                                                    <div class="name" itemprop="name">
                                椪小雨
                            </div>
                                                    <div class="date">2017年10月29日</div>
                    </div>
                                <meta itemprop="datePublished dateModified" content="2017-10-29">
            </div>
            <div class="like">
                                                <i class="icon icon__like create_collect" primary_id="131" type="1"></i>
                                        </div>
        </div>
    </div>
    
    <div itemprop="publisher" itemscope="" itemtype="http://schema.org/Organization">
        <meta itemprop="name" content="Rapaq 社群">
        <div itemprop="logo" itemscope="" itemtype="http://schema.org/ImageObject">
            <meta itemprop="url" content="https://storage.googleapis.com/rapaq_public/browser_icon/qshare.ico">
        </div>
    </div>
    <meta itemprop="url mainEntityOfPage" content="https://qshare.rapaq.com/works/show/131">
</a>                                                                                                                                    <a href="https://qshare.rapaq.com/works/show/100" class="promo__item" itemscope="" itemtype="http://schema.org/Article">
    <div class="image"><img src="https://lh3.googleusercontent.com/tIeArObJfsCaFcMUSrSORI8bHxLa1aCx1Whesq5ZTtBQuk7UBU-OpWPWKWJ3T-Ow2NsMDg0BzYJLwwzgkVOBHSnl=s560" alt="買好物，過好年" itemprop="image"></div>
    <div class="info">
        <div class="info__title" itemprop="name headline">買好物，過好年</div>
        <div class="info__bottom">
            <div class="author">
                                                        <div class="author__pic">
                        <img src="https://storage.googleapis.com/rapaq_public/user_pic/headpic_100000047.png " alt="">
                    </div>
                                        <div class="author__info" itemprop="author" itemscope="" itemtype="http://schema.org/Person">
                                                    <div class="name" itemprop="name">
                                Xunyu
                            </div>
                                                    <div class="date">2017年10月06日</div>
                    </div>
                                <meta itemprop="datePublished dateModified" content="2017-10-06">
            </div>
            <div class="like">
                                                <i class="icon icon__like create_collect" primary_id="100" type="1"></i>
                                        </div>
        </div>
    </div>
    
    <div itemprop="publisher" itemscope="" itemtype="http://schema.org/Organization">
        <meta itemprop="name" content="Rapaq 社群">
        <div itemprop="logo" itemscope="" itemtype="http://schema.org/ImageObject">
            <meta itemprop="url" content="https://storage.googleapis.com/rapaq_public/browser_icon/qshare.ico">
        </div>
    </div>
    <meta itemprop="url mainEntityOfPage" content="https://qshare.rapaq.com/works/show/100">
</a>                                                                                            </div>
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
</a>                                                                                                                                    <a href="https://qshare.rapaq.com/works/show/144" class="promo__item" itemscope="" itemtype="http://schema.org/Article">
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
</a>                                                                                                                                    <a href="https://qshare.rapaq.com/works/show/143" class="promo__item" itemscope="" itemtype="http://schema.org/Article">
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
</a>                                                                                                                                                                                                                            </div>
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
</a>                                                                                                                                    <a href="https://qshare.rapaq.com/works/show/141" class="promo__item" itemscope="" itemtype="http://schema.org/Article">
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
</a>                                                                                            </div>
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
</a>                                                                                                                                    <a href="https://qshare.rapaq.com/works/show/3" class="promo__item" itemscope="" itemtype="http://schema.org/Article">
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
</a>                                                                                                                                    <a href="https://qshare.rapaq.com/works/show/79" class="promo__item" itemscope="" itemtype="http://schema.org/Article">
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
</a>                                                                                                                                                                                                                            </div>
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
</a>                                                                                                                                    <a href="https://qshare.rapaq.com/works/show/85" class="promo__item" itemscope="" itemtype="http://schema.org/Article">
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
</a>                                                                                            </div>
                        </div>
                        <div class="tab__action">
                            <a href="https://qshare.rapaq.com/works/index" class="btn btn--idx btn--main btn--arrow">更多作品</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- works end -->
    <!-- designer start -->
        <div class="idx__section bg--gray">
        <div class="idx__wrap" id="mainpage_designer">
            <div class="idxSection">
                <div class="idxSection__title">本週設計師</div>
                <div class="idxSection__main idxSection__main--normal">
                    <div class="idxList idxList--designer swiper-container--designer clearfix swiper-container-horizontal" data-swiper="designer">
                        <div class="swiper-wrapper clearfix" style="transform: translate3d(-1185px, 0px, 0px); transition-duration: 0ms;"><div class="li swiper-slide-duplicate swiper-slide-duplicate-active" data-swiper-slide-index="0" style="margin-right: 20px;">
    <div class="designerBox">
            <ul class="designerBox__pic  clearfix">
                            <li>
                    <a href="https://qshare.rapaq.com/works/show/145" style="background-image:url('https://lh3.googleusercontent.com/HjN5vjWA5vHlZUXwa6PpzCIp2S3KzNn5bX2ocBu9rzMaa5g6SsP2sBkIYM8gpjNLjgzHljCMBMS3v57WXRmxqbb-=s150')" onclick=" ga('send', 'event', 'index','designer', 'works', 145); "></a>
                </li>
                            <li>
                    <a href="https://qshare.rapaq.com/works/show/144" style="background-image:url('https://lh3.googleusercontent.com/2rJaJDYjmfJ1RHCA9BP_An8X9doyCHO_c0AKpFVMxYXwnLb-AiU6v5yg4uipj8Rp8jGqf2_gp6hL6xy4mmLDbS45jQ=s150')" onclick=" ga('send', 'event', 'index','designer', 'works', 144); "></a>
                </li>
                            <li>
                    <a href="https://qshare.rapaq.com/works/show/134" style="background-image:url('https://lh3.googleusercontent.com/1LQS_pICnzPgwDoaK9p5xEXMegi2v4YjiIDFfheD2_5IOHBFk6rvduFvK4KwKoxqIrudRfV3OU55NGj-p4VcozP5FA=s150')" onclick=" ga('send', 'event', 'index','designer', 'works', 134); "></a>
                </li>
                            <li>
                    <a href="https://qshare.rapaq.com/works/show/133" style="background-image:url('https://lh3.googleusercontent.com/5Xcs9SnxHz-rXEcWRiKPvvm9EvXrLVBIv7aH4IiGUrdVgyhr_yEiNTfVMsv3ytsVZpxx1vxHu8NChVIwl_A4h1FzAGY=s150')" onclick=" ga('send', 'event', 'index','designer', 'works', 133); "></a>
                </li>
                    </ul>
            <div class="designerBox__info">
            <a href="https://qshare.rapaq.com/member/index/100000121" class="face">
                <img src="https://storage.googleapis.com/rapaq_public/user_pic/headpic_100000121.jpg" alt="">
            </a>
            <div class="name">
                <a href="https://qshare.rapaq.com/member/index/100000121">
                    椪小雨
                </a>
            </div>
            <div class="status">
                            </div>
            <div class="action">
                                                <btn type="button" class="btn btn--idx btn--follow create_follow" followed_userid="100000121">追蹤</btn>
                                        </div>
            <div class="follower"><span data-id="cnt">4</span> 人追蹤</div>
        </div>
    </div>
</div><div class="li swiper-slide-duplicate swiper-slide-duplicate-next" data-swiper-slide-index="1" style="margin-right: 20px;">
    <div class="designerBox">
            <ul class="designerBox__pic  clearfix">
                            <li>
                    <a href="https://qshare.rapaq.com/works/show/119" style="background-image:url('https://lh3.googleusercontent.com/WP2AwhgF2fNUb3eyh_AN11YT6Hh59gYn2kv7RegwRVMmEpq1KdOGM3N2d6HOokWuvypApjiLt4YeSJ5qgB4h0VOK=s150')" onclick=" ga('send', 'event', 'index','designer', 'works', 119); "></a>
                </li>
                            <li>
                    <a href="https://qshare.rapaq.com/works/show/118" style="background-image:url('https://lh3.googleusercontent.com/lC8saqIkK1pv0m2fKeRPVpXy_3zdOyOwSJpH1K_ScjMVp5v7nld2KsSx1gC_pDydt-aOU1KwH1UA0u4vqVl3cpxA=s150')" onclick=" ga('send', 'event', 'index','designer', 'works', 118); "></a>
                </li>
                            <li>
                    <a href="https://qshare.rapaq.com/works/show/117" style="background-image:url('https://lh3.googleusercontent.com/kuX733lwJm-v9GtuaYd7dorwVOQnhfbb_-pnmbDyrGkP3mqePn5rz-WbM8hjlxlYMSxJOJzk8DLo2E3qIbBoy4wEgcc=s150')" onclick=" ga('send', 'event', 'index','designer', 'works', 117); "></a>
                </li>
                            <li>
                    <a href="https://qshare.rapaq.com/works/show/116" style="background-image:url('https://lh3.googleusercontent.com/44FMY8oz_IoDYlHegMiR_AXup2v8DwWdHQHDSC5dUGWzNUa81G4NGzw2uH7kWLaCFWDYx-V4ybbndSuL3K5uFy4_Pw=s150')" onclick=" ga('send', 'event', 'index','designer', 'works', 116); "></a>
                </li>
                    </ul>
            <div class="designerBox__info">
            <a href="https://qshare.rapaq.com/member/index/100000266" class="face">
                <img src="https://storage.googleapis.com/rapaq_public/user_pic/headpic_100000266.jpg" alt="">
            </a>
            <div class="name">
                <a href="https://qshare.rapaq.com/member/index/100000266">
                    57 Art &amp; Illustration Studio
                </a>
            </div>
            <div class="status">
                            </div>
            <div class="action">
                                                <btn type="button" class="btn btn--idx btn--follow create_follow" followed_userid="100000266">追蹤</btn>
                                        </div>
            <div class="follower"><span data-id="cnt">7</span> 人追蹤</div>
        </div>
    </div>
</div><div class="li swiper-slide-duplicate swiper-slide-prev" data-swiper-slide-index="2" style="margin-right: 20px;">
    <div class="designerBox">
            <ul class="designerBox__pic  clearfix">
                            <li>
                    <a href="https://qshare.rapaq.com/works/show/113" style="background-image:url('https://lh3.googleusercontent.com/baCfdSE8r1LKCCayN9C7BCvUCASixiNJ82boAf16V-7qIW-ZAhGsdxYsWSF5Y84te12OqRYRe4l0BLKG_Fx3wJr7=s150')" onclick=" ga('send', 'event', 'index','designer', 'works', 113); "></a>
                </li>
                            <li>
                    <a href="https://qshare.rapaq.com/works/show/112" style="background-image:url('https://lh3.googleusercontent.com/hWxyBuR5q8lbka9dAAWdxdoc_ttauQJq4BV6ths3CH_ydPVOmWH0ZQ1HX0icSmIYu4Lt6LvNQ5sn_5glkmqYRslEfTk=s150')" onclick=" ga('send', 'event', 'index','designer', 'works', 112); "></a>
                </li>
                            <li>
                    <a href="https://qshare.rapaq.com/works/show/111" style="background-image:url('https://lh3.googleusercontent.com/r6dl426hDmWCj3X7Pw62u1seVjydLXGFiih35R44DLA4BMoeKukwV6YcyrFmAnpYuoiJxtF1g7jSsvcwS77w08y8wQ=s150')" onclick=" ga('send', 'event', 'index','designer', 'works', 111); "></a>
                </li>
                            <li>
                    <a href="https://qshare.rapaq.com/works/show/110" style="background-image:url('https://lh3.googleusercontent.com/1sk7oERzgq63R3uEBxeYOLBzOIZ8r3q9amfLviGcFuNehjOtC-0jgKcYpTn4Ld0sd7KVrMOZOjWsHuTOL7atcJBG=s150')" onclick=" ga('send', 'event', 'index','designer', 'works', 110); "></a>
                </li>
                    </ul>
            <div class="designerBox__info">
            <a href="https://qshare.rapaq.com/member/index/100000267" class="face">
                <img src="https://storage.googleapis.com/rapaq_public/user_pic/headpic_100000267.jpg" alt="">
            </a>
            <div class="name">
                <a href="https://qshare.rapaq.com/member/index/100000267">
                    披薩先生
                </a>
            </div>
            <div class="status">
                                    圖案設計
                    、                                    插畫
                    、                                    角色設計
                                                </div>
            <div class="action">
                                                <btn type="button" class="btn btn--idx btn--follow create_follow" followed_userid="100000267">追蹤</btn>
                                        </div>
            <div class="follower"><span data-id="cnt">11</span> 人追蹤</div>
        </div>
    </div>
</div>
                                                            <div class="li swiper-slide-active" data-swiper-slide-index="0" style="margin-right: 20px;">
    <div class="designerBox">
            <ul class="designerBox__pic  clearfix">
                            <li>
                    <a href="https://qshare.rapaq.com/works/show/145" style="background-image:url('https://lh3.googleusercontent.com/HjN5vjWA5vHlZUXwa6PpzCIp2S3KzNn5bX2ocBu9rzMaa5g6SsP2sBkIYM8gpjNLjgzHljCMBMS3v57WXRmxqbb-=s150')" onclick=" ga('send', 'event', 'index','designer', 'works', 145); "></a>
                </li>
                            <li>
                    <a href="https://qshare.rapaq.com/works/show/144" style="background-image:url('https://lh3.googleusercontent.com/2rJaJDYjmfJ1RHCA9BP_An8X9doyCHO_c0AKpFVMxYXwnLb-AiU6v5yg4uipj8Rp8jGqf2_gp6hL6xy4mmLDbS45jQ=s150')" onclick=" ga('send', 'event', 'index','designer', 'works', 144); "></a>
                </li>
                            <li>
                    <a href="https://qshare.rapaq.com/works/show/134" style="background-image:url('https://lh3.googleusercontent.com/1LQS_pICnzPgwDoaK9p5xEXMegi2v4YjiIDFfheD2_5IOHBFk6rvduFvK4KwKoxqIrudRfV3OU55NGj-p4VcozP5FA=s150')" onclick=" ga('send', 'event', 'index','designer', 'works', 134); "></a>
                </li>
                            <li>
                    <a href="https://qshare.rapaq.com/works/show/133" style="background-image:url('https://lh3.googleusercontent.com/5Xcs9SnxHz-rXEcWRiKPvvm9EvXrLVBIv7aH4IiGUrdVgyhr_yEiNTfVMsv3ytsVZpxx1vxHu8NChVIwl_A4h1FzAGY=s150')" onclick=" ga('send', 'event', 'index','designer', 'works', 133); "></a>
                </li>
                    </ul>
            <div class="designerBox__info">
            <a href="https://qshare.rapaq.com/member/index/100000121" class="face">
                <img src="https://storage.googleapis.com/rapaq_public/user_pic/headpic_100000121.jpg" alt="">
            </a>
            <div class="name">
                <a href="https://qshare.rapaq.com/member/index/100000121">
                    椪小雨
                </a>
            </div>
            <div class="status">
                            </div>
            <div class="action">
                                                <btn type="button" class="btn btn--idx btn--follow create_follow" followed_userid="100000121">追蹤</btn>
                                        </div>
            <div class="follower"><span data-id="cnt">4</span> 人追蹤</div>
        </div>
    </div>
</div>                                                            <div class="li swiper-slide-next" data-swiper-slide-index="1" style="margin-right: 20px;">
    <div class="designerBox">
            <ul class="designerBox__pic  clearfix">
                            <li>
                    <a href="https://qshare.rapaq.com/works/show/119" style="background-image:url('https://lh3.googleusercontent.com/WP2AwhgF2fNUb3eyh_AN11YT6Hh59gYn2kv7RegwRVMmEpq1KdOGM3N2d6HOokWuvypApjiLt4YeSJ5qgB4h0VOK=s150')" onclick=" ga('send', 'event', 'index','designer', 'works', 119); "></a>
                </li>
                            <li>
                    <a href="https://qshare.rapaq.com/works/show/118" style="background-image:url('https://lh3.googleusercontent.com/lC8saqIkK1pv0m2fKeRPVpXy_3zdOyOwSJpH1K_ScjMVp5v7nld2KsSx1gC_pDydt-aOU1KwH1UA0u4vqVl3cpxA=s150')" onclick=" ga('send', 'event', 'index','designer', 'works', 118); "></a>
                </li>
                            <li>
                    <a href="https://qshare.rapaq.com/works/show/117" style="background-image:url('https://lh3.googleusercontent.com/kuX733lwJm-v9GtuaYd7dorwVOQnhfbb_-pnmbDyrGkP3mqePn5rz-WbM8hjlxlYMSxJOJzk8DLo2E3qIbBoy4wEgcc=s150')" onclick=" ga('send', 'event', 'index','designer', 'works', 117); "></a>
                </li>
                            <li>
                    <a href="https://qshare.rapaq.com/works/show/116" style="background-image:url('https://lh3.googleusercontent.com/44FMY8oz_IoDYlHegMiR_AXup2v8DwWdHQHDSC5dUGWzNUa81G4NGzw2uH7kWLaCFWDYx-V4ybbndSuL3K5uFy4_Pw=s150')" onclick=" ga('send', 'event', 'index','designer', 'works', 116); "></a>
                </li>
                    </ul>
            <div class="designerBox__info">
            <a href="https://qshare.rapaq.com/member/index/100000266" class="face">
                <img src="https://storage.googleapis.com/rapaq_public/user_pic/headpic_100000266.jpg" alt="">
            </a>
            <div class="name">
                <a href="https://qshare.rapaq.com/member/index/100000266">
                    57 Art &amp; Illustration Studio
                </a>
            </div>
            <div class="status">
                            </div>
            <div class="action">
                                                <btn type="button" class="btn btn--idx btn--follow create_follow" followed_userid="100000266">追蹤</btn>
                                        </div>
            <div class="follower"><span data-id="cnt">7</span> 人追蹤</div>
        </div>
    </div>
</div>                                                            <div class="li swiper-slide-duplicate-prev" data-swiper-slide-index="2" style="margin-right: 20px;">
    <div class="designerBox">
            <ul class="designerBox__pic  clearfix">
                            <li>
                    <a href="https://qshare.rapaq.com/works/show/113" style="background-image:url('https://lh3.googleusercontent.com/baCfdSE8r1LKCCayN9C7BCvUCASixiNJ82boAf16V-7qIW-ZAhGsdxYsWSF5Y84te12OqRYRe4l0BLKG_Fx3wJr7=s150')" onclick=" ga('send', 'event', 'index','designer', 'works', 113); "></a>
                </li>
                            <li>
                    <a href="https://qshare.rapaq.com/works/show/112" style="background-image:url('https://lh3.googleusercontent.com/hWxyBuR5q8lbka9dAAWdxdoc_ttauQJq4BV6ths3CH_ydPVOmWH0ZQ1HX0icSmIYu4Lt6LvNQ5sn_5glkmqYRslEfTk=s150')" onclick=" ga('send', 'event', 'index','designer', 'works', 112); "></a>
                </li>
                            <li>
                    <a href="https://qshare.rapaq.com/works/show/111" style="background-image:url('https://lh3.googleusercontent.com/r6dl426hDmWCj3X7Pw62u1seVjydLXGFiih35R44DLA4BMoeKukwV6YcyrFmAnpYuoiJxtF1g7jSsvcwS77w08y8wQ=s150')" onclick=" ga('send', 'event', 'index','designer', 'works', 111); "></a>
                </li>
                            <li>
                    <a href="https://qshare.rapaq.com/works/show/110" style="background-image:url('https://lh3.googleusercontent.com/1sk7oERzgq63R3uEBxeYOLBzOIZ8r3q9amfLviGcFuNehjOtC-0jgKcYpTn4Ld0sd7KVrMOZOjWsHuTOL7atcJBG=s150')" onclick=" ga('send', 'event', 'index','designer', 'works', 110); "></a>
                </li>
                    </ul>
            <div class="designerBox__info">
            <a href="https://qshare.rapaq.com/member/index/100000267" class="face">
                <img src="https://storage.googleapis.com/rapaq_public/user_pic/headpic_100000267.jpg" alt="">
            </a>
            <div class="name">
                <a href="https://qshare.rapaq.com/member/index/100000267">
                    披薩先生
                </a>
            </div>
            <div class="status">
                                    圖案設計
                    、                                    插畫
                    、                                    角色設計
                                                </div>
            <div class="action">
                                                <btn type="button" class="btn btn--idx btn--follow create_follow" followed_userid="100000267">追蹤</btn>
                                        </div>
            <div class="follower"><span data-id="cnt">11</span> 人追蹤</div>
        </div>
    </div>
</div>                                                    <div class="li swiper-slide-duplicate swiper-slide-duplicate-active" data-swiper-slide-index="0" style="margin-right: 20px;">
    <div class="designerBox">
            <ul class="designerBox__pic  clearfix">
                            <li>
                    <a href="https://qshare.rapaq.com/works/show/145" style="background-image:url('https://lh3.googleusercontent.com/HjN5vjWA5vHlZUXwa6PpzCIp2S3KzNn5bX2ocBu9rzMaa5g6SsP2sBkIYM8gpjNLjgzHljCMBMS3v57WXRmxqbb-=s150')" onclick=" ga('send', 'event', 'index','designer', 'works', 145); "></a>
                </li>
                            <li>
                    <a href="https://qshare.rapaq.com/works/show/144" style="background-image:url('https://lh3.googleusercontent.com/2rJaJDYjmfJ1RHCA9BP_An8X9doyCHO_c0AKpFVMxYXwnLb-AiU6v5yg4uipj8Rp8jGqf2_gp6hL6xy4mmLDbS45jQ=s150')" onclick=" ga('send', 'event', 'index','designer', 'works', 144); "></a>
                </li>
                            <li>
                    <a href="https://qshare.rapaq.com/works/show/134" style="background-image:url('https://lh3.googleusercontent.com/1LQS_pICnzPgwDoaK9p5xEXMegi2v4YjiIDFfheD2_5IOHBFk6rvduFvK4KwKoxqIrudRfV3OU55NGj-p4VcozP5FA=s150')" onclick=" ga('send', 'event', 'index','designer', 'works', 134); "></a>
                </li>
                            <li>
                    <a href="https://qshare.rapaq.com/works/show/133" style="background-image:url('https://lh3.googleusercontent.com/5Xcs9SnxHz-rXEcWRiKPvvm9EvXrLVBIv7aH4IiGUrdVgyhr_yEiNTfVMsv3ytsVZpxx1vxHu8NChVIwl_A4h1FzAGY=s150')" onclick=" ga('send', 'event', 'index','designer', 'works', 133); "></a>
                </li>
                    </ul>
            <div class="designerBox__info">
            <a href="https://qshare.rapaq.com/member/index/100000121" class="face">
                <img src="https://storage.googleapis.com/rapaq_public/user_pic/headpic_100000121.jpg" alt="">
            </a>
            <div class="name">
                <a href="https://qshare.rapaq.com/member/index/100000121">
                    椪小雨
                </a>
            </div>
            <div class="status">
                            </div>
            <div class="action">
                                                <btn type="button" class="btn btn--idx btn--follow create_follow" followed_userid="100000121">追蹤</btn>
                                        </div>
            <div class="follower"><span data-id="cnt">4</span> 人追蹤</div>
        </div>
    </div>
</div><div class="li swiper-slide-duplicate swiper-slide-duplicate-next" data-swiper-slide-index="1" style="margin-right: 20px;">
    <div class="designerBox">
            <ul class="designerBox__pic  clearfix">
                            <li>
                    <a href="https://qshare.rapaq.com/works/show/119" style="background-image:url('https://lh3.googleusercontent.com/WP2AwhgF2fNUb3eyh_AN11YT6Hh59gYn2kv7RegwRVMmEpq1KdOGM3N2d6HOokWuvypApjiLt4YeSJ5qgB4h0VOK=s150')" onclick=" ga('send', 'event', 'index','designer', 'works', 119); "></a>
                </li>
                            <li>
                    <a href="https://qshare.rapaq.com/works/show/118" style="background-image:url('https://lh3.googleusercontent.com/lC8saqIkK1pv0m2fKeRPVpXy_3zdOyOwSJpH1K_ScjMVp5v7nld2KsSx1gC_pDydt-aOU1KwH1UA0u4vqVl3cpxA=s150')" onclick=" ga('send', 'event', 'index','designer', 'works', 118); "></a>
                </li>
                            <li>
                    <a href="https://qshare.rapaq.com/works/show/117" style="background-image:url('https://lh3.googleusercontent.com/kuX733lwJm-v9GtuaYd7dorwVOQnhfbb_-pnmbDyrGkP3mqePn5rz-WbM8hjlxlYMSxJOJzk8DLo2E3qIbBoy4wEgcc=s150')" onclick=" ga('send', 'event', 'index','designer', 'works', 117); "></a>
                </li>
                            <li>
                    <a href="https://qshare.rapaq.com/works/show/116" style="background-image:url('https://lh3.googleusercontent.com/44FMY8oz_IoDYlHegMiR_AXup2v8DwWdHQHDSC5dUGWzNUa81G4NGzw2uH7kWLaCFWDYx-V4ybbndSuL3K5uFy4_Pw=s150')" onclick=" ga('send', 'event', 'index','designer', 'works', 116); "></a>
                </li>
                    </ul>
            <div class="designerBox__info">
            <a href="https://qshare.rapaq.com/member/index/100000266" class="face">
                <img src="https://storage.googleapis.com/rapaq_public/user_pic/headpic_100000266.jpg" alt="">
            </a>
            <div class="name">
                <a href="https://qshare.rapaq.com/member/index/100000266">
                    57 Art &amp; Illustration Studio
                </a>
            </div>
            <div class="status">
                            </div>
            <div class="action">
                                                <btn type="button" class="btn btn--idx btn--follow create_follow" followed_userid="100000266">追蹤</btn>
                                        </div>
            <div class="follower"><span data-id="cnt">7</span> 人追蹤</div>
        </div>
    </div>
</div><div class="li swiper-slide-duplicate" data-swiper-slide-index="2" style="margin-right: 20px;">
    <div class="designerBox">
            <ul class="designerBox__pic  clearfix">
                            <li>
                    <a href="https://qshare.rapaq.com/works/show/113" style="background-image:url('https://lh3.googleusercontent.com/baCfdSE8r1LKCCayN9C7BCvUCASixiNJ82boAf16V-7qIW-ZAhGsdxYsWSF5Y84te12OqRYRe4l0BLKG_Fx3wJr7=s150')" onclick=" ga('send', 'event', 'index','designer', 'works', 113); "></a>
                </li>
                            <li>
                    <a href="https://qshare.rapaq.com/works/show/112" style="background-image:url('https://lh3.googleusercontent.com/hWxyBuR5q8lbka9dAAWdxdoc_ttauQJq4BV6ths3CH_ydPVOmWH0ZQ1HX0icSmIYu4Lt6LvNQ5sn_5glkmqYRslEfTk=s150')" onclick=" ga('send', 'event', 'index','designer', 'works', 112); "></a>
                </li>
                            <li>
                    <a href="https://qshare.rapaq.com/works/show/111" style="background-image:url('https://lh3.googleusercontent.com/r6dl426hDmWCj3X7Pw62u1seVjydLXGFiih35R44DLA4BMoeKukwV6YcyrFmAnpYuoiJxtF1g7jSsvcwS77w08y8wQ=s150')" onclick=" ga('send', 'event', 'index','designer', 'works', 111); "></a>
                </li>
                            <li>
                    <a href="https://qshare.rapaq.com/works/show/110" style="background-image:url('https://lh3.googleusercontent.com/1sk7oERzgq63R3uEBxeYOLBzOIZ8r3q9amfLviGcFuNehjOtC-0jgKcYpTn4Ld0sd7KVrMOZOjWsHuTOL7atcJBG=s150')" onclick=" ga('send', 'event', 'index','designer', 'works', 110); "></a>
                </li>
                    </ul>
            <div class="designerBox__info">
            <a href="https://qshare.rapaq.com/member/index/100000267" class="face">
                <img src="https://storage.googleapis.com/rapaq_public/user_pic/headpic_100000267.jpg" alt="">
            </a>
            <div class="name">
                <a href="https://qshare.rapaq.com/member/index/100000267">
                    披薩先生
                </a>
            </div>
            <div class="status">
                                    圖案設計
                    、                                    插畫
                    、                                    角色設計
                                                </div>
            <div class="action">
                                                <btn type="button" class="btn btn--idx btn--follow create_follow" followed_userid="100000267">追蹤</btn>
                                        </div>
            <div class="follower"><span data-id="cnt">11</span> 人追蹤</div>
        </div>
    </div>
</div></div>
                        <div class="pagination">
                            <div class="swiper-pagination swiperPager--designer swiper-pagination-clickable swiper-pagination-bullets" data-swiper-pagination="designer"><span class="swiper-pagination-bullet swiper-pagination-bullet-active"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        <!-- designer end -->
    <!-- product start -->
        <div class="idx__section bg--white">
        <div class="idxSection__title">好物櫥窗</div>
        <div class="idxSection__main">
            <div class="swiper-container swiper-container--product swiper-container-horizontal" data-swiper="product">
                <div class="swiper-wrapper" style="transform: translate3d(-3160px, 0px, 0px); transition-duration: 0ms;"><div class="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="0" style="margin-right: 20px;">
    <div class="productBox">
        <a href="https://qgoods.rapaq.com/products/1706" target="_blank">
            <div class="productBox__image" style="height: 210.938px;">
                <img src="https://storage.googleapis.com/rapaq-store/qgoods/1706_20171127_111326_22.jpg" alt="宇宙制皂 星際隕石皂" style="margin-top: -94.5px;">
            </div>
        </a>
        <div class="productBox__text">
            <div class="logo">
                                <img src="https://storage.googleapis.com/rapaq-store/products/91010792-17111705002223699.JPG">
                            </div>
            <div class="txt">
                <span class="txt__brand"> 宇宙制皂 Astrosoap </span>
                <span class="txt__name">宇宙制皂 星際隕石皂</span>
            </div>
        </div>
    </div>
</div><div class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev" data-swiper-slide-index="1" style="margin-right: 20px;">
    <div class="productBox">
        <a href="https://qgoods.rapaq.com/products/1704" target="_blank">
            <div class="productBox__image" style="height: 210.938px;">
                <img src="https://storage.googleapis.com/rapaq-store/qgoods/_20171127_112537_66.jpg" alt="WEAVISM 胜肽絲巾" style="margin-top: -94.5px;">
            </div>
        </a>
        <div class="productBox__text">
            <div class="logo">
                                <img src="https://storage.googleapis.com/rapaq-store/products/91010601-17072505233008490.png">
                            </div>
            <div class="txt">
                <span class="txt__brand"> WEAVISM </span>
                <span class="txt__name">WEAVISM 胜肽絲巾</span>
            </div>
        </div>
    </div>
</div><div class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active" data-swiper-slide-index="2" style="margin-right: 20px;">
    <div class="productBox">
        <a href="https://qgoods.rapaq.com/products/1689" target="_blank">
            <div class="productBox__image" style="height: 210.938px;">
                <img src="https://storage.googleapis.com/rapaq-store/qgoods/1689_20171127_135852_61.jpg" alt="AM0000 拼接胡迪帽" style="margin-top: -94.5px;">
            </div>
        </a>
        <div class="productBox__text">
            <div class="logo">
                                <img src="https://storage.googleapis.com/rapaq-store/products/91010773-17101705021382790.jpg">
                            </div>
            <div class="txt">
                <span class="txt__brand"> AM0000 </span>
                <span class="txt__name">AM0000 拼接胡迪帽</span>
            </div>
        </div>
    </div>
</div><div class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next" data-swiper-slide-index="3" style="margin-right: 20px;">
    <div class="productBox">
        <a href="https://qgoods.rapaq.com/products/1686" target="_blank">
            <div class="productBox__image" style="height: 210.938px;">
                <img src="https://storage.googleapis.com/rapaq-store/qgoods/1686_20171127_150405_95.jpg" alt="大理花擴香座" style="margin-top: -94.5px;">
            </div>
        </a>
        <div class="productBox__text">
            <div class="logo">
                                <img src="https://storage.googleapis.com/rapaq-store/products/91010601-17090504430745456.jpg">
                            </div>
            <div class="txt">
                <span class="txt__brand"> Green idea </span>
                <span class="txt__name">大理花擴香座</span>
            </div>
        </div>
    </div>
</div><div class="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="4" style="margin-right: 20px;">
    <div class="productBox">
        <a href="https://qgoods.rapaq.com/products/1354" target="_blank">
            <div class="productBox__image" style="height: 210.938px;">
                <img src="https://storage.googleapis.com/rapaq-store/qgoods/1354_20171127_151036_59.jpg" alt="PICONO 金屬感手錶" style="margin-top: -94.5px;">
            </div>
        </a>
        <div class="productBox__text">
            <div class="logo">
                                <img src="https://storage.googleapis.com/rapaq-store/products/91010601-17100601255285038.jpg">
                            </div>
            <div class="txt">
                <span class="txt__brand"> PICONO </span>
                <span class="txt__name">PICONO 金屬感手錶</span>
            </div>
        </div>
    </div>
</div><div class="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="5" style="margin-right: 20px;">
    <div class="productBox">
        <a href="https://qgoods.rapaq.com/products/1306" target="_blank">
            <div class="productBox__image" style="height: 210.938px;">
                <img src="https://storage.googleapis.com/rapaq-store/qgoods/1306_20171127_151546_12.png" alt="能作 金箔調味盤" style="margin-top: -94.5px;">
            </div>
        </a>
        <div class="productBox__text">
            <div class="logo">
                                <img src="https://storage.googleapis.com/rapaq-store/products/91010766-17100503124820224.jpg">
                            </div>
            <div class="txt">
                <span class="txt__brand"> NOUSAKU｜能作 </span>
                <span class="txt__name">能作 金箔調味盤</span>
            </div>
        </div>
    </div>
</div>
                                    <div class="swiper-slide" data-swiper-slide-index="0" style="margin-right: 20px;">
    <div class="productBox">
        <a href="https://qgoods.rapaq.com/products/1706" target="_blank">
            <div class="productBox__image" style="height: 210.938px;">
                <img src="https://storage.googleapis.com/rapaq-store/qgoods/1706_20171127_111326_22.jpg" alt="宇宙制皂 星際隕石皂" style="margin-top: -94.5px;">
            </div>
        </a>
        <div class="productBox__text">
            <div class="logo">
                                <img src="https://storage.googleapis.com/rapaq-store/products/91010792-17111705002223699.JPG">
                            </div>
            <div class="txt">
                <span class="txt__brand"> 宇宙制皂 Astrosoap </span>
                <span class="txt__name">宇宙制皂 星際隕石皂</span>
            </div>
        </div>
    </div>
</div>
                                    <div class="swiper-slide swiper-slide-prev" data-swiper-slide-index="1" style="margin-right: 20px;">
    <div class="productBox">
        <a href="https://qgoods.rapaq.com/products/1704" target="_blank">
            <div class="productBox__image" style="height: 210.938px;">
                <img src="https://storage.googleapis.com/rapaq-store/qgoods/_20171127_112537_66.jpg" alt="WEAVISM 胜肽絲巾" style="margin-top: -94.5px;">
            </div>
        </a>
        <div class="productBox__text">
            <div class="logo">
                                <img src="https://storage.googleapis.com/rapaq-store/products/91010601-17072505233008490.png">
                            </div>
            <div class="txt">
                <span class="txt__brand"> WEAVISM </span>
                <span class="txt__name">WEAVISM 胜肽絲巾</span>
            </div>
        </div>
    </div>
</div>
<div class="swiper-slide swiper-slide-active" data-swiper-slide-index="2" style="margin-right: 20px;">
    <div class="productBox">
        <a href="https://qgoods.rapaq.com/products/1689" target="_blank">
            <div class="productBox__image" style="height: 210.938px;">
                <img src="https://storage.googleapis.com/rapaq-store/qgoods/1689_20171127_135852_61.jpg" alt="AM0000 拼接胡迪帽" style="margin-top: -94.5px;">
            </div>
        </a>
        <div class="productBox__text">
            <div class="logo">
                                <img src="https://storage.googleapis.com/rapaq-store/products/91010773-17101705021382790.jpg">
                            </div>
            <div class="txt">
                <span class="txt__brand"> AM0000 </span>
                <span class="txt__name">AM0000 拼接胡迪帽</span>
            </div>
        </div>
    </div>
</div>
                                    <div class="swiper-slide swiper-slide-next" data-swiper-slide-index="3" style="margin-right: 20px;">
    <div class="productBox">
        <a href="https://qgoods.rapaq.com/products/1686" target="_blank">
            <div class="productBox__image" style="height: 210.938px;">
                <img src="https://storage.googleapis.com/rapaq-store/qgoods/1686_20171127_150405_95.jpg" alt="大理花擴香座" style="margin-top: -94.5px;">
            </div>
        </a>
        <div class="productBox__text">
            <div class="logo">
                                <img src="https://storage.googleapis.com/rapaq-store/products/91010601-17090504430745456.jpg">
                            </div>
            <div class="txt">
                <span class="txt__brand"> Green idea </span>
                <span class="txt__name">大理花擴香座</span>
            </div>
        </div>
    </div>
</div>
                                    <div class="swiper-slide" data-swiper-slide-index="4" style="margin-right: 20px;">
    <div class="productBox">
        <a href="https://qgoods.rapaq.com/products/1354" target="_blank">
            <div class="productBox__image" style="height: 210.938px;">
                <img src="https://storage.googleapis.com/rapaq-store/qgoods/1354_20171127_151036_59.jpg" alt="PICONO 金屬感手錶" style="margin-top: -94.5px;">
            </div>
        </a>
        <div class="productBox__text">
            <div class="logo">
                                <img src="https://storage.googleapis.com/rapaq-store/products/91010601-17100601255285038.jpg">
                            </div>
            <div class="txt">
                <span class="txt__brand"> PICONO </span>
                <span class="txt__name">PICONO 金屬感手錶</span>
            </div>
        </div>
    </div>
</div>
                                    <div class="swiper-slide" data-swiper-slide-index="5" style="margin-right: 20px;">
    <div class="productBox">
        <a href="https://qgoods.rapaq.com/products/1306" target="_blank">
            <div class="productBox__image" style="height: 210.938px;">
                <img src="https://storage.googleapis.com/rapaq-store/qgoods/1306_20171127_151546_12.png" alt="能作 金箔調味盤" style="margin-top: -94.5px;">
            </div>
        </a>
        <div class="productBox__text">
            <div class="logo">
                                <img src="https://storage.googleapis.com/rapaq-store/products/91010766-17100503124820224.jpg">
                            </div>
            <div class="txt">
                <span class="txt__brand"> NOUSAKU｜能作 </span>
                <span class="txt__name">能作 金箔調味盤</span>
            </div>
        </div>
    </div>
</div>
                                <div class="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="0" style="margin-right: 20px;">
    <div class="productBox">
        <a href="https://qgoods.rapaq.com/products/1706" target="_blank">
            <div class="productBox__image" style="height: 210.938px;">
                <img src="https://storage.googleapis.com/rapaq-store/qgoods/1706_20171127_111326_22.jpg" alt="宇宙制皂 星際隕石皂" style="margin-top: -94.5px;">
            </div>
        </a>
        <div class="productBox__text">
            <div class="logo">
                                <img src="https://storage.googleapis.com/rapaq-store/products/91010792-17111705002223699.JPG">
                            </div>
            <div class="txt">
                <span class="txt__brand"> 宇宙制皂 Astrosoap </span>
                <span class="txt__name">宇宙制皂 星際隕石皂</span>
            </div>
        </div>
    </div>
</div><div class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev" data-swiper-slide-index="1" style="margin-right: 20px;">
    <div class="productBox">
        <a href="https://qgoods.rapaq.com/products/1704" target="_blank">
            <div class="productBox__image" style="height: 210.938px;">
                <img src="https://storage.googleapis.com/rapaq-store/qgoods/_20171127_112537_66.jpg" alt="WEAVISM 胜肽絲巾" style="margin-top: -94.5px;">
            </div>
        </a>
        <div class="productBox__text">
            <div class="logo">
                                <img src="https://storage.googleapis.com/rapaq-store/products/91010601-17072505233008490.png">
                            </div>
            <div class="txt">
                <span class="txt__brand"> WEAVISM </span>
                <span class="txt__name">WEAVISM 胜肽絲巾</span>
            </div>
        </div>
    </div>
</div><div class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active" data-swiper-slide-index="2" style="margin-right: 20px;">
    <div class="productBox">
        <a href="https://qgoods.rapaq.com/products/1689" target="_blank">
            <div class="productBox__image" style="height: 210.938px;">
                <img src="https://storage.googleapis.com/rapaq-store/qgoods/1689_20171127_135852_61.jpg" alt="AM0000 拼接胡迪帽" style="margin-top: -94.5px;">
            </div>
        </a>
        <div class="productBox__text">
            <div class="logo">
                                <img src="https://storage.googleapis.com/rapaq-store/products/91010773-17101705021382790.jpg">
                            </div>
            <div class="txt">
                <span class="txt__brand"> AM0000 </span>
                <span class="txt__name">AM0000 拼接胡迪帽</span>
            </div>
        </div>
    </div>
</div><div class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next" data-swiper-slide-index="3" style="margin-right: 20px;">
    <div class="productBox">
        <a href="https://qgoods.rapaq.com/products/1686" target="_blank">
            <div class="productBox__image" style="height: 210.938px;">
                <img src="https://storage.googleapis.com/rapaq-store/qgoods/1686_20171127_150405_95.jpg" alt="大理花擴香座" style="margin-top: -94.5px;">
            </div>
        </a>
        <div class="productBox__text">
            <div class="logo">
                                <img src="https://storage.googleapis.com/rapaq-store/products/91010601-17090504430745456.jpg">
                            </div>
            <div class="txt">
                <span class="txt__brand"> Green idea </span>
                <span class="txt__name">大理花擴香座</span>
            </div>
        </div>
    </div>
</div><div class="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="4" style="margin-right: 20px;">
    <div class="productBox">
        <a href="https://qgoods.rapaq.com/products/1354" target="_blank">
            <div class="productBox__image" style="height: 210.938px;">
                <img src="https://storage.googleapis.com/rapaq-store/qgoods/1354_20171127_151036_59.jpg" alt="PICONO 金屬感手錶" style="margin-top: -94.5px;">
            </div>
        </a>
        <div class="productBox__text">
            <div class="logo">
                                <img src="https://storage.googleapis.com/rapaq-store/products/91010601-17100601255285038.jpg">
                            </div>
            <div class="txt">
                <span class="txt__brand"> PICONO </span>
                <span class="txt__name">PICONO 金屬感手錶</span>
            </div>
        </div>
    </div>
</div><div class="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="5" style="margin-right: 20px;">
    <div class="productBox">
        <a href="https://qgoods.rapaq.com/products/1306" target="_blank">
            <div class="productBox__image" style="height: 210.938px;">
                <img src="https://storage.googleapis.com/rapaq-store/qgoods/1306_20171127_151546_12.png" alt="能作 金箔調味盤" style="margin-top: -94.5px;">
            </div>
        </a>
        <div class="productBox__text">
            <div class="logo">
                                <img src="https://storage.googleapis.com/rapaq-store/products/91010766-17100503124820224.jpg">
                            </div>
            <div class="txt">
                <span class="txt__brand"> NOUSAKU｜能作 </span>
                <span class="txt__name">能作 金箔調味盤</span>
            </div>
        </div>
    </div>
</div></div>
                <div class="navigation">
                    <div class="swiper-button-prev swiperBtn swiperBtn--prev" data-swiper-navigation="prev"></div>
                    <div class="swiper-button-next swiperBtn swiperBtn--next" data-swiper-navigation="next"></div>
                </div>
            </div>
        </div>
    </div>
        <!-- product end -->
    <!-- advertisement start -->
        <div class="idx__section bg--gray">
        <div class="idx__wrap ">
            <div class="idxSection">
                <div class="idxSection__main idxSection__main--action">
                    <div class="idx__leaflet">
                                                                <div class="leaflet leaflet--event">
                            <div class="leaflet__content">
                                <div class="swiper-container swiper-container--leaflet swiper-container-horizontal" data-swiper="leaflet">
                                    <div class="swiper-wrapper" style="transform: translate3d(-750px, 0px, 0px); transition-duration: 0ms;"><div class="swiper-slide swiper-slide-duplicate swiper-slide-next swiper-slide-duplicate-prev" data-swiper-slide-index="0">
                                                <div class="name">「設計X生活」 馬賽Kyo 插畫養成之路：憑什麼要人家買你 12/6(三) 講座免費報名</div>
                                                <a href="https://rapatalk.kktix.cc/events/rapaq05" class="image">
                                                    <img src="https://lh3.googleusercontent.com/DvEUztT6eiJMH0c5xBWzzDkI_kT-3KdznseusMx3yCovrNXQxg_WhOUj26Tw-JywIq6ft_hyZOljWpKgZOgFyMSo=s1410">
                                                </a>
                                            </div>
                                                                                    <div class="swiper-slide swiper-slide-duplicate-active swiper-slide-prev swiper-slide-duplicate-next" data-swiper-slide-index="0">
                                                <div class="name">「設計X生活」 馬賽Kyo 插畫養成之路：憑什麼要人家買你 12/6(三) 講座免費報名</div>
                                                <a href="https://rapatalk.kktix.cc/events/rapaq05" class="image">
                                                    <img src="https://lh3.googleusercontent.com/DvEUztT6eiJMH0c5xBWzzDkI_kT-3KdznseusMx3yCovrNXQxg_WhOUj26Tw-JywIq6ft_hyZOljWpKgZOgFyMSo=s1410">
                                                </a>
                                            </div>
                                                                           <div class="swiper-slide swiper-slide-duplicate swiper-slide-active swiper-slide-duplicate-prev" data-swiper-slide-index="0">
                                                <div class="name">「設計X生活」 馬賽Kyo 插畫養成之路：憑什麼要人家買你 12/6(三) 講座免費報名</div>
                                                <a href="https://rapatalk.kktix.cc/events/rapaq05" class="image">
                                                    <img src="https://lh3.googleusercontent.com/DvEUztT6eiJMH0c5xBWzzDkI_kT-3KdznseusMx3yCovrNXQxg_WhOUj26Tw-JywIq6ft_hyZOljWpKgZOgFyMSo=s1410">
                                                </a>
                                            </div></div>
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
        <!-- advertisement end -->
</div>
                        <footer class="footer">
                <div class="footer-trigger">
                    <ul class="footer-trigger__icon">
                        <li class="trigger-top"></li>
                        <li class="trigger-middle"></li>
                        <li class="trigger-bottom"></li>
                    </ul>
                </div>
                <div class="footer-line"></div>
                <div class="footer-load loadbg--1">
                    <div class="footer-content">
	<div class="footer-content-platform">
		<div class="platform__logo">
		</div>
		<ul class="platform-menu">
			<li><a href="https://qshare.rapaq.com/index">首頁</a></li>
			<li><a href="https://qshare.rapaq.com/works/index">作品</a></li>
			<li><a href="https://qshare.rapaq.com/blog/index">文章</a></li>
			<li><a href="https://qshare.rapaq.com/event/index">活動</a></li>
			<li class="platform-menu__creat mc">創建</li>
		</ul>
	</div>
	<div class="footer-content-common">
		<ul class="common-company">
			<li><a href="http://rapaq.com/" target="_blank">關於RAPAQ</a></li>
			<li><a href="https://www.104.com.tw/jobbank/custjob/index.php?r=cust&amp;j=503a426b34363e6730323a63383e3619729292929415c366785j48&amp;jobsource=checkc" target="_blank">人才招募</a></li>
			<li><a href="https://oauth.rapaq.com/privacy.html" target="_blank">隱私政策</a></li>
			<li><a href="https://oauth.rapaq.com/terms.html" target="_blank">使用條款</a></li>
			<li><a href="mailto:service@rapaq.com">聯絡我們</a></li>
		</ul>
	</div>
</div>                </div>
                <div class="footer-cy">
                <ul class="footer-cy-content">
    <li>© 2017 RAPAQ All Rights Reserved 版權所有</li>
    </ul>

                </div>
            </footer>
                    </div>
        <div class="popup popup--small" data-id="#sharePopup" data-popup="share">
    <div class="popup_title">
        <span data-id="popup_title">創建分享</span>
        <a href="#" class="popup_close" data-id="js-closePopup"></a>
    </div>
    <div class="popup_content popup_content--share" data-id="allCate" share_type="1" article_type="0" article_id="0">
        <div class="share_content">
            <div class="popup_create">
                <div class="create_form_description create_form_description--share">
                    <div class="publisher">
                        <div class="publisher_image"><img src=""></div>
                        <div class="publisher_text">
                            <div class="name"></div>
                            <div class="date">2017-12-04 17:15:05</div>
                        </div>
                    </div>
                    <textarea placeholder="想說什麼呢？分享你的想法" class="txtarea txtarea--comment" data-id="description"></textarea>
                </div>
            </div>
            <div class="popup_create popup_create--link">
                <textarea placeholder="輸入網址 https" class="txtarea txtarea--link" data-id="previewLink"></textarea>
                <div class="previewLink">
                    <div class="previewLink_loading is--hide">載入預覽中...</div>
                    <div class="previewLink_error is--hide">格式輸入錯誤</div>
                    <div class="previewLink_result is--hide"></div>
                </div>
            </div>
        </div>
        <div class="popup_create popup_create--publish publish">
            <div class="publish">
                <div class="publish_to">
                    <div class="title">發佈對象</div>
                    <span class="switch" data-id="js-publishto">公開</span>
                </div>
                <div class="publish_option">
                    <div class="options">
                        <input id="open" type="radio" name="publishto" data-id="choosePublish" data-value="公開" value="1" checked=""><!DOCTYPE html>
                        <html>
                        <head>
                        	<title></title>
                        </head>
                        <body>
                        
                        </body>
                        </html>
                        <label for="open">公開</label>
                    </div>
                    <div class="options">
                        <input id="self" type="radio" name="publishto" data-id="choosePublish" data-value="自己" value="2">
                        <label for="self">自己</label>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="popup_action popup_action--single clearfix">
        <div class="popup_action_container">
            <button type="button" class="create_btn create_btn-submit disabled" data-id="js-submitShare">發佈</button>
        </div>
    </div>
</div>    </div>
</template>

<script>
	export default {
	  data () {
			return {
				loading: false,
				html: '',
				url: "https://qgoods.rapaq.com"
			}
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
			this.getWeb()
		}
	}
</script>

<style>
	
</style>