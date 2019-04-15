/*chat.js*/


function start(){
	// give focus to the text enter element
	var mess = document.getElementById('mess')
	mess.focus();
	// keyboard events for this element
	mess.onkeydown = enter;
	
	// start refreshing the chat box
	refresh_talk();	
}

function enter( e ){
	//alert( e.keyCode );
	if( e.keyCode == 13 ){
		// send message to server
		var mess = document.getElementById('mess');
		var message_text = mess.innerHTML;
		send_message( message_text );
		// clear the box
		mess.innerHTML = "";
		return false;
	}
}


function refresh_talk(){
	get_messages()
	setTimeout( function(){ refresh_talk(); }, 250 );
}


function send_message( message_text ) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200){
		// don't need do do anything
    }
  };
  xhttp.open("GET", "/~drawert/chat.php?message="+message_text, true);
  xhttp.send();
}




function get_messages() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200){
		var talk = document.getElementById('talk');
		talk.innerHTML = parse_message( this.responseText);
    }
  };
  xhttp.open("GET", "/~drawert/chat.php", true);
  xhttp.send();
}

function parse_message( input_HTML ){
    var mess = document.getElementById('mess')
	var e = document.createElement('HTML');
	e.innerHTML = input_HTML;
	
	var list_of_DIV_tags = e.getElementsByTagName('DIV');
	
	var return_text = "";
	for( var i = list_of_DIV_tags.length -1 ; i >= 0 ; i-- ){
		var this_div = list_of_DIV_tags[i];
		return_text += this_div.innerHTML  + "<BR>";
	}
	
    return return_text;
    

    if (mess.includes('spencer')) {
        mess.style.color = blue;
    }
}










