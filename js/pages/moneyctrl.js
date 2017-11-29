/**
 * Created by Administrator on 2017-11-29.
 */
$(function () {
 var url = urls.moneyctrl;
 //渲染页面
 route.getData(url,{pageid :1},function (data) {
   $(".item").html(template("tmp1",data));
   var maxpage = Math.ceil(data.totalCount/data.pagesize)
   $("select").html(template("tmp2",{page:maxpage}));
   
   //分页
   $("select").on("change",function () {
     var page = $(this).val();
     route.getData(url,{pageid:page},function (data) {
       console.log(data);
       $(".item").html(template("tmp1",data));
     });
     window.scrollTo(0,0);
   });
  
   //点击上一页
   $(".prev").on("click",function () {
     var page = $("select").val();
     if(page-1>0){
       route.getData(url,{pageid:page-1},function (data) {
         $(".item").html(template("tmp1",data));
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
       route.getData(url,{pageid:page},function (data) {
         $(".item").html(template("tmp1",data));
       });
       window.scrollTo(0,0);
       $("select").val(page);
     }
   })
 })
})