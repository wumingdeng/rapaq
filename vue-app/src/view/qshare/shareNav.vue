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

<script>
export default {

  mounted() {
    var point_menu = false;
    var point_member = false;
    var point_notify = false;
    var point_creat = false;
    var menuClick = false;
    var show_menu;
    var hide_menu;
    var show_search;
    var hide_search;
    var show_member;
    var hide_member;
    var show_notify;
    var hide_notify;
    var show_creat;
    var hide_creat;
    // var show_classify;
    // var hide_classify;
    // var show_switch;
    // var hide_switch;
    var tabletWidth = 768;
    var $menuClick = $('.mainbar-aside__click'),
        $memberClick = $('.member-btn'),
        $notifyClick = $('.mainbar-aside-notify'),
        $creatClick = $('.creat-click'),
        $menuContent = $('.nav-content-toggle'),
        $memberContent = $('.nav-content-mtoggle'),
        $notifyContent = $('.nav-content-ntoggle'),
        $creatContent = $('.nav-content-ctoggle'),
        $mask = $('.mask');
    show_menu = function() {
        if ($(window).width() <= tabletWidth) {
            $('.nav').toggleClass('is--absolute');
            $('.nav-content-mainbar, .mainbar__logo, .mainbar-aside').toggleClass('is--fixed');
            $('.nav-content-mainbar, .mainbar__logo, .mainbar-asider').toggleClass('is--z100');
            // $('.mainbar__logo').toggleClass('is--fff');
            $menuContent.addClass('is--z50');
        }
        $menuContent.stop(true, false).slideDown(200);
        $menuClick.toggleClass("is--click");
        $mask.show();
        $mask.toggleClass("is--show");
        didScroll = false;
        clearInterval(didScrollID);
    }
    hide_menu = function() {
        if ($(window).width() <= tabletWidth) {
            $('.nav').removeClass('is--absolute');
            $('.nav-content-mainbar, .mainbar__logo, .mainbar-aside').removeClass('is--fixed');
            $('.nav-content-mainbar, .mainbar__logo, .mainbar-aside').removeClass('is--z100');
            // $('.mainbar__logo').removeClass('is--fff');
            $menuContent.removeClass('is--z50');
        }
        $menuContent.stop(true, false).slideUp(200);
        $menuClick.removeClass("is--click");
        $mask.hide();
        $mask.removeClass("is--show");
        didScroll = true;
        didScrollID = setTimer();
    }
    show_search = function() {
        $mask.show();
        $mask.toggleClass("is--show");
        didScroll = false;
        clearInterval(didScrollID);
    }
    hide_search = function() {
        $mask.hide();
        $mask.removeClass("is--show");
        didScroll = true;
        didScrollID = setTimer();
    }
    show_member = function() {
        $memberContent.stop(true, false).slideDown(200);
        $memberClick.toggleClass('is--mclick');
        $mask.show();
        $mask.toggleClass("is--show");
        didScroll = false;
        clearInterval(didScrollID);
    }
    hide_member = function() {
        $memberContent.stop(true, false).slideUp(200);
        $memberClick.removeClass('is--mclick');
        $mask.hide();
        $mask.removeClass("is--show");
        didScroll = true;
        didScrollID = setTimer();
    }
    show_notify = function() {
        $notifyContent.stop(true, false).slideDown(200);
        $notifyClick.toggleClass('is--mclick');
        $mask.show();
        $mask.toggleClass("is--show");
        didScroll = false;
        clearInterval(didScrollID);
    }
    hide_notify = function() {
        $notifyContent.stop(true, false).slideUp(200);
        $notifyClick.removeClass('is--mclick');
        $mask.hide();
        $mask.removeClass("is--show");
        didScroll = true;
        didScrollID = setTimer();
    }
    show_creat = function() {
        $creatContent.stop(true, false).fadeIn(200);
        // $creatClick.toggleClass('is--mclick');
        $mask.show();
        $mask.toggleClass("is--show");
        didScroll = false;
        clearInterval(didScrollID);
    }
    hide_creat = function() {
        $creatContent.stop(true, false).fadeOut(200);
        // $creatClick.removeClass('is--mclick');
        $mask.hide();
        $mask.removeClass("is--show");
        didScroll = true;
        //0824 fix
        point_creat = false;
        didScrollID = setTimer();
    }
    $menuClick.bind('click', function(e) {
        hide_member();
        point_member = false;
        hide_notify();
        point_notify = false;
        hide_creat();
        point_creat = false;
        if (!point_menu) {
            show_menu();
            point_menu = true;
            menuClick = true;
        } else {
            hide_menu();
            point_menu = false;
            menuClick = false;
        }
    });
    $memberClick.bind('click', function(e) {
        hide_menu();
        point_menu = false;
        hide_notify();
        point_notify = false;
        hide_creat();
        point_creat = false;
        if (!point_member) {
            show_member();
            point_member = true;
        } else {
            hide_member();
            point_member = false;
        }
    });
    $notifyClick.bind('click', function(e) {
        hide_menu();
        point_menu = false;
        hide_member();
        point_member = false;
        hide_creat();
        point_creat = false;
        if (!point_notify) {
            show_notify();
            point_notify = true;
        } else {
            hide_notify();
            point_notify = false;
        }
    });
    $creatClick.bind('click', function(e) {
        hide_menu();
        point_menu = false;
        hide_member();
        point_member = false;
        hide_notify();
        point_notify = false;
        if (!point_creat) {
            show_creat();
            point_creat = true;
        } else {
            hide_creat();
            point_creat = false;
        }
    });
    //footer creat
    $('.platform-menu__creat, .r-recommend__creat').bind('click', function(e) {
        hide_menu();
        point_menu = false;
        hide_member();
        point_member = false;
        hide_notify();
        point_notify = false;
        if (!point_creat) {
            show_creat();
            point_creat = true;
        } else {
            hide_creat();
            point_creat = false;
        }
    });
    $mask.click(function() {
        hide_member();
        point_member = false;
        hide_menu();
        point_menu = false;
        hide_notify();
        point_notify = false;
        hide_creat();
        point_creat = false;
        $(this).removeAttr('style').removeAttr("class").addClass("mask");
    });
    $('.ctoggle-login__btn, .ctoggle-creat__btn').click(function() {
        hide_creat();
        $('.creat-worksType').fadeOut(200);//恢復選擇項目
    });
    $(".mainbar-aside-search > form > input").focus(function() {
        hide_member();
        point_member = false;
        hide_menu();
        point_menu = false;
        hide_notify();
        point_notify = false;
        hide_creat();
        point_creat = false;
        show_search();
        $('.mainbar-aside-creat').fadeOut(300);
    });
    $(".mainbar-aside-search > form >input").blur(function() {
        hide_member();
        point_member = false;
        hide_menu();
        point_menu = false;
        hide_notify();
        point_notify = false;
        hide_creat();
        point_creat = false;
        hide_search();
        $('.mainbar-aside-creat').fadeIn(300);
    });

    $(window).resize(function() {
        if (menuClick) {

        } else {
            hide_member();
            point_member = false;
            hide_menu();
            point_menu = false;
            hide_notify();
            point_notify = false;
            hide_creat();
            point_creat = false;
            hide_search();
            $menuContent.removeAttr("style");
            $memberContent.removeAttr("style");
            $notifyContent.removeAttr("style");
            $creatContent.removeAttr("style");
        }
    });
    //--works edit mode has two ways--//
    $('.ctoggle-creat-works').click(function(){
        $('.creat-worksType').fadeIn('200');
    });

    //=======================================//
    // the menu from moible will be fixed

    if ($(window).width() <= 768) {
        $('.mainbar-aside__click, .creat-click').click(function() {
            $('.wrapper-inner').toggleClass('is--height');
        });
        $('.member-btn, .mask, .ctoggle-creat__btn, .ctoggle-login__btn').click(function() {
            $('.wrapper-inner').removeClass('is--height');
        })
    }        
  }
}

</script>