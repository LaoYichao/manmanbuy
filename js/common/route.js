( function( ) {
  
  var route = {
    baseUrl: "http://127.0.0.1:9090/",
    // 获取主页菜单栏数据
    getData:getData,
    getInfo:getInfo
  };
  //请求的所有地址
   var urls = {
     indexmenu:"api/getindexmenu",
     moneyctrl:"api/getmoneyctrl",
     categorytitle:"api/getcategorytitle",
     category:"api/getcategory",
   }
  // 获取数据的 ajax 请求
  function getInfo( url,callback ) {
    var url = route.baseUrl + url;
    $.ajax({
      type:"get",
      url:url,
      success:function (info) {
        callback(info)
      }
    })
  };
  function getData( url,data,callback ) {
    var url = route.baseUrl + url;
    $.ajax({
      type:"get",
      url:url,
      data:data,
      success:function (info) {
        callback(info)
      }
    })
  };
  window.route = route;
  window.urls = urls;
} )( );