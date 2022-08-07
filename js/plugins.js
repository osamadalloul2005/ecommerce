
// SIDENAV MENU

var menuBtn =document.getElementById("menuBtn");
var menu =document.getElementById("menu");
var sideNav =document.getElementById("sideNav");

menuBtn.onclick= function(){
    if(sideNav.style.right=="-100%")
    {
        sideNav.style.right="0";
        menu.src="images/close.png";
        
    }
    else
    {
        sideNav.style.right="-100%";
        menu.src="images/menu.png";
    }
}

    // SCROLL UP

var scrTop = document.getElementById("scrTop");

window.onscroll = function () {
	
	if(window.pageYOffset >= 100){
		
		scrTop.style.display="block";
	}	
	else{
		scrTop.style.display="none";
	}
};

scrTop.onclick = function () {
		'use strict';
		window.scrollTo({
		top:0,
		left:0,
		behavior:"smooth",
	});
};
