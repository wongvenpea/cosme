$('.adr').
window.onscroll = function (){
	var top =document.documentElement.scrollTop || document.body.scrollTop;
	if(top >= 500 ){
		box.classList.add('show');
	}
}