
// 最上面的广告关闭按钮

$(".closes").on('click',function(){
	$(".adv .advCon").css('display','none');
})


// 第一个input搜索框默认提示


// $(".search").on('input',function(){
// 	console.log($(this).val())

// 	$(this).val("");
	
// })
 // var defaultVal= "请输入关键字或商品编号";

 // $(".search").on('focus',function(){

	// 	var seaNo = $("#search").val();
	// 	//将其值与默认值比较，相等时，将文本输入框置空
	// 	if($.trim(seaNo) == defaultVal){
	// 		$("#seqNo").val("");
	// 	}
	// }

// $(".search").on('blur',function(){
// 	this.val('请输入关键字或商品编号');
// })

// 登录框

$('.centerse').on('click',function(){
	$('.center1').fadeTo('opacity','1')
})

$(".close1").on('click',function(){
	$(".center1").fadeTo('opcity','0');
})

//吸顶效果
$(window).ready(function(){
	
$(window).scroll(function (){
	var top =$(this).scrollTop();
	if(top >= 200 ){
		console.log(111);
	$('.adr').addClass('showadr');
	}else{
		$('.adr').removeClass('showadr');
	}
})
})
