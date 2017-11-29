/**
 * Created by Administrator on 2017-11-28.
 */
$(function () {
  var url = urls.categorytitle;//title请求地址
  var url2 =urls.category;//商品请求地址
  
  //渲染title
  route.getInfo(url,function (info) {
      $(".category ul").html(template("tmp",info));
    
    //点击title,渲染商品页面
      $(".category .title").on("click","",function () {
        $this = $(this);
        if(!$this.hasClass("havedone")){
          var id = $(this).data("id");
          route.getData(url2,{titleid:id},function (data) {
            console.log(data);
            $this.addClass("havedone").next().find("ul").html(template("tmp2",data));
          })
        }else{
          $this.next().find("ul").toggle()
        }
      })
      
      
  })
})