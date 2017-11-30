/**
 * Created by Administrator on 2017-11-30.
 */
$(function () {
  var url = urls.couponproduct;
  var id = getKey("couponid");
  route.getData(url,{couponid:id},function (data) {
    console.log(data);
    $(".foods ul").html(template("tmp",data));
    $(".foods ul").on("click","li",function(){
      var imgurl = $(this).find("img").prop("src");
      location.href=imgurl;
    })
  })
})