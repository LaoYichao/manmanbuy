/**
 * Created by Administrator on 2017-11-29.
 */
$(function () {
  var url = urls.moneyctrlproduct;
  var productid = getKey("productid");
  route.getData(url,{productid:productid},function (data) {
    console.log(data);
    $(".product_info").html(template("tmp",data));
  })
})