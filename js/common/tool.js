/**
 * Created by Administrator on 2017-11-29.
 */
function urlObj() {
  var search  =decodeURI(location.search);
  //去除？    name=zs&age=18&desc=呵呵呵
  search = search.slice(1);
  //把search切割成一个数组    ["name=zs", "age=18", "desc=呵呵呵"]
  var arr = search.split("&");
  var obj = {};
  arr.forEach(function (v,i) {
    var value = v.split("=")[1];
    var key = v.split("=")[0];
    obj[key] = value
  })
  return obj;
}
function getKey(key) {
  return urlObj()[key];
};