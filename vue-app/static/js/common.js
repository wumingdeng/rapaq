    console.log('load common.js')
    var a = false, b = false;
	
    var didScrollID;
    var didScroll = false,
        lastScrollTop = 0,
        delta = 120,
        Wheight = $(window).height();
        Wwidth = $(window).width();
	// //nav
	// $('.nav-load').load('/nav');
 //    $(window).resize(function () {
 //        Wheight = $(window).height();
 //        Wwidth = $(window).width();
 //    });
 //    function setTimer(){
 //        i = setInterval(function(){
 //            if (didScroll) {
 //                hasScrolled();
 //                didScroll = false;
 //            }
 //        }, 500);
 //        return i;
 //   }
    
 //    $(window).scroll(function (event) {
 //        if( a == false && b == false){
 //            didScroll = true;
 //        }
 //    });

 //    function hasScrolled() {
 //        clearInterval(didScrollID);
 //        var st = $(this).scrollTop();
 //        var $Tbottom = $(document).height() - Wheight - 120;
 //        if (st > lastScrollTop && st > Wheight){
 //            $('.nav').removeClass('is-active').addClass('is-hide');
 //            $('.nav-index').removeClass('nav-index--click');
            
 //            if ( st > $Tbottom ) {
 //                $('.nav').removeClass('is-hide').addClass('is-active');
 //                $('.nav-index').removeClass('nav-index--click');
                
 //            }
 //        } else {
 //            if(st + Wheight < $(document).height()) {
 //                $('.nav').removeClass('is-hide').addClass('is-active');
                
 //            }
 //        }
 //        if (st < $(".nav-content").height()) {
 //            $('.nav-index').addClass('nav-index--click');
 //            $('.mainbar-aside-search input').removeClass('is--focus');
 //        } else {
 //            $('.nav-index').removeClass('nav-index--click');
 //        }
        
 //        lastScrollTop = st;
 //        didScrollID = setTimer();
 //    }
   
	//footer
	$('.footer-load').load('/footer');
    $('.footer-trigger').click(function(){              
        $(".footer-load").slideToggle(500); 
        $(".footer-trigger__icon").toggleClass("is--active");

    });

    //copyright
    $('.footer-cy').load('/components/copyright.html');

    //like toggle
    $('.list__like').click(function(){
        $(this).toggleClass('is--active');
    });
    $('.list__share').click(function(){
        $(this).toggleClass('is--active');
    });

    
    //intro text limit
    var len1 = 150;
    var len2 = 120;
    var len3 = 85;
    $(".issue__intro").each(function(i){
        if($(this).text().length>len1){
            $(this).attr("title",$(this).text());
            var text=$(this).text().substring(0,len1-1)+"...";
            $(this).text(text);
        }
    });
    $(".focus__intro").each(function(i){
        if($(this).text().length>len2){
            $(this).attr("title",$(this).text());
            var text=$(this).text().substring(0,len2-1)+"...";
            $(this).text(text);
        }
    });
    $(".list__intro").each(function(i){
        if($(this).text().length>len3){
            $(this).attr("title",$(this).text());
            var text=$(this).text().substring(0,len3-1)+"...";
            $(this).text(text);
        }
    });
	

    /* 
        Load more content with jQuery - May 21, 2013
        (c) 2013 @ElmahdiMahmoud
    */
    // $(".s-plan-list > li").hide();
    // $(".s-plan-list > li").slice(0, 12).show();
    // $("#s-loadmore").on('click', function (e) {
    //     e.preventDefault();
    //     $(".s-plan-list > li:hidden").slice(0, 3).slideDown();
    //     if ($(".s-plan-list > li:hidden").length == 0) {
    //         $("#s-loadmore").fadeOut(500);
    //     }
    //     $('html,body').animate({
    //         scrollTop: $(this).offset().top-20
    //     }, 1500);
    // });
    var $collect = $(".m-plan-collect .m-plan-list > li");  
    $collect.hide();
    $collect.slice(0, 6).show();
    $("#m-collect-loadmore").on('click', function (e) {
        e.preventDefault();
        $(".m-plan-collect .m-plan-list > li:hidden").slice(0, 3).slideDown();
        if ($(".m-plan-collect .m-plan-list > li:hidden").length == 0) {
            $("#m-collect-loadmore").fadeOut(500);
        }
        $('html,body').animate({
            scrollTop: $(this).offset().top-20
        }, 1500);
    });
    //select effect
    $('.select-vb').click(function(){
        $(this).find('ul').slideToggle(10);
        $(this).find('span').toggleClass('is--select');
        $(this).parent().siblings().find('ul').hide().siblings().removeClass('is--select');
    });
    $('.select-wh').click(function(){
        $(this).find('ul').slideToggle(10);
        $(this).find('span').toggleClass('is--select');
    });
    $(document).mouseup(function (e){
        var $option = $('.select').find('ul');
        if ($option.has(e.target).length === 0)
        {
            $option.hide().siblings().removeClass('is--select');                
        }
    });
    $('.select ul li').click(function(){
        var str = "";
        $(this).each(function() {
          str += $( this ).text() + " ";
        });
        $(this).parent().siblings().text( str );
        $('.select-wh ul li').parent().siblings().text( str ).css('color','#666666');
    })

     //like btn unlock 
   $('.m-plan-list .list__like').click(function(){
    $(this).toggleClass('is--dislike');
   });


