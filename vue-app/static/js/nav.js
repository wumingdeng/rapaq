var a = false, b = false;
$(function(){
    //$('.menu-load').load('components/menu.html');
    var $menuClick = $('.mainbar-aside__click'),
        $memberClick = $('.mainbar-aside-member'),
        $loginClick = $('.mainbar-aside-login'),
        $menuContent =  $('.nav-content-toggle'),
        $memberContent =  $('.nav-content-mtoggle'),
        $msg = $('.member__msg'),
        $mask = $('.mask');
    function show_search(){
        $mask.show();
        $mask.toggleClass("is--show");
        didScroll = false;
        clearInterval(didScrollID);
        $('.nav-index').removeClass("nav-index--click");
        $('.mainbar-aside-search input').addClass('is--focus');
    }
    function hide_search(){
        $mask.hide();
        $mask.removeClass("is--show"); 
        didScroll = true;
        didScrollID = setTimer();
        $('.mainbar-aside-search input').removeClass('is--focus');
        
    }

    function show_member(){
        $memberContent.stop(true, false).slideDown(200);
        $memberClick.toggleClass('is--mclick');
        $loginClick.toggleClass('is--mclick');
        $msg.addClass("is--hide");
        $mask.show();
        $mask.toggleClass("is--show");
        didScroll = false;
        clearInterval(didScrollID);
        $('.nav-index').removeClass("nav-index--click");
    }
    function hide_member(){
        $memberContent.stop(true, false).slideUp(200);
        $memberClick.removeClass('is--mclick');
        $loginClick.toggleClass('is--mclick');
        $msg.removeClass("is--hide");
        $mask.hide();
        $mask.removeClass("is--show"); 
        didScroll = true;
        didScrollID = setTimer();
    }
    
    function show_menu(){
        if (Wwidth <= 768) {
            $('.nav').toggleClass('is--absolute');
            $('.nav-content-mainbar').toggleClass('is--fixed add--z-index100');
            $('.mainbar__logo').toggleClass('is--fixed add--z-index100 add--background-color-fff');
            $('.mainbar-aside').toggleClass('is--fixed add--z-index100');
            $menuContent.toggleClass('add--z-index50');
            $('.wrapper-index, .wrapper-inner').toggleClass('is--zeroheight');
        }
        $menuContent.stop(true, false).slideDown(200);
        $menuClick.toggleClass("is--click");
        $mask.show();
        $mask.toggleClass("is--show");
        didScroll = false;
        clearInterval(didScrollID);
        $('.nav-index').removeClass("nav-index--click");
    }
    function hide_menu(){
        if (Wwidth <= 768) {
            $('.nav').removeClass('is--absolute');
            $('.nav-content-mainbar').removeClass('is--fixed add--z-index100');
            $('.mainbar__logo').removeClass('is--fixed add--z-index100 add--background-color-fff');
            $('.mainbar-aside').removeClass('is--fixed add--z-index100');
            $menuContent.removeClass('add--z-index50');
            $('.wrapper-index, .wrapper-inner').removeClass('is--zeroheight');
        }
        $menuContent.stop(true, false).slideUp(200);
        $menuClick.removeClass("is--click");
        $mask.hide();
        $mask.removeClass("is--show"); 
        didScroll = true;
        didScrollID = setTimer();
    }
    $menuClick.bind('click',function(e){
        hide_member();
        b = false;
        if(!a){
            show_menu();
            a = true;
        }else{
            hide_menu();
            a = false;
        }
        
    });
    $memberClick.bind('click',function(e){
        hide_menu();
        a = false;
        if(!b){
            show_member();
            b = true;
        }else{
            hide_member();
            b = false;
        }
    });
    $loginClick.bind('click',function(e){
        console.log(1);
        console.log(b);
        hide_menu();
        a = false;
        if(!b){
            console.log(2);
            show_member();
            b = true;
        }else{
            console.log(3);
            hide_member();
            b = false;
        }
    });    
    $mask.click(function(){
        hide_member();
        b = false;
        hide_menu();
        a = false;
    });
    $(".mainbar-aside-search input").focus(function(){
        hide_member();
        b = false;
        hide_menu();
        a = false;
        show_search();
    });
    $(".mainbar-aside-search input").blur(function(){
        hide_member();
        b = false;
        hide_menu();
        a = false;
        hide_search();
    });
    $('.mainbar-aside-search .search__icon').on('click', function(){
        $mask.show();
        if($('.mainbar-aside-search input').hasClass('is--focus')){
            console.log('clicked');
        }else{
            $('.nav-index').removeClass("nav-index--click");
            $('.mainbar-aside-search input').addClass('is--focus');
        }
        
    });

    $('.search__input').keypress(function (e) {
        var keyword = $('.search__input').val();
        var code = (e.keyCode ? e.keyCode : e.which);
        if (code == 13) {
            $("#nav_keyword").val(keyword);
            $("#search_form_nav").submit();
            return false;
        }
    });
})
   

 