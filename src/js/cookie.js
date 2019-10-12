 // 设置cookie
 function setCookie(name, value, maxAge) {
     // maxAge number  5天后
     var date = new Date();
     date.setDate(date.getDate() + maxAge);
     document.cookie = name + "=" + encodeURI(value) + ";expires=" + date.toGMTString();
 }

 function getCookie(name) {
     // 获取所有的cookie
     var cookies = decodeURI(document.cookie);
     var arr = cookies.split("; ");
     //console.log(arr);
     for (var i = 0; i < arr.length; i++) {
         var arr2 = arr[i].split("=");
         if (name == arr2[0]) {
             return arr2[1];
         }
     }
 }

 function removeCookie(name) {
     setCookie(name, "", -1)
 }
 //清除cookie  