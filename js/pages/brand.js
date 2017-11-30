/**
 * Created by Administrator on 2017-11-30.
 */
$(function () {
  var url = urls.brand;
  var id = getKey("brandtitleid");
  route.getData(url,{brandtitleid:id},function (data) {
    console.log(data);
  })
})