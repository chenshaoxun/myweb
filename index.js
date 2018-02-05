$(document).ready(function(e) {
	
	//time=function(){
//		$index = $('.banner-li .cur').attr("banner-li-index");//获取当前显示内容的div的data-index
//		function carousel(){
//			$('.banner-index li').eq($index).addClass('cur').siblings().removeClass('cur');
//			$('.slide_tit').hide().eq($index).show();
//		}
//		if($index>=0&&$index<3){
//			$index++;
//			carousel();
//		}else{
//			$index=0;
//		}
//	};
//	var T=setInterval(timer,2000); //再设置定时器
    $('.banner-index li').on('mouseover',function(){
		$('.banner-index li').eq($(this).index()).addClass('cur').siblings().removeClass('cur');	
		$('.slide_tit').hide().eq($(this).index()).show();
	});
	$('.text').on('click',function(){/*点击时将搜索框中的文字清除*/
		this.value='';
	});
	
});// JavaScript Document