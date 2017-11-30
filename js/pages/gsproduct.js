/**
 * Created by Administrator on 2017-11-30.
 */
$(function () {
  var url1 = urls.gsshop;//获取店铺的信息
  var url2 = urls.gsshoparea;//获取区域的信息
  var url3 = urls.gsproduct//获取商品信息
  //点击店铺按钮,出现下拉框
  $("#shop").on("click", function () {
    $(".shop").slideToggle(300)
  })
  //点击区域按钮，出现下拉框
  $("#area").on("click", function () {
    $(".area").slideToggle(300)
  })
  // 点击价格按钮，出现下拉框
  $("#allprice").on("click", function () {
    $(".allprice").slideToggle(300)
  })
  
  //渲染店铺信息
  route.getInfo(url1, function (data) {
    console.log(data);
    $("#shop span").text(data.result[0].shopName);//渲染第一个名字
    $(".shop").html(template("tmp1", data));//渲染下拉框
    $(".shop li").eq(0).addClass("active");
    
  })
  //点击店铺的下拉框信息
  $(".shop").on("click", "li", function () {
    
    $("#shop span").text($(this).text());//改变文字
    //增加一个变色的类
    $(this).addClass("active").siblings().removeClass("active");
    $(".shop").slideToggle(300);
    
    var shopid = $(this).data("id");
    var areaid = $(".area .active").data("id");
    //重新渲染
    render(shopid,areaid)
  })
  
  //渲染区域信息
  route.getInfo(url2, function (data) {
    console.log(data);
    var area = data.result[0].areaName.substring(0, 2)//截取前2个字
    $("#area span").text(area);
    $(".area").html(template("tmp2", data))//渲染下拉框
    $(".area li").eq(0).addClass("active");//给第一个li变色类
  })
  
  //点击区域下拉框信息
  $(".area").on("click", "li", function () {
    var text = $(this).text().substring(0, 2)
    $("#area span").text(text);//改变文字
    //增加一个变色的类
    $(this).addClass("active").siblings().removeClass("active");
    $(".area").slideToggle(300);
    
    var shopid = $(".shop .active").data("id");
    var areaid = $(this).data("id")
    //重新渲染
    render(shopid,areaid)
  })
  
  //封装渲染商品
  function render(shopid,areaid) {
    route.getData(url3,{shopid:shopid,areaid:areaid},function (data) {
      console.log(data);
      $(".product ul").html(template("tmp3",data));
    })
  }
  render(0,0)
})