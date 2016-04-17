window.onload = function(){
	var closeMenu = document.querySelectorAll('.left-menu>ul>li');
	
	for(var i = 0; i< closeMenu.length ; i++){
		closeMenu[i].onclick = function(e){
			this.classList.toggle("close");
			this.classList.toggle("open");
		}
	}
	var contentElement = document.getElementsByClassName("rrr")[0];
	contentElement.style.minHeight = window.innerHeight - 57 + "px";

	var leftElement = document.getElementsByClassName("left-menu")[0];
	leftElement.style.minHeight = window.innerHeight - 57 + "px";


	document.getElementById("open-user").onclick = function(){
		document.querySelectorAll('.user ul')[0].classList.toggle("none");
		document.querySelectorAll('.user ul')[0].classList.toggle("block");

	}
}