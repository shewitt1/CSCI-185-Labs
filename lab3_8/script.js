/* script.js - For Mablibs */

function start(){
	// start a timer for 1 second
	setTimeout(function(){ call() }, 1000);

}

function call(){
	// this get called after 1 sec, shows message
	var john = document.getElementById("message");
	john.style.display = "block";
}

function gametime(){
	// hide the message div
	var amanda = document.getElementById("message");
	amanda.style.display = "none";
	// show the right div
	var patrick = document.getElementById("right");
	patrick.style.display = "block";
	// show the left div
	var adam = document.getElementById("left");
	adam.style.display = "block";
}

function switch1(){
	var word1 = document.getElementById("in1");
	var inner1 = word1.innerHTML;
	
	var word1 = document.getElementById("out1");
	word1.innerHTML = inner1;
}

function switch2(){
	var word2 = document.getElementById("in2");
	var inner2 = word2.innerHTML;
	
	var word2 = document.getElementById("out2");
	word2.innerHTML = inner2;
}

function switch3(){
	var word3 = document.getElementById("in3");
	var inner3 = word3.innerHTML;
	
	var word3 = document.getElementById("out3");
	word3.innerHTML = inner3;
}

function switch4(){
	var word4 = document.getElementById("in4");
	var inner4 = word4.innerHTML;
	
	var word4 = document.getElementById("out4");
	word4.innerHTML = inner4;
}

function switch5(){
	var word5 = document.getElementById("in5");
	var inner5 = word5.innerHTML;
	
	var word5 = document.getElementById("out5");
	word5.innerHTML = inner5;
}

function switch6(){
	var word6 = document.getElementById("in6");
	var inner6 = word6.innerHTML;
	
	var word6 = document.getElementById("out6");
	word6.innerHTML = inner6;
}

function switch7(){
	var word7 = document.getElementById("in7");
	var inner7 = word7.innerHTML;
	
	var word7 = document.getElementById("out7");
	word7.innerHTML = inner7;
}

function switch8(){
	var word8 = document.getElementById("in8");
	var inner8 = word8.innerHTML;
	
	var word8 = document.getElementById("out8");
	word8.innerHTML = inner8;
}

function switch9(){
	var word9 = document.getElementById("in9");
	var inner9 = word9.innerHTML;
	
	var word9 = document.getElementById("out9");
	word9.innerHTML = inner9;
}




























