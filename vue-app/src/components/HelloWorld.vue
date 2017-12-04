<template>
 <div class="wrapper">
        <!-- 鈴鐺  -->
        
        <!-- 首頁 -->
        <div class="rapaq">
            <div class="rapaq-waves">
                <div class="wave__graphic w1"></div>
                <div class="wave__graphic w2"></div>
                <div class="wave__graphic w3"></div>
                <div class="wave__graphic w4"></div>
                <div class="wave__graphic w5"></div>
            </div>
            <div class="rapaq-logo">
                <img src="../assets/rapaq.svg" alt="">
            </div>
            <div class="rapaq-facebook">
                <a href="https://zh-tw.facebook.com/rapaq/" target="_blank">
                    <div class="rapaq-facebook__fb"><img src="../assets/fb.svg" alt=""></div>
                    <div class="rapaq-facebook__keyword">RapaQ - 我的生活，由我設計</div>
                    <div class="rapaq-facebook__search">
                        <img src="../assets/search.svg" alt="">
                    </div>
                </a>
            </div>
        </div>
        <transition
          :duration="{enter:2000}"
          appear
          appear-class="qshare-appear-class">
          <div class="qshare qweb qshareAnimate" @click="onOpenShare">
              <div class="qweb-main">
                  <div class="qweb-main__category">社群</div>
                  <div class="qweb-main__title">
                      <div class="titleText">設群 Q'Share</div>
                  </div>
                  <div class="qweb-main__slogan">
                      <span>一起透過設群交流，</span>
                      <span>讓設計更貼近人心！</span>
                  </div>
                  <div class="qweb-main__btn">
                      <span class="btnLink">交流設計</span>
                      <span class="arrow-1"></span>
                      <span class="arrow-2"></span>
                  </div>
              </div>
              <div class="qweb__bgimg">
                  <img src="../assets/qshare-graphic.svg" alt="">
              </div>
          </div>
        </transition>
        <transition
          appear
          appear-class="qgoods-appear-class">
          <div class="qgoods qweb qgoodsAnimate" @click="onOpenGoods">
              <div class="qweb-main">
                  <div class="qweb-main__category">電商</div>
                  <div class="qweb-main__title">
                      <div class="titleText">好物 Q'Goods</div>
                  </div>
                  <div class="qweb-main__slogan">
                      <span>一起透過質感好物，</span>
                      <span>讓自己活出自己！</span>
                  </div>
                  <div class="qweb-main__btn">
                      <span class="btnLink">活出設計</span>
                      <span class="arrow-1"></span>
                      <span class="arrow-2"></span>
                  </div>
              </div>
              <div class="qweb__bgimg">
                  <img src="../assets/qgoods-graphic.svg" alt="">
              </div>
          </div>
        </transition>
        <transition
          appear
          appear-class="qmaker-appear-class">
          <div class="qmaker qweb qmakerAnimate" @click="onOpenMaker">
              <div class="qweb-main">
                  <div class="qweb-main__category">共創</div>
                  <div class="qweb-main__title">
                      <div class="titleText">創創 Q'Maker</div>
                  </div>
                  <div class="qweb-main__slogan">
                      <span>一起透過群眾力量，</span>
                      <span>讓所望成真！</span>
                  </div>
                  <div class="qweb-main__btn">
                      <span class="btnLink">支持設計</span>
                      <span class="arrow-1"></span>
                      <span class="arrow-2"></span>
                  </div>
              </div>
              <div class="qweb__bgimg">
                  <img src="../assets/qmaker-graphic.svg" alt="">
              </div>
          </div>
        </transition>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    onOpenShare() {

    },
    onOpenGoods() {

    },
    onOpenMaker() {

    }
  },
  mounted() {
    //opening animation
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.qshareAnimate {
  transition: all .8s;
  -webkit-transition-delay: 0.2s;
}
.qgoodsAnimate {
  transition: all .8s;
  -webkit-transition-delay: 0.5s;
}
.qmakerAnimate {
  transition: all .8s;
  -webkit-transition-delay: 1s;
}

.qshare-appear-class {
  opacity: 0;
  transform: translateY(100%);
}
.qgoods-appear-class {
  opacity: 0;
  transform: translateY(100%);
}
.qmaker-appear-class {
  opacity: 0;
  transform: translateY(100%);
}

/*.qshare-appear-active-class {
  opacity: 0;
  transform: translateY(100px);
}
.qshare-appear-to-class {
  transform: translateY(100px);
  opacity: 0
}*/

.rapaq {
  background-color: #f32440;
  width: 28.3%;
  height: 100%;
  position: relative;
  float: left;
  overflow: hidden;
}

.rapaq-logo {
  position: relative;
  width: 340px;
  height: 146px;
  top: 50%;
  left: 50%;
  margin-top: -91px;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
  z-index: 2;
  -webkit-transition: all .2s ease;
  -o-transition: all .2s ease;
  transition: all .2s ease;
}

.rapaq-logo img {
  width: 100%;
}

.rapaq-facebook {
  position: relative;
  width: 330px;
  height: 24px;
  top: 50%;
  left: 50%;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
  margin-top: 40px;
}

.rapaq-facebook__fb {
  width: 24px;
  height: 24px;
  margin-right: 6px;
  float: left;
}

.rapaq-facebook__keyword {
  text-align: left;
  background-color: #fff;
  border-radius: 2px;
  padding: 0 6px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  color: #000;
  line-height: 24px;
  font-size: 14px;
  width: 300px;
  float: left;
}

.rapaq-facebook__search {
  position: absolute;
  width: 46px;
  height: 24px;
  top: 0;
  right: 0;
  border-radius: 0 2px 2px 0;
  background-color: #f8f8f8;
  text-align: center;
}

.rapaq-facebook:after {
  clear: both;
  content: "";
  display: table;
}

.rapaq-waves {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.rapaq-waves::after {
  content: '';
  display: block;
  width: 100%;
  height: 100%;
}

@media only screen and (max-width: 1366px) {
  .rapaq {
    width: 35.5%;
  }
  .rapaq-logo {
    width: 280px;
    height: 120px;
  }
  .rapaq-facebook {
    width: 300px;
  }
  .rapaq-facebook__keyword {
    width: 270px;
  }
}

@media only screen and (max-width: 768px) {
  .rapaq {
    width: 100%;
    height: 355px;
    float: none;
    padding: 72px 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
}

@media only screen and (max-width: 480px) {
  .rapaq {
    padding: 37px 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    height: 204px;
  }
  .rapaq-logo {
    width: 200px;
    height: 86px;
    margin-top: -68px;
  }
  .rapaq-facebook {
    margin-top: 20px;
    width: 234px;
  }
  .rapaq-facebook__keyword {
    width: 204px;
    font-size: 12px;
  }
  .rapaq-facebook__search {
    width: 34px;
  }
}

.wave__graphic {
  position: absolute;
  left: 20%;
  width: 1250px;
  height: 1387px;
  -moz-border-radius: 42%;
  -webkit-border-radius: 42%;
  border-radius: 42%;
}

.wave__graphic.w1 {
  margin-top: -100px;
  background: #ed1c2e;
  opacity: 1;
  -webkit-animation: shift 10s infinite linear;
  animation: shift 10s infinite linear;
  margin-left: -8%;
}

.wave__graphic.w2 {
  margin-top: -50px;
  border: 25px solid #D7101D;
  width: 900px;
  height: 1080px;
  -moz-border-radius: 100%;
  -webkit-border-radius: 100%;
  border-radius: 100%;
  opacity: .3;
  -webkit-animation: shift 12s infinite linear;
  animation: shift 12s infinite linear;
}

.wave__graphic.w3 {
  border-width: 40px;
  border: 30px solid #C3111D;
  opacity: .5;
  -webkit-animation: shift 8s infinite linear;
  animation: shift 8s infinite linear;
}

.wave__graphic.w4 {
  margin-top: -80px;
  opacity: .7;
  -moz-border-radius: 60%;
  -webkit-border-radius: 60%;
  border-radius: 60%;
  width: 980px;
  height: 1120px;
  border: 35px solid #D7101D;
  -webkit-animation: shift 9s infinite linear;
  animation: shift 9s infinite linear;
}

.wave__graphic.w5 {
  margin-top: -40px;
  width: 1000px;
  height: 1200px;
  border: 40px solid #C3111D;
  -moz-border-radius: 45%;
  -webkit-border-radius: 45%;
  border-radius: 45%;
  opacity: .2;
  -webkit-animation: shift 14s infinite linear;
  animation: shift 14s infinite linear;
}

@media only screen and (max-width: 768px) {
  .wave__graphic {
    width: 700px;
    height: 900px;
    left: 30%;
  }
  .wave__graphic.w2 {
    width: 540px;
    height: 760px;
  }
  .wave__graphic.w4 {
    width: 630px;
    height: 940px;
    border-width: 28px;
  }
  .wave__graphic.w5 {
    width: 580px;
    height: 800px;
    border-width: 32px;
  }
}

@media only screen and (max-width: 480px) {
  .wave__graphic {
    width: 700px;
    height: 900px;
  }
  .wave__graphic.w2 {
    border-width: 18px;
  }
  .wave__graphic.w3 {
    border-width: 20px;
  }
  .wave__graphic.w4 {
    border-width: 20px;
  }
  .wave__graphic.w5 {
    border-width: 22px;
  }
}

@-webkit-keyframes shift {
  from {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes shift {
  from {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

.qweb {
  position: relative;
  float: left;
  width: 23.9%;
  height: 100%;
  background-color: #fff;
  border-left: 3px solid #f8f8f8;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  text-align: center;
  cursor: pointer;
  overflow: hidden;
}

.qweb:before {
  content: "";
  position: absolute;
  z-index: 0;
  height: 150%;
  width: 150%;
  border-radius: 100%;
  top: 2%;
  left: -150%;
  -webkit-transition: all .5s;
  -o-transition: all .5s;
  transition: all .5s;
  opacity: 0\0;
}

@-moz-document url-prefix() {
  .qweb:before {
    opacity: 0;
  }
}

.qweb-main {
  position: relative;
  height: 288px;
  top: 50%;
  margin-top: -144px;
}

.qweb-main__category {
  position: relative;
  font-size: 12px;
  color: #7c7c7c;
  -webkit-transition: all .5s;
  -o-transition: all .5s;
  transition: all .5s;
}

.qweb-main__category:before {
  display: block;
  content: '';
  position: absolute;
  width: 20px;
  height: 1px;
  background-color: #9b9b9b;
  top: 8px;
  left: 50%;
  margin-left: -40px;
}

.qweb-main__category:after {
  display: block;
  content: '';
  position: absolute;
  width: 20px;
  height: 1px;
  background-color: #9b9b9b;
  top: 8px;
  right: 50%;
  margin-right: -40px;
}

.qweb-main__title {
  margin-top: 30px;
  line-height: 1;
  height: 100px;
  -webkit-transition: all .5s;
  -o-transition: all .5s;
  transition: all .5s;
}

.qweb-main__title .titleText {
  font-weight: 500;
  display: none;
}

.qweb-main__slogan {
  position: relative;
  margin-top: 20px;
  font-size: 18px;
  color: #4a4a4a;
  -webkit-transition: all .5s;
  -o-transition: all .5s;
  transition: all .5s;
}

.qweb-main__slogan span {
  display: block;
}

.qweb-main__btn {
  position: relative;
  margin: 40px auto 0;
  width: 124px;
  height: 48px;
  line-height: 48px;
  background-color: #fff;
  -moz-border-radius: 100px;
  -webkit-border-radius: 100px;
  border-radius: 100px;
  -webkit-transition: all .5s;
  -o-transition: all .5s;
  transition: all .5s;
}

.qweb-main__btn .btnLink {
  margin-left: -10px;
}

.qweb-main__btn .arrow-1, .qweb-main__btn .arrow-2 {
  display: inline-block;
  position: absolute;
  width: 8px;
  height: 1px;
  margin-top: 20px;
  margin-left: 7px;
  -webkit-transform: translateY(0px) rotate(36deg);
  -ms-transform: translateY(0px) rotate(36deg);
  transform: translateY(0px) rotate(36deg);
}

.qweb-main__btn .arrow-2 {
  margin-top: 19px;
  -webkit-transform: translateY(5px) rotate(-36deg);
  -ms-transform: translateY(5px) rotate(-36deg);
  transform: translateY(5px) rotate(-36deg);
}

.qweb-main__btn a {
  width: 100%;
  height: 100%;
  display: block;
}

.qweb__bgimg {
  position: absolute;
  right: 0;
  bottom: 0;
}

@media only screen and (max-width: 1366px) {
  .qweb {
    width: 21.5%;
  }
}

@media only screen and (max-width: 768px) {
  .qweb {
    float: none;
    width: 100%;
    height: auto;
    height: calc((100vh - 355px) / 3);
    padding: 40px 30px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border-left: 0px;
    border-top: 3px solid #f8f8f8;
  }
  .qweb-main {
    height: auto;
    top: 0;
    margin-top: 0;
  }
  .qweb-main__category {
    display: none;
  }
  .qweb-main__title {
    margin-top: 0;
    background: none !important;
    height: auto;
  }
  .qweb-main__title .titleText {
    display: block;
    font-size: 36px;
  }
  .qweb-main__slogan {
    margin-top: 10px;
  }
  .qweb-main__slogan span {
    display: inline-block;
  }
  .qweb-main__btn {
    margin-top: 20px;
  }
  .qweb__bgimg {
    display: none;
  }
}

@media only screen and (max-width: 736px) {
  .qweb {
    padding: 30px 30px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    height: calc((100vh - 204px) / 3);
    min-height: 80px;
  }
  .qweb-main {
    position: relative;
    height: 100%;
  }
  .qweb-main__title {
    position: absolute;
    top: 50%;
    margin-top: -24px;
  }
  .qweb-main__title .titleText {
    text-align: left !important;
    font-size: 24px;
  }
  .qweb-main__slogan {
    position: absolute;
    bottom: 0;
    text-align: left !important;
    font-size: 14px;
    top: 50%;
  }
  .qweb-main__btn {
    width: 2px;
    height: 2px;
    border: 0 !important;
    position: absolute;
    right: 0px;
    top: 50%;
    margin-top: -24px;
  }
  .qweb-main__btn .btnLink {
    display: none;
  }
}

@media only screen and (max-width: 320px) {
  .qweb {
    padding: 37px 24px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
}

.qweb.is--hover:before {
  top: 0;
  left: -25%;
  border-radius: 10%;
}

.qweb.is--hover .qweb-main__category {
  color: #fff;
}

.qweb.is--hover .qweb-main__category:before, .qweb.is--hover .qweb-main__category:after {
  background-color: #fff;
}

.qweb.is--hover .qweb-main__title .titleText {
  color: #fff;
}

.qweb.is--hover .qweb-main__slogan {
  color: #fff;
}

.qweb.is--hover .qweb-main__btn {
  -webkit-box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.1);
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.1);
}

.qshare .qweb-main__title {
  background: url("../assets/title-qshare-default.svg") 50% 50% no-repeat;
  color: #00d2cd;
}

.qshare .qweb-main__btn {
  color: #00d2cd;
  border: 1px solid #00d2cd;
}

.qshare .qweb-main__btn .arrow-1, .qshare .qweb-main__btn .arrow-2 {
  background-color: #00d2cd;
}

.qshare:before {
  background-color: #00d2cd;
}

@-moz-document url-prefix() {
  .qshare.is--hover {
    background-color: #00d2cd;
  }
}

.qshare.is--hover .qweb-main__title {
  background: url("../assets/title-qshare-hover.svg") 50% 50% no-repeat;
}

.qmaker .qweb-main__title {
  background: url("../assets/title-qmaker-default.svg") 50% 50% no-repeat;
  color: #5a11bd;
}

.qmaker .qweb-main__btn {
  color: #5a11bd;
  border: 1px solid #5a11bd;
}

.qmaker .qweb-main__btn .arrow-1, .qmaker .qweb-main__btn .arrow-2 {
  background-color: #5a11bd;
}

.qmaker:before {
  background-color: #5a11bd;
}

@-moz-document url-prefix() {
  .qmaker.is--hover {
    background-color: #5a11bd;
  }
}

.qmaker.is--hover .qweb-main__title {
  background: url("../assets/title-qmaker-hover.svg") 50% 50% no-repeat;
}

.qgoods .qweb-main__title {
  background: url("../assets/title-qgoods-default.svg") 50% 50% no-repeat;
  color: #f7b500;
}

.qgoods .qweb-main__btn {
  color: #f7b500;
  border: 1px solid #f7b500;
}

.qgoods .qweb-main__btn .arrow-1, .qgoods .qweb-main__btn .arrow-2 {
  background-color: #f7b500;
}

.qgoods:before {
  background-color: #f7b500;
}

.qgoods .qweb__bgimg {
  width: 320px;
  right: -10px;
}

.qgoods .qweb__bgimg img {
  width: 100%;
}

@-moz-document url-prefix() {
  .qgoods.is--hover {
    background-color: #f7b500;
  }
}

.qgoods.is--hover .qweb-main__title {
  background: url("../assets/title-qgoods-hover.svg") 50% 50% no-repeat;
}

.notify {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 44px;
  height: 44px;
  -moz-border-radius: 50px;
  -webkit-border-radius: 50px;
  border-radius: 50px;
  background-color: #fff;
  z-index: 5;
  -webkit-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.15);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.15);
  -webkit-transition: all .5s ease;
  -o-transition: all .5s ease;
  transition: all .5s ease;
}

.notify-icon {
  width: 44px;
  height: 44px;
  position: absolute;
  top: 0px;
  right: 0px;
  cursor: pointer;
  /*background: transparent url("../assets/icon-noti.svg") 50% 50% no-repeat;*/
}

.notify-text {
  display: none;
  width: calc(100% - 64px);
  font-size: 12px;
  text-align: left;
}

.notify-text-word {
  text-align: left;
  width: 0;
  height: 28px;
  overflow: hidden;
  display: inline-block;
  color: #2e2e2e;
  font-weight: bold;
  font-size: 16px;
  margin-bottom: -10px;
}

.notify-text-btn {
  display: inline-block;
  width: 72px;
  height: 28px;
  background-color: #2e2e2e;
  font-size: 12px;
  text-align: center;
  line-height: 28px;
  font-weight: normal;
  color: #fff;
  margin-left: 20px;
  -moz-border-radius: 50px;
  -webkit-border-radius: 50px;
  border-radius: 50px;
}

.notify-text-btn a {
  width: 100%;
  height: 100%;
  display: block;
  color: #fff;
}

@media only screen and (max-width: 768px) {
  .notify {
    -webkit-transition: all .3s ease;
    -o-transition: all .3s ease;
    transition: all .3s ease;
  }
}

@media only screen and (max-width: 480px) {
  .notify {
    top: 14px;
    right: 14px;
  }
}

.notify.is--click {
  width: 71.7%;
  width: calc(71.7% - 3px);
  right: 0;
  top: 0;
  -moz-border-radius: 0px;
  -webkit-border-radius: 0px;
  border-radius: 0px;
  padding: 30px 20px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  display: table;
}

.notify.is--click .notify-icon {
  top: 20px;
  right: 20px;
  /*background: transparent url("../assets/icon-close.svg") 50% 50% no-repeat;*/
}

.notify.is--click .notify-text {
  display: block;
}

.notify.is--click .notify-text-word {
  -webkit-animation: showtext .8s ease-in-out 1 forwards;
  animation: showtext .8s ease-in-out 1 forwards;
}

@media only screen and (max-width: 1366px) {
  .notify.is--click {
    width: 64.5%;
    width: calc(64.5% - 3px);
  }
  .notify.is--click .notify-text-btn {
    display: block;
    margin-left: 0;
    margin-top: 14px;
  }
}

@media only screen and (max-width: 768px) {
  .notify.is--click {
    width: 100%;
  }
}

@media only screen and (max-width: 480px) {
  .notify.is--click {
    padding: 24px 20px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
}

@-webkit-keyframes showtext {
  0%, 40% {
    width: 0;
    height: 28px;
    opacity: 0;
  }
  41%, 100% {
    opacity: 1;
    width: auto;
    height: auto;
  }
}

@keyframes showtext {
  0%, 40% {
    width: 0;
    height: 28px;
    opacity: 0;
  }
  41%, 100% {
    opacity: 1;
    width: auto;
    height: auto;
  }
}
</style>
