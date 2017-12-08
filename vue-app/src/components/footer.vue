<template>
	<footer class="footer">
	  <div class="footer-trigger">
	    <ul class="footer-trigger__icon">
	      <li class="trigger-top"></li>
	      <li class="trigger-middle"></li>
	      <li class="trigger-bottom"></li>
	    </ul>
	  </div>
	  <div class="footer-line"></div>
	  <div class="footer-load loadbg--1">
	    <div class="footer-content">
	      <div class="footer-content-platform">
	        <div class="platform__logo">
	        </div>
	        <ul class="platform-menu">
	          <li><a href="https://qshare.rapaq.com/index">首頁</a></li>
	          <li><a href="https://qshare.rapaq.com/works/index">作品</a></li>
	          <li><a href="https://qshare.rapaq.com/blog/index">文章</a></li>
	          <li><a href="https://qshare.rapaq.com/event/index">活動</a></li>
	          <li class="platform-menu__creat mc">創建</li>
	        </ul>
	      </div>
	      <div class="footer-content-common">
	        <ul class="common-company">
	          <li><a href="http://rapaq.com/" target="_blank">關於RAPAQ</a></li>
	          <li><a href="https://www.104.com.tw/jobbank/custjob/index.php?r=cust&j=503a426b34363e6730323a63383e3619729292929415c366785j48&jobsource=checkc" target="_blank">人才招募</a></li>
	          <li><a href="https://oauth.rapaq.com/privacy.html" target="_blank">隱私政策</a></li>
	          <li><a href="https://oauth.rapaq.com/terms.html" target="_blank">使用條款</a></li>
	          <li><a href="mailto:service@rapaq.com">聯絡我們</a></li>
	        </ul>
	      </div>
	    </div>
	  </div>
	  <div class="footer-cy">
	    <ul class="footer-cy-content">
	      <li>© 2017 RAPAQ All Rights Reserved 版權所有</li>
	    </ul>
	  </div>
	</footer>
</template>

<script>
	export default {
		mounted() {
		  $('.footer-trigger').click(function() {
		    $(".footer").toggleClass("active--1");
		  });
		  //footer
			// $('.footer-load').load('/footer');
	    $('.footer-trigger').click(function(){              
	        $(".footer-load").slideToggle(500); 
	        $(".footer-trigger__icon").toggleClass("is--active");

	    });

	    //copyright
	    // $('.footer-cy').load('/components/copyright.html');

	    //like toggle
	    // $('.list__like').click(function(){
	    //     $(this).toggleClass('is--active');
	    // });
	    // $('.list__share').click(function(){
	    //     $(this).toggleClass('is--active');
	    // });
		}
	}
</script>