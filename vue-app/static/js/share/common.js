
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

        $(window).on('scroll',function() {
            this.didScroll = true;
        }.bind(this));
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
    initSharePage:function() {
        $(window).on('scroll',this.onScroll.bind(this));
    },
    onScroll:function() {
        if( this.point_member == false && this.point_menu == false  && this.point_creat == false  && this.point_notify == false){

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
    },

    initClassify:function() {
        //classify effect
        function classifyCheck(){
            if ( !clickONE && !clickTWO && !clickTHREE) {
                $THREE.stop(true, false).slideUp(200);
                $TWO.stop(true, false).slideUp(200);
                $ONE.stop(true, false).slideUp(200);
                // $('.bar__btn1').removeClass('mc').children('span.arrow').removeClass('arrow--active');
                // $('.bar__btn2').removeClass('mc').children('span.arrow').removeClass('arrow--active');
                $('.classify-bar > ul > li').removeClass('mc').children('span.arrow').removeClass('arrow--active');
            }
        }
        var clickONE = false, clickTWO = false, clickTHREE = false;
        var itemsList = $('.itemsList__name');
        var $ONE = $('.classify-all, .classify-blog, .classify-act1');
        var $TWO = $('.classify-latest, .classify-act2');
        var $THREE = $('.classify-act3');
        itemsList.click(function() {
            $(this).next().slideToggle(200);
            $(this).toggleClass('is--active');
            $(this).parent().siblings().children('ul.itemsList-article').slideUp(300).prev().removeClass('is--active');
            return false;
        });
        // $(window).resize(function(){
        //     if($(window).width()<=414){
        //         itemsList.removeClass('is--active');
        //         $('ul.itemsList-article').hide();
        //     }else{
        //         $('ul.itemsList-article').show();
        //     }
        // });
        $('.bar__btn1').click(function(){
            if ( clickTWO ) {
                $TWO.stop(true, false).slideUp(200);
                $(this).siblings().removeClass('mc').children('span.arrow').removeClass('arrow--active');
                clickTWO = !clickTWO;
            };
            if ( clickTHREE ) {
                $THREE.stop(true, false).slideUp(200);
                $(this).siblings().removeClass('mc').children('span.arrow').removeClass('arrow--active');
                clickTHREE = !clickTHREE;
            };
            $ONE.slideDown(200);
            $(this).addClass('mc').children('span.arrow').addClass('arrow--active');
            clickONE = !clickONE;
            classifyCheck();
        });
        $('.bar__btn2').click(function(){
            if ( clickONE ) {
                $ONE.stop(true, false).slideUp(200);
                $(this).siblings().removeClass('mc').children('span.arrow').removeClass('arrow--active');
                clickONE = !clickONE;
            };
            if ( clickTHREE ) {
                $THREE.stop(true, false).slideUp(200);
                $(this).siblings().removeClass('mc').children('span.arrow').removeClass('arrow--active');
                clickTHREE = !clickTHREE;
            };
            $TWO.slideDown(200);
            $(this).addClass('mc').children('span.arrow').addClass('arrow--active');
            clickTWO = !clickTWO;
            classifyCheck();
        });
        $('.bar__btn3').click(function(){
            if ( clickONE ) {
                $ONE.stop(true, false).slideUp(200);
                $(this).siblings().removeClass('mc').children('span.arrow').removeClass('arrow--active');
                clickONE = !clickONE;
            };
            if ( clickTWO ) {
                $TWO.stop(true, false).slideUp(200);
                $(this).siblings().removeClass('mc').children('span.arrow').removeClass('arrow--active');
                clickTWO = !clickTWO;
            };
            $THREE.slideDown(200);
            $(this).addClass('mc').children('span.arrow').addClass('arrow--active');
            clickTHREE = !clickTHREE;
            classifyCheck();
        });
    }
    


}

        
    

   
    



shareFun.ifStepShow();




export default shareFun
    //copyright
    // $('.footer-cy').load('components/copyright.html');
