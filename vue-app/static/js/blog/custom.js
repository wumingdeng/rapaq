var submitting = false;


var a = false,
    b = false,
    c = false,
    d = false,
    f = false,
    ajax_data = {};
var current_url = "http://qshare.rapaq.com/blog/show/95";

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
        clearInterval(didScrollID);
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
        didScrollID = setTimer();
    }
    function setTimer() {
        var i = setInterval(function() {
        if (didScroll) {
            // hasScrolled();
            didScroll = false;
        }
        }, 500);
        return i;
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

    //create share preview
    $('[data-id="previewLink"]').on({
        input: function () {
            var text = $(this).val();
            if (text == '') {
                $('[data-id="js-submitShare"]').addClass('disabled');
            } else {
                resizeAfterShowPreview();
                $('[data-id="js-submitShare"]').removeClass('disabled');
            }

            links.text(text);
            $(this).height(text ? links.height() : '29px').css({ 'overflow-y': 'hidden' });
            $('.previewLink_loading').removeClass('is--hide');
            $('.previewLink_error').addClass('is--hide');
            var data = {};
            data.url = text;
            if (submitting) {
                return false;
            }
            submitting = true;

            $.ajax({
                url: "/share/url",
                dataType: 'json',
                type: 'post',
                data: data,
                error: function (xhr, ajaxOptions, throwError) {
                    alert('例外錯誤！\n(' + xhr.status + ") " + throwError);
                    window.location.reload();
                },
                success: function (result) {
                    if (result.result) {

                        $('.previewLink_loading,[data-id="previewLink"]').addClass('is--hide');
                        $('.previewLink_result').append(result.html).removeClass('is--hide');

                        if ($('[data-id="popup_title"]').html() == '編輯分享')
                            $('[data-id="deletePreview"]').hide();
                        else if ($('[data-id="popup_title"]').html() == '創建分享')
                            $('[data-id="deletePreview"]').show();

                        console.log('done');
                        resizeAfterShowPreview();
                    }
                    else {
                        $('.previewLink_error').removeClass('is--hide');
                        $('.previewLink_loading').addClass('is--hide');
                    }
                    submitting = false;
                }
            })
        },
        focus: function () {
            initLink($(this));
            var text = $(this).val();
            if (text == '') {
                $('[data-id="js-submitShare"]').addClass('disabled');
            } else {
                $('[data-id="js-submitShare"]').removeClass('disabled');
            }
        },
        keypress: function (e) {
            if (e.which == 13) e.preventDefault();
        },
        blur: function () {
            var text = $(this).val();
            if (text == '') {
                $('[data-id="js-submitShare"]').addClass('disabled');
            } else {
                $('[data-id="js-submitShare"]').removeClass('disabled');
            }
        }
    });

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




$(function () {
    $('.footer-trigger').click(function () {
        $(".footer").toggleClass("active--1");
    });
});


//report
$('.rrr').click(function () {
    swal({
        title: "檢舉",
        text: "你必須註冊或登入才能檢舉",
        showCancelButton: true,
        cancelButtonText: "取消",
        cancelButtonClass: 'sa-rapaq-cancel',
        confirmButtonText: "確定",
        confirmButtonClass: 'sa-rapaq-confirm confirm--mc',
        customClass: 'sa-rapaq double-btn'
    }).then(
        function (result) {
            window.location.href = 'https://qshare.rapaq.com/login';
        }
        ).catch(swal.noop);

    return false;
    if (submitting) {
        return false;
    }
    submitting = true;

    var data = {};
    data.type = $(this).parent('.more-item').attr('type_id');
    data.primary_id = $(this).parent('.more-item').attr('primary_id');
    var obj = $(this);

    $.ajax({
        url: "https://qshare.rapaq.com/report/reason_list",
        dataType: 'json',
        type: 'get',
        data: data,
        error: function (xhr, ajaxOptions, throwError) {
            alert('例外錯誤！\n(' + xhr.status + ") " + throwError);
            window.location.reload();
        },
        success: function (result) {
            if (result.result === true) {
                $('.report').find('*').remove();
                $('.report').append(result.html);

                $('.report, .mask-z').fadeIn(200);
                $('html, body').css({
                    overflow: 'hidden',
                    height: '100%'
                });

                var $container = $('.masonry-box');
                $('.icons__edit').removeClass('is--active');
                $('.list-inner-author__edit', $container).removeClass('is--active');
                $('.report__submit').addClass('is--disable');
                $('.morestyle', $container).hide();
                submitting = false;
            }
            else {
                alert('例外錯誤！');
                window.location.reload();
            }
        }
    });
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


$("body").on('click', '.report__submit', function () {
    if (submitting) {
        return false;
    }
    submitting = true;

    var data = {};
    data.type = $('.report-header').attr('type');
    data.report_reason = $("input[name='report-check']:checked").val();
    data.primary_id = $('.report-header').attr('primary_id');
    data.comment = $('.report-reporter__textarea').val();

    $.ajax({
        url: "https://qshare.rapaq.com/report/create",
        dataType: 'json',
        type: 'post',
        data: data,
        error: function (xhr, ajaxOptions, throwError) {
            alert('例外錯誤！\n(' + xhr.status + ") " + throwError);
            window.location.reload();
        },
        success: function (result) {
            if (result.result === true) {
                swal({
                    title: "送出檢舉",
                    text: "感謝您的告知，我們會盡快處理。",
                    confirmButtonText: "確定",
                    confirmButtonClass: 'sa-rapaq-confirm confirm--mc',
                    customClass: 'sa-rapaq single-btn'
                }).catch(swal.noop);
                $('.report, .mask-z').fadeOut(100);
                $('html, body').css({
                    overflow: 'auto',
                    height: 'auto'
                });
                submitting = false;
            }
            else {
                swal({
                    title: "檢舉失敗",
                    text: "請稍候再試一次！",
                    confirmButtonText: "確定",
                    confirmButtonClass: 'sa-rapaq-confirm confirm--red',
                    customClass: 'sa-rapaq single-btn'
                }).then(
                    function (result) {
                        window.location.reload();
                    }
                    );
            }
        }
    });

});


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