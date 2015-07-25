window.onload=function(){
	nav();
	image();
};



function nav(){
	var oNav=document.getElementById('nav');
	var aLi=oNav.getElementsByTagName('li');
	var timer=null;
	for (var i=0; i<aLi.length; i++)
	{
		aLi[i].onmouseover=function(){
			clearTimeout(timer);
			for (var i = 0, item; item = aLi[i++];){
				item.className='';
			};
			this.className='li_hover';
		};


		aLi[i].onmouseout=function(){
			timer=setTimeout(function()
			{
				 for (var i = 0, item; item = aLi[i++];){
						item.className='';
					};
				aLi[0].className='li_hover';
			},5000);
		}
	}
}



function image(){
	var oImgae=document.getElementById('image');
	var aImg=oImgae.getElementsByTagName('img');
	var now=0;
	var last=0;
	var timer=setInterval(move,5000);
	oImgae.onmouseover=function(){
		clearInterval(timer);
	};
	oImgae.onmouseout=function(){
		timer=setInterval(move,5000);
	};


		for(var i=5;i<aImg.length-1; i++){
			aImg[i].index=i-5;
			aImg[i].onmouseover=function(){
				outline_move(this.index*60);
				now=this.index-1;
				move(1);
				last=this.index;

			}
		}	


	function move(next){
		now++
		var now_1=now-1;
		var price=0;
		var price_2=100;
		var speed=0.5;
		if(now>4)
		{
			now=0;
		};
		if(next)
		{	speed=5;
			now_1=last	
		}
		else
		{	last=now;
			if(now==0)
			{
				now_1=4;
			}
		}
		
		outline_move(now*60)
		var timer=setInterval(opacity,10);
		function opacity(){
			if(price==100)
			{
				clearInterval(timer);
			}
				aImg[now_1].style.opacity=(price_2-=speed)/100;
				aImg[now_1].style.filter='alpha(opacity:'+(price_2-=speed)+')';
				aImg[now].style.opacity=(price+=speed)/100;
				aImg[now].style.filter='alpha(opacity:'+(price+=speed)+')';	
		};	
	}
}




function outline_move(target){
	var oFrame=document.getElementById('img_hover');
	clearInterval(oFrame.timer);
	oFrame.timer=setInterval(function(){
		var oFrame_top=oFrame.offsetTop;
		var speed=(target-oFrame_top)/6;
		speed=speed>0?Math.ceil(speed):Math.floor(speed);					
		if(target==oFrame_top)
		{
			clearInterval(oFrame.timer);	
		}
		else
		{
			oFrame.style.top=oFrame_top+speed+'px';
		}
	},30);
};








