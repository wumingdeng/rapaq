var fc = function(){
    var submitting = false;
    
    var a = false,
        b = false,
        c = false,
        d = false,
        f = false,
        ajax_data = {};
    $(function () {
        //////////////////////////////////////////
        // share popup
        //////////////////////////////////////////
        var docHeight = $(document).height();
        var winHeight = $(window).height();
        var $nav = $('.nav'),
            navH = $nav.outerHeight(true);

        var $openPopup = $('[data-id="js-sharePopup"]'),
            $targetPopup = $('[data-popup="share"]'),
            $popupScrollContent = $('.popup_content--share'),
            $menuContent = $('.nav-content-toggle'),
            $shareMask = $('[data-id="shareMask"]'),
            $closeElement = $('[data-id="js-closePopup"]');

        function show_sharePopup() {
            $targetPopup.stop(true, false).slideDown(200);
            $('.mask').hide();
            $shareMask.show();
            didScroll = false;
        }

        function hide_sharePopup() {
            $targetPopup.stop(true, false).slideUp(200);
            $shareMask.hide();
            $('.creat-click').removeClass('is--mclick');
            $targetPopup.find('textarea').val('');
            $targetPopup.find('#open').prop('checked', true);
            $('[data-id="js-publishto"]').text('公開');
            $('[data-id="deletePreview"]').trigger('click');
            resizeAfterShowPreview();
            didScroll = true;
        }

        function resizeSharePopup() {
            var newWinHeight = $(window).height();
            var popTitileHeight = $targetPopup.find('.popup_title').outerHeight(true),
                popPublishHeight = $targetPopup.find('.popup_create--publish').outerHeight(true),
                popActionHeight = $targetPopup.find('.popup_action').outerHeight(true),
                popContentHeight = $targetPopup.find('.popup_content').outerHeight(true);
            var popupContentMaxHeight = newWinHeight - popTitileHeight - popPublishHeight - popActionHeight;
            var popupTotalHeight = popTitileHeight + popActionHeight + popContentHeight;
            if (Modernizr.mq('(max-width: 414px)')) {
                $popupScrollContent.css({
                    'height': popupContentMaxHeight
                });
            } else {
                $targetPopup.css({
                    'top': (newWinHeight - popupTotalHeight) / 2
                })
            }

        }

        function resizeAfterShowPreview() {
            var newWinHeight = $(window).height();
            var popTitileHeight = $targetPopup.find('.popup_title').outerHeight(true),
                popPublishHeight = $targetPopup.find('.popup_create--publish').outerHeight(true),
                popActionHeight = $targetPopup.find('.popup_action').outerHeight(true);

            if (window.innerWidth <= 414) {
                $targetPopup.css({
                    'top': 0
                });
            } else {
                $popupScrollContent.css({
                    'max-height': newWinHeight - popTitileHeight - popPublishHeight - popActionHeight
                });
                var previewPopupHeight = $targetPopup.height();
                $targetPopup.css({
                    'top': (newWinHeight - previewPopupHeight) / 2
                });
            }
        }

        $openPopup.on('click', function (e) {
            e.preventDefault();
            $('.sharestyle, .mask-z').fadeOut(100);
            $('.icons__share').removeClass('is--active');
            $('.nav-content-ctoggle').hide();
            $('[data-id="allCate"]').attr('share_type', 1);
            $('.previewLink_loading').addClass('is--hide');
            $('.previewLink_error').addClass('is--hide');
            $('[data-id="popup_title"]').html('創建分享');
            $('[data-id="js-editShare"]').html('發佈');
            show_sharePopup();
            resizeSharePopup();
            f = true;
        });

        

        $(window).on('scroll', function () {
            var winTop = $(this).scrollTop();
            if ($('.popup').is(":visible")) {
                resizeSharePopup();
                resizeAfterShowPreview();
            }
        }).trigger('scroll');

        //reset popup position and max-height after resize window
        $(window).on('resize', function () {
            if ($('.popup').is(":visible")) {
                resizeSharePopup();
                resizeAfterShowPreview();
            }
        }).trigger('resize');

        //make works/blog/activity name textarea auto height
        var span = $('<span>').css({ 'display': 'none', 'word-break': 'break-all', 'font-size': '18px', 'min-height': '100px' }).appendTo('body').css('visibility', 'hidden');

        function initSpan(textarea) {
            span.text(textarea.text()).width(textarea.width()).css('font', textarea.css('font'));
        }

        $('[data-id="description"]').on({
            input: function () {
                var text = $(this).val();
                span.text(text);
                $(this).height(text ? span.height() : '29px');
            },
            focus: function () {
                initSpan($(this));
            },
            keypress: function (e) {
                if (e.which == 13) e.preventDefault();
            }
        });

        var links = $('<span>').css({ 'display': 'none', 'word-break': 'break-all', 'font-size': '18px', 'min-height': '50px' }).appendTo('body').css('visibility', 'hidden');
        function initLink(textarea) {
            links.text(textarea.text()).width(textarea.width()).css('font', textarea.css('font'));
        }

        

        //delete share preview
        $("body").on('click', '[data-id="deletePreview"]', function () {
            $('[data-id="previewLink"]').removeClass('is--hide').val('');
            $('[data-id="js-submitShare"]').addClass('disabled');
            $('.previewLink_result').empty();
            $('.previewLink_result').addClass('is--hide');
            resizeAfterShowPreview();
        });

        //choose publish options
        $('[data-id="js-publishto"]').on('click', function () {
            $(this).toggleClass('on');
            $('.publish_option').fadeToggle(300);
        });

        //replace publish to whom
        $('[data-id="choosePublish"]').on('change', function (e) {
            var type = $(e.currentTarget).data('value');
            $('[data-id="js-publishto"]').text(type);

            $('[data-id="js-publishto"]').trigger('click');
        });

    });

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
        }
        show_search = function() {
            $mask.show();
            $mask.toggleClass("is--show");
            didScroll = false;
        }
        hide_search = function() {
            $mask.hide();
            $mask.removeClass("is--show");
            didScroll = true;
        }
        show_member = function() {
            $memberContent.stop(true, false).slideDown(200);
            $memberClick.toggleClass('is--mclick');
            $mask.show();
            $mask.toggleClass("is--show");
            didScroll = false;
        }
        hide_member = function() {
            $memberContent.stop(true, false).slideUp(200);
            $memberClick.removeClass('is--mclick');
            $mask.hide();
            $mask.removeClass("is--show");
            didScroll = true;
        }
        show_notify = function() {
            $notifyContent.stop(true, false).slideDown(200);
            $notifyClick.toggleClass('is--mclick');
            $mask.show();
            $mask.toggleClass("is--show");
            didScroll = false;
        }
        hide_notify = function() {
            $notifyContent.stop(true, false).slideUp(200);
            $notifyClick.removeClass('is--mclick');
            $mask.hide();
            $mask.removeClass("is--show");
            didScroll = true;
        }
        show_creat = function() {
            $creatContent.stop(true, false).fadeIn(200);
            // $creatClick.toggleClass('is--mclick');
            $mask.show();
            $mask.toggleClass("is--show");
            didScroll = false;
        }
        hide_creat = function() {
            $creatContent.stop(true, false).fadeOut(200);
            // $creatClick.removeClass('is--mclick');
            $mask.hide();
            $mask.removeClass("is--show");
            didScroll = true;
            //0824 fix
            point_creat = false;
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


    $("body").on('click', '.check-report', function () {
        $('.report__submit').removeClass('is--disable');
    });

    $("body").on('click', '.report-header__close', function () {
        $('.report, .mask-z').fadeOut(100);
        $('html, body').css({
            overflow: 'auto',
            height: 'auto'
        });
        $('.report__submit').addClass('is--disable');
        $('.check-report').prop('checked', false);
    })

    $("body").on('click', ".next_page, .prev_page", function () {

        var data = {};
        var num = 10;

        now_page_obj = $('#pageNo');
        if ($(this).hasClass('next_page')) {
            pageNo = Number(now_page_obj.val()) + 1
            data.first_id = Number(now_page_obj.val() * num);
        }
        else if ($(this).hasClass('prev_page')) {
            pageNo = Number(now_page_obj.val()) - 1
            data.first_id = Number(Number(now_page_obj.val() - 2) * num);
        }
        else
            return false;

        data.num = num;
        data.type = now_page_obj.attr('comment_type');
        data.primary_id = now_page_obj.attr('primary_id');
        data.owner = $(now_page_obj).attr('owner');

        loadComments(data, pageNo);

    });

    //reply input

    $(document).on('click', '.say-reply__reply', function () {
        $(this).hide();
        $(this).siblings().fadeIn(200);
    });


    $(document).on('click', '.is--cancel', function () {
        $(this).siblings().eq(0).val('');
        $(this).parent().hide();
        $(this).parent().siblings().fadeIn(200);
    });


    $(".share-href__copy").click(function () {
        $('body').css({
            overflow: 'auto',
            height: 'auto'
        });
        $('.share-href__input').select();
        document.execCommand('copy');
        $('.sharestyle, .mask-z').fadeOut(100);
        $('.m-header__share, .list-inner-share__share').removeClass('is--active');
        $('.icons__share').removeClass('is--active');
        swal({
            title: "已複製連結",
            type: 'success',
            showCancelButton: false,
            showConfirmButton: false,
            customClass: 'sa-rapaq',
            timer: 1000,
        }).catch(swal.noop);
    });
}

module.exports = fc