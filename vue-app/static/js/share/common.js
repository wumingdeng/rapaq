
var Wheight = $(window).height()
var Wwidth = $(window).width()

var shareFun = {
    point_menu: false,
    point_member: false,
    point_notify: false,
    point_creat: false,
    menuClick: false,
    didScrollID: null,
    didScroll: false,
    lastScrollTop: 0,
    delta: 120,
    init: function() {
        $(window).resize(function () {
            Wheight = $(window).height();
            Wwidth = $(window).width();
        });
        $(window).on('scroll',this.onScroll.bind(this));

        //footer
        // $('.footer-load').load('components/footer.html');
        $('.footer-trigger').click(function(){
            $(".footer-load").slideToggle(500);
            $(".footer-trigger__icon").toggleClass("is--active");
        });

        this.divFixTop = $('.classify, [data-id="js-pageHeader"], .n-notify__title, .s-switch, .m-switch, .m-main-save-switch, .claim-inPage');
        this.divFixZero = $('.classify, .whitebg, [data-id="js-pageHeader"], .n-notify__title, .s-switch, .m-switch, .m-main-save-switch, .claim-inPage');
        this.easyElTop = $(".pageEasy-header-infoMove, .pageEasy-header__action");//
        this.easyElZero = $(".pageEasy-header-infoMove, .pageEasy-header__action");//
        this.didScrollID = this.setTimer()

        this.idScroll = false
    },
    onScroll:function() {
        if( this.point_member == false && this.point_menu == false  && this.point_creat == false  && this.point_notify == false){
            this.didScroll = true;

            // console.log('scroll..')
            var worksOffsetTop = $('[data-id="idx_works"]').offset().top;
            var worksHeight = $('[data-id="idx_works"]').outerHeight(true);
            var worksOffsetBottom = worksOffsetTop + worksHeight;
            var winTop = $(window).scrollTop();
            var navH = $('nav').outerHeight(true);
            if (winTop >= worksOffsetTop && winTop <= worksOffsetBottom) {
                $('[data-id="idx_works"]').addClass('docking');
                if ($('nav').hasClass('is-hide')) {
                    $('[data-id="idx_works"]').find('.idxSection__title').css({ 'top': 0 });
                } else {
                  $('[data-id="idx_works"]').find('.idxSection__title').css({ 'top': navH });
                }
            } else if (winTop > worksOffsetBottom || winTop < worksOffsetTop) {
                $('[data-id="idx_works"]').removeClass('docking');
            }
        }
    },
    distroy:function() {
        if(this.didScrollID) {
            clearInterval(this.didScrollID);
        }
        $(window).off('scroll')
    },
    setTimer: function(){
        var self = this
        var i = setInterval(function(){
            if (self.didScroll) {
                self.hasScrolled();
                self.didScroll = false;
            }
        }, 500);
        return i;
    },
    ifStepShow:function() {
        if($('.nav').hasClass('is-hide')){
            $('.stepFixed').removeClass('navShow');
        }else {
            $('.stepFixed').addClass('navShow');
        }
    },
    hasScrolled: function() {
        clearInterval(this.didScrollID);
        var st = $(document).scrollTop();
        var $Tbottom = $('.wrapper-inner').height() - Wheight - 120;
        if (st > this.lastScrollTop && st > Wheight){
            $('.nav').removeClass('is-active').addClass('is-hide');
            this.divFixZero.addClass('is--zero');
            this.easyElZero.addClass('is--zero');//
            $(".sharestyle, .page-header-more").addClass('is--scroll');
            if ( st > $Tbottom ) {
                $('.nav').removeClass('is-hide').addClass('is-active');
                this.divFixZero.removeClass('is--zero');
                this.easyElZero.removeClass('is--zero');//
            }
        } else {
            if(st + Wheight < $('.wrapper-inner').height()) {
                $('.nav').removeClass('is-hide').addClass('is-active');
                this.divFixZero.removeClass('is--zero');
                this.easyElZero.removeClass('is--zero');//
            }
        }

        this.ifStepShow();
        
        if($('.nav').hasClass('is-hide')){
            $('.stepFixed').removeClass('navShow');
        }else {
            $('.stepFixed').addClass('navShow');
        }
        
        if (st > 300) {
            this.divFixTop.addClass('is--fixedtop');//
            this.easyElTop.addClass('is--fixedtop');//
            $('.pageEasy-header__info').css('padding-bottom','83px');//
            $(".sharestyle, .page-header-more").addClass('is--scroll');
            $(".mask-z").addClass('is--z6');
            var pageHeaderInfoHeight=$('.is--fixedtop .page-header__info').outerHeight(true);
            $('.whitebg').stop(true,false).animate({height: pageHeaderInfoHeight+40},0).fadeIn(100);
            $('.whitebg-r').stop(true,false).animate({height:0},0).animate({ height:59},100).fadeIn(100);
        } else {
            this.divFixTop.removeClass('is--fixedtop');//
            this.easyElTop.removeClass('is--fixedtop');//
             $('.pageEasy-header__info').css('padding-bottom','20px');//
            $('.whitebg').stop(true,false).fadeOut(100);
            $('.whitebg-r').stop(true,false).animate({height:59},0).animate({height:0},100).fadeOut(100);
            $(".sharestyle, .page-header-more").removeClass('is--scroll');
            $(".mask-z").removeClass('is--z6');
        }
        this.lastScrollTop = st;
        this.didScrollID = this.setTimer();
    }
    


}

        
    

   
    



shareFun.ifStepShow();




export default shareFun
    //copyright
    // $('.footer-cy').load('components/copyright.html');
