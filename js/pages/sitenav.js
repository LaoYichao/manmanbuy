/**
 * Created by Administrator on 2017-11-30.
 */
$(function () {
  var url = urls.sitenav;
  route.getInfo(url,function (data) {
    console.log(data);
    $(".shopnav ul").html(template("tmp",data))
  })
})