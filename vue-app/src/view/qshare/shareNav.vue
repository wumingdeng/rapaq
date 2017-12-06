<template>
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
      <ul class="nav-content-mtoggle is--hide">
        <!-- click member btn would be show it -->
        <li class="not-login"><a href="https://qshare.rapaq.com/login">登入 / 註冊</a></li>
      </ul>
      <div class="nav-content-ntoggle  is--hide" style="">
        <!-- click notify btn would be show it -->
      </div>
      <ul class="nav-content-ctoggle is--hide">
        <!-- click creat btn would be show it -->
        <div class="ctoggle-login">
          <h3>創建</h3>
          <p>你必須註冊或登入才能發佈</p>
          <div class="ctoggle-login__btn btn-cancel">取消</div>
          <a href="https://qshare.rapaq.com/login">
            <div class="ctoggle-login__btn btn-login">註冊/登入</div>
          </a>
        </div>
      </ul>
    </div>
  </div>
</nav>

</template>