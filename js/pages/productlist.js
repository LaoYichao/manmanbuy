/**
 * Created by Administrator on 2017-11-29.
 */
$(function () {
  // var url = urls.categorybyid;//二级分类名称地址
  var url2 = urls.productlist;//商品列表数据地址
  var id = getKey("categoryid");
  var category = getKey("category");
  $(".categoryname").text(category);
  //二级分类名称，直接通过url传递过来，少请求一次
  // route.getData(url,{categoryid:id},function (data) {
  //   console.log(data);
  // })
  
  
  //渲染页面
  route.getData(url2,{categoryid:id,pageid:1},function (data) {
    console.log(data);
    //渲染商品列表
    $(".items").html(template("tmp",data));
    //渲染下拉菜单
    var maxpage = Math.ceil((data.totalCount/data.pagesize))
    var html = template("tmp2",{page:maxpage});
    $("select").html(html);
    
    //分页
    $("select").on("change",function () {
      var page = $(this).val();
      route.getData(url2,{categoryid:id,pageid:page},function (data) {
        $(".items").html(template("tmp",data));
      });
      window.scrollTo(0,0);
    });
  
    //点击上一页
    $(".prev").on("click",function () {
      var page = $("select").val();
      if(page-1>0){
        route.getData(url2,{categoryid:id,pageid:page-1},function (data) {
          $(".items").html(template("tmp",data))
        });
        window.scrollTo(0,0);
        $("select").val(page-1)
      }else{
        alert("已经是第一页了！！");
      }
    });
    
    //点击下一页
    $(".next").on("click",function () {
      var page = $("select").val();
      if(page==maxpage){
        alert("已经是最后一页了");
      }else{
        page++;
        route.getData(url2,{categoryid:id,pageid:page},function (data) {
          $(".items").html(template("tmp",data));
        });
        window.scrollTo(0,0);
        $("select").val(page);
      }
    })
  });
 
})