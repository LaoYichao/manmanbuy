/**
 * Created by Administrator on 2017-11-29.
 */
$(function () {
  var url1 = urls.categorybyid;//获取商品列表名称的地址
  var url2 = urls.product;//获取商品详细信息的地址
  var url3 = urls.productcom//获取商品评论
  var productid = getKey("productid");//商品的id
  var categoryid = getKey("categoryid");//商品列表的id,用来面包屑部分返回上级
  var brandName = getKey("brandName");
  //渲染面包屑
  route.getData(url1, {categoryid : categoryid}, function (data) {
    $(".crumbs").html(template("tmp1",data));
    $(".productname").text(brandName);
  })
  
  //渲染商品详细信息
  route.getData(url2, {productid : productid}, function (data) {
    console.log(data);
    $(".detil").html(template("tmp2",data))
  });
  
  //渲染商品评论
  route.getData(url3, {productid : productid}, function (data) {
    console.log(data);
    $(".all_com").html(template("tmp3",data))
  });
  
})