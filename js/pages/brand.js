/**
 * Created by Administrator on 2017-11-30.
 */
$(function () {
  var url = urls.brand;//获取品牌的地址
  var url2 = urls.brandproductlist;//获取销量地址
  var url3 = urls.productcom;//获取评论地址
  var id = getKey("brandtitleid");
  var title = getKey("brandTitle");
  var brandtitle = title.substring(0,title.length-4);
  $(".main .title span").text(brandtitle);
  
  //渲染品牌
  route.getData(url,{brandtitleid:id},function (data) {
    console.log(data);
    $(".brand ul").html(template("tmp1",data));
    $(".brand ul li .m-fl").eq(0).addClass("first");
    $(".brand ul li .m-fl").eq(1).addClass("second");
    $(".brand ul li .m-fl").eq(2).addClass("third");
    
    $(".brand ul li").on("click",function () {
        var id = $(this).data("id");
        var name = $(this).data("name");
        name = name.substring(name.length-2,name.length);
        var url = "productlist.html?categoryid="+id+"&category="+name+""
        $(this).find("a").attr("href",url)
    })
  })
  
  //渲染销量
  route.getData(url2,{brandtitleid:id,pagesize:4},function (data) {
    console.log(data);
    $(".sales ul").html(template("tmp2",data));
  
  
    //渲染评论(销量第一的)
    var nbone = data.result[0].productId;
    console.log(nbone);
    route.getData(url3,{productid :nbone},function (info) {
      console.log(info);
      $(".comment ul").html(template("tmp3",info));
      $(".comment ul .product").html(template("tmp4",data));
    })
  })
  
  
})