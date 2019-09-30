(function(){
    var div1 = document.querySelectorAll(".nav-option-l>div");
    var div2 = document.querySelectorAll(".nav-option-r>div");
    for(var i=0;i<div1.length;i++){
        div1[i].index = i;
        div1[i].onmouseover = function(){
            for(var j =0;j<div1.length;j++){
                div1[j].className="";
                div2[j].style.display="none";
            }
            this.className="act";
            div2[this.index].style.display="block";
        }
    }
}())