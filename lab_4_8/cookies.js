/* cookies.js */

// global variable
var bottom = 0;

function slip(){
	// remember that they clicked this button
	setCookie("remember", "true", 365);
	
	var disappear = document.getElementById('notify');
	
	disappear.style.bottom = bottom + "px";
	// now change the bottom
	bottom = bottom - 2;
	if( bottom > -105){
		// keep going 'if' the bottom is greater than -102
		setTimeout( function(){ slip(); }, 10);
	}
	
}

function check(){
	// see if the cookie is set, if so hide notify
	var cookie = getCookie("remember");
	if( cookie == ""){
		// cookie is NOT set
	}else{
		// cookie is set
		var disappear = document.getElementById('notify');
		// hide the cookie notify DIV
		disappear.style.display = 'none';
	}
}




// from W3schools:
function setCookie(cname,cvalue,exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/~drawert/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}










