window.fbAsyncInit = function() {
  FB.init({
    appId      : '130875160948789',
    xfbml      : true,
    version    : 'v2.11'
  });
  FB.AppEvents.logPageView();
};

(function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "https://connect.facebook.net/en_US/sdk.js";
   fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));


function onButtonClick() {
  // Add this to a button's onclick handler
  FB.AppEvents.logEvent("sentFriendRequest");
}
