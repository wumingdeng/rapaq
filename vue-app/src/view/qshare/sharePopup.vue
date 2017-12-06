<template>
<div class="popup popup--small" data-id="#sharePopup" data-popup="share">
  <div class="popup_title">
    <span data-id="popup_title">創建分享</span>
    <a href="#" class="popup_close" data-id="js-closePopup"></a>
  </div>
  <div class="popup_content popup_content--share" data-id="allCate" share_type="1" article_type="0" article_id="0">
    <div class="share_content">
      <div class="popup_create">
        <div class="create_form_description create_form_description--share">
          <div class="publisher">
            <div class="publisher_image"><img src=""></div>
            <div class="publisher_text">
              <div class="name"></div>
              <div class="date">2017-12-04 17:15:05</div>
            </div>
          </div>
          <textarea placeholder="想說什麼呢？分享你的想法" class="txtarea txtarea--comment" data-id="description"></textarea>
        </div>
      </div>
      <div class="popup_create popup_create--link">
        <textarea placeholder="輸入網址 https" class="txtarea txtarea--link" data-id="previewLink"></textarea>
        <div class="previewLink">
          <div class="previewLink_loading is--hide">載入預覽中...</div>
          <div class="previewLink_error is--hide">格式輸入錯誤</div>
          <div class="previewLink_result is--hide"></div>
        </div>
      </div>
    </div>
    <div class="popup_create popup_create--publish publish">
      <div class="publish">
        <div class="publish_to">
          <div class="title">發佈對象</div>
          <span class="switch" data-id="js-publishto">公開</span>
        </div>
        <div class="publish_option">
          <div class="options">
            <input id="open" type="radio" name="publishto" data-id="choosePublish" data-value="公開" value="1" checked="">
            <!DOCTYPE html>
            <html>

            <head>
              <title></title>
            </head>

            <body>
            </body>

            </html>
            <label for="open">公開</label>
          </div>
          <div class="options">
            <input id="self" type="radio" name="publishto" data-id="choosePublish" data-value="自己" value="2">
            <label for="self">自己</label>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="popup_action popup_action--single clearfix">
    <div class="popup_action_container">
      <button type="button" class="create_btn create_btn-submit disabled" data-id="js-submitShare">發佈</button>
    </div>
  </div>
</div>

</template>