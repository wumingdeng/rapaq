var point_menu = false;
var point_member = false;
var point_notify = false;
var point_creat = false;
var menuClick = false;
    //nav
    // $('.nav-load').load('components/nav.html');
    var didScrollID = setTimer();
    var didScroll = false,
        lastScrollTop = 0,
        delta = 120,
        Wheight = $(window).height(),
        Wwidth = $(window).width();
        
    $(window).resize(function () {
        Wheight = $(window).height();
        Wwidth = $(window).width();
    });
    function setTimer(){
        i = setInterval(function(){
            if (didScroll) {
                hasScrolled();
                didScroll = false;
            }
        }, 500);
        return i;
   }

   function ifStepShow() {
        if($('.nav').hasClass('is-hide')){
            $('.stepFixed').removeClass('navShow');
        }else {
            $('.stepFixed').addClass('navShow');
        }
    }
    
    $(window).scroll(function (event) {
        if( point_member == false && point_menu == false  && point_creat == false  && point_notify == false){
            didScroll = true;
        }
    });


    ifStepShow();

    // var divFixTop = $(".classify, .page-header, .n-notify__title, .s-switch, .m-switch, .m-main-save-switch, .claim-inPage");
    // var divFixZero = $(".classify, .whitebg, .page-header, .n-notify__title, .s-switch, .m-switch, .m-main-save-switch, .claim-inPage");
    var divFixTop = $('.classify, [data-id="js-pageHeader"], .n-notify__title, .s-switch, .m-switch, .m-main-save-switch, .claim-inPage');
    var divFixZero = $('.classify, .whitebg, [data-id="js-pageHeader"], .n-notify__title, .s-switch, .m-switch, .m-main-save-switch, .claim-inPage');
    var easyElTop = $(".pageEasy-header-infoMove, .pageEasy-header__action");//
    var easyElZero = $(".pageEasy-header-infoMove, .pageEasy-header__action");//
    function hasScrolled() {
        clearInterval(didScrollID);
        var st = $(this).scrollTop();
        var $Tbottom = $(document).height() - Wheight - 120;
        if (st > lastScrollTop && st > Wheight){
            $('.nav').removeClass('is-active').addClass('is-hide');
            divFixZero.addClass('is--zero');
            easyElZero.addClass('is--zero');//
            $(".sharestyle, .page-header-more").addClass('is--scroll');
            if ( st > $Tbottom ) {
                $('.nav').removeClass('is-hide').addClass('is-active');
                divFixZero.removeClass('is--zero');
                easyElZero.removeClass('is--zero');//
            }
        } else {
            if(st + Wheight < $(document).height()) {
                $('.nav').removeClass('is-hide').addClass('is-active');
                divFixZero.removeClass('is--zero');
                easyElZero.removeClass('is--zero');//
            }
        }

        ifStepShow();
        
        if($('.nav').hasClass('is-hide')){
            $('.stepFixed').removeClass('navShow');
        }else {
            $('.stepFixed').addClass('navShow');
        }
        
        if (st > 300) {
            divFixTop.addClass('is--fixedtop');//
            easyElTop.addClass('is--fixedtop');//
            $('.pageEasy-header__info').css('padding-bottom','83px');//
            $(".sharestyle, .page-header-more").addClass('is--scroll');
            $(".mask-z").addClass('is--z6');
            var pageHeaderInfoHeight=$('.is--fixedtop .page-header__info').outerHeight(true);
            $('.whitebg').stop(true,false).animate({height: pageHeaderInfoHeight+40},0).fadeIn(100);
            $('.whitebg-r').stop(true,false).animate({height:0},0).animate({ height:59},100).fadeIn(100);
        } else {
            divFixTop.removeClass('is--fixedtop');//
            easyElTop.removeClass('is--fixedtop');//
             $('.pageEasy-header__info').css('padding-bottom','20px');//
            $('.whitebg').stop(true,false).fadeOut(100);
            $('.whitebg-r').stop(true,false).animate({height:59},0).animate({height:0},100).fadeOut(100);
            $(".sharestyle, .page-header-more").removeClass('is--scroll');
            $(".mask-z").removeClass('is--z6');
        }
        lastScrollTop = st;
        didScrollID = setTimer();
    }
    
    //footer
    // $('.footer-load').load('components/footer.html');
    $('.footer-trigger').click(function(){
        $(".footer-load").slideToggle(500);
        $(".footer-trigger__icon").toggleClass("is--active");
    });

    //copyright
    // $('.footer-cy').load('components/copyright.html');
