/**
 * Created by Administrator on 2017-11-28.
 */
$(function () {
  //请求nav菜单栏
  var url = urls.indexmenu;
  route.getInfo(url,function (data) {
    var html1 = template("tmp1",data);
    var html2 = template("tmp2",data);
    $("nav .show").html(html1);
    $("nav .hide").html(html2).hide();
    $(".show li").eq(7).on("click",function () {
      $("nav .hide").toggle()
    })
    
  });
 
  //请求推荐栏数据
  var url2 = urls.moneyctrl
  route.getInfo(url2,function (data) {
    $(".items").html(template("tmp3",data))
  });
  
})