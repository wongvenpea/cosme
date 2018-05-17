$('.en-in2').on('click',function(){
	 // return false;
// console.log($(".en-in1").val());
	if($(".en-in1").val()==""){
		$('.eaert').css('display','block');
		$('.ah3').html('请输入用户名');
		return false;

	}
		if($(".en-in4").val()==""){
	  $('.eaert').css('display','block');
			$('.ah3').html('请输入密码');
			return false;
		}
	   if($(".en-in5").val()==""){
	  $('.eaert').css('display','block');
		$('.ah3').html('请再次输入密码');

	 	 return false;
	  }
	  // console.log($(".en-in5").val())
	  $('.eaert').css('display','block');
	  $('.ah3').html('登录成功');
	  // console.log($('.ah3').html())
	 // if(){
		// $('.eaert').css('display','block');
	 // }
});
$('.ebut').on('click',function(){
	$('.eaert').css('display','none');
	
});
$('.ebuttt').on('click',function(){
	$('.eaert').css('display','none');
	
});
$('.ebutt').on('click',function(){
	$('.eaert').css('display','none');
	
});






