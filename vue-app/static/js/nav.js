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

$(function() {
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

});