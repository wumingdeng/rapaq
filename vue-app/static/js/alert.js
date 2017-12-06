function notlogin(url) {
  swal({
    title: "尚未登入",
    html: "是否要登入使用功能？",
    type: "warning",
    showCancelButton: true,
    confirmButtonText: "是",
    cancelButtonText: "否",
    confirmButtonClass: 'sa-rapaq-confirm confirm--mc',
    customClass: 'sa-rapaq single-btn'    
  }).then(function () {
      location.href=url;
  });
}

function swal_result(title, content, type) {
  swal({
    title: title, 
    html: content, 
    type: type,
    confirmButtonText: "確定",
    confirmButtonClass: 'sa-rapaq-confirm confirm--mc',
    customClass: 'sa-rapaq single-btn'
  });
}

function comingsoon() {
    swal({
        title: "敬請期待",
        text: "Coming soon!!",
        confirmButtonText: "確定",
        confirmButtonClass: 'sa-rapaq-confirm confirm--mc',
        customClass: 'sa-rapaq single-btn'
    });
}