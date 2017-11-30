/**
 * Created by Administrator on 2017-11-30.
 */
$(function () {
  var url = urls.coupon;
  route.getInfo(url,function (data) {
    console.log(data);
    $(".cou_title ul").html(template("tmp",data))
  })
})