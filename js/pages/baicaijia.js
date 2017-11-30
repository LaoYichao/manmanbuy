/**
 * Created by Administrator on 2017-11-29.
 */
$(function () {
  var url = urls.baicaijiatitle;//获取title地址
  var url2 = urls.baicaijiaproduct;//商品地址
  
  //渲染标题
  route.getInfo(url,function (data) {
    console.log(data);
    $(".warp ul").html(template("tmp",data));
    $(".warp ul li").eq(0).addClass("active");
    
    //点击title，重新渲染页面
    $(".warp ul ").on("click","li",function () {
      $(this).addClass("active").siblings().removeClass("active");
      var id = $(this).data("id");
      //渲染产品
      route.getData(url2,{titleid:id},function (data) {
        $(".products").html(template("tmp2",data))
      })
    })
    
  });
  
  //渲染产品
  route.getData(url2,{titleid:0},function (data) {
    $(".products").html(template("tmp2",data))
  })
})