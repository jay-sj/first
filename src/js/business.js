;(function(){
    var div1 = document.querySelectorAll("#business-list>li");
    var div2 = document.querySelectorAll("main>div");
    for(var i=0;i<div1.length;i++){
        div1[i].index = i;
        div1[i].onclick = function(){
            for(var j =0;j<div1.length;j++){
                div1[j].className="";
                div2[j].style.display="none";
            }
            this.className="active-bu";
            div2[this.index].style.display="block";
        }
    }
}())