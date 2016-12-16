// JavaScript Document
//适用于新老浏览器
function getElementsByClassName(node,classname){
	if(node.getElementsByClassName){
		//使用现有方法
		return node.getElementsByClassName(classname);
	} else{
		var results=new Array();
		var elems=node.getElementsByTagName("*");
		for(var i=0;i<elems.length;i++){
			if(elems[i].className.indexOf(classname)!=-1){
				results[results.length]=elems[i];
			}
		}
		return results;
	}
}



window.onload=function (){
	//使用ID取元素
	var app_QRcode_dl=document.getElementById("app_QRcode_dl");
	var app_QRcode_img=document.getElementById("app_QRcode_img");
	app_QRcode_dl.onmouseover=function (){
		app_QRcode_img.style.display="block";
	}
	app_QRcode_dl.onmouseout=function (){
		app_QRcode_img.style.display="none";
	}
	
	//使用getElementsByClassName取元素
	var login_2=getElementsByClassName(document,"login_2");
	var login_3=getElementsByClassName(document,"login_3");
	login_2[0].onmouseover=function (){
		login_3[0].style.display="block";
	}
	login_3[0].onmouseover=function (){ // 解决一移进就消失
		login_3[0].style.display="block";
	}
	login_3[0].onmouseout=function (){
		this.style.display="none";
	}
	
	
	
	
	var lbur_3=getElementsByClassName(document,"lbur_3");
	for(var i=0;i<lbur_3.length;i++){
		lbur_3[i].onmouseover=function (){
			var share_box=getElementsByClassName(this.parentNode.parentNode,"share_box");
			share_box[0].style.display="block";
		}
		var lbur3=lbur_3[i];
		var share_box=getElementsByClassName(lbur3.parentNode.parentNode,"share_box");
		share_box[0].onmouseover=function (){
			this.style.display="block";
		}
		share_box[0].onmouseout=function (){
			this.style.display="none";
		}
	}
	
	var dk_3=getElementsByClassName(document,"dk_3");
	var dk_body=getElementsByClassName(document,"dk_body");
	dk_3[0].onmouseover=function(){
		dk_body[0].style.backgroundPosition="0 0";
	}
	dk_3[0].onmouseout=function(){
		dk_body[0].style.backgroundPosition="0 -80px";
	}
	
	var dk_4=getElementsByClassName(document,"dk_4");
	dk_4[0].onmouseover=function(){
		dk_body[0].style.backgroundPosition="0 0";
	}
	dk_4[0].onmouseout=function(){
		dk_body[0].style.backgroundPosition="0 -80px";
	}



	


	var scrolltop=document.getElementById("scrolltop");
	//获取可视区高度
	var clientHeight = document.documentElement.clientHeight;
	var timer=null;
	var isTop = true;
	window.onscroll = function(){
		var osTop=document.documentElement.scrollTop || document.body.scrollTop;
		if(osTop >=clientHeight){
			scrolltop.style.display="block";
		} else{
			scrolltop.style.display="none";
		}
		if(!isTop){
			clearInterval(timer);
		}
		isTop =false;

		//导航条动画
		var nav=document.getElementById("nav");
		var osTop=document.documentElement.scrollTop || document.body.scrollTop;
		if(osTop >=100){
			nav.style.position="fixed";
			nav.style.opacity="0.85";
		} else{
			nav.style.position="inherit";
			nav.style.opacity="1";
		}
		//导航条动画
		

		var mainR=document.getElementById("main_right");
		var rm=document.getElementById("rm");
		var rt=document.getElementById("rt");
		var gz=document.getElementById("gz");
		if(osTop>=2230){
			mainR.style.position="fixed";
			mainR.style.marginLeft="230px";
			rm.style.display="none";
			rt.style.display="none";
			gz.style.display="none";
		} else if(osTop<=1250){
			mainR.style.position="inherit";
			mainR.style.marginLeft="0";
			rm.style.display="block";
			rt.style.display="block";
			gz.style.display="block";
		}


	}
	scrolltop.onclick = function(){
		timer=setInterval(function(){
			var osTop=document.documentElement.scrollTop || document.body.scrollTop;
			var ispeed= Math.floor(-osTop/5);
			isTop=true;
			document.documentElement.scrollTop=document.body.scrollTop = osTop+ispeed;
			if(osTop == 0){
				clearInterval(timer);
			}
		},30);
		
	}


	/*var nav=document.getElementById("nav");
	window.onscroll = function(){
		var osTop=document.documentElement.scrollTop || document.body.scrollTop;
		if(osTop >=100){
			nav.style.position="fixed";
			nav.style.opacity="0.85";
		} else{
			nav.style.position="inherit";
			nav.style.opacity="1";
		}
	}*/
}