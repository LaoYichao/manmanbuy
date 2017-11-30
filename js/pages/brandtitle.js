/**
 * Created by Administrator on 2017-11-30.
 */
$(function () {
  var url = urls.brandtitle;
  route.getInfo(url,function (data) {
    console.log(data);
    $(".brand ul").html(template("tmp",data))
  })
})