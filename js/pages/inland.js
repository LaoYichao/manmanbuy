/**
 * Created by Administrator on 2017-11-29.
 */
$(function () {
  var url = urls.inlanddiscount;
  route.getInfo(url,function (data) {
    console.log(data);
    $(".item ul").html(template("tmp1",data))
  })
})