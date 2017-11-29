/**
 * Created by Administrator on 2017-11-29.
 */
$(function () {
    var url = urls.discountproduct;
    var id = getKey("productid");
    route.getData(url,{productid :id},function (data) {
      console.log(data);
      $(".pro_detil").html(template("tmp1",data))
    })
})