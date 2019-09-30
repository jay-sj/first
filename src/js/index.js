$(function(){
	var ione = $(".one"),
		ithe = $(".the"),
		itwo = $(".two img"),
		tthe = $(".the img");
	
	var arr = ["images/s-smail.jpg"];
	var oarr = ["images/su-big.jpg"];
	itwo.each(function(i){
		$(this).click(function(){
			$(".one img").attr("src",arr[i])
			tthe.attr("src",oarr[i])
			itwo.removeClass("active")
			$(this).addClass("active")
		})
		
		ione.mousemove(function(a){
			var evt = a || window.event
			ithe.css('display','block')
			var ot = evt.clientY-($(".one").offset().top- $(document).scrollTop())-87;
			var ol = evt.clientX-($(".one").offset().left- $(document).scrollLeft())-87;
			if(ol<=0){
				ol = 0;
			}
			if(ot<=0){
				ot = 0;
			}
			if(ol>=280){
				ol=280
			}
			if(ot>=280){
				ot=280
			}
			$("span").css({'left':ol,'top':ot})
			var ott = ot/458*800
			var oll = ol/458*800
			tthe.css({'left':-oll,'top':-ott})
		})
		ione.mouseout(function(){
			ithe.css('display','none')
		})
		
	})
	
	
	
	
})
