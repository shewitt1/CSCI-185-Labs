function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
		
		var content = document.getElementById("content")
		
		var parsed_data = parse_HTML( this.responseText );
		
		content.innerHTML = parsed_data;
		
    }
  };
  xhttp.open("GET", "/~shewitt/185_labs/lab_4_10/images/", true);
  xhttp.send();
}


  /*function parse_HTML(input_HTML) {
    var e = document.createElement('HTML');
    e.innerHTML = input_HTML;

    var list_of_A_tag = e.getElementsByTagName('A');

    var return_text = '';

    for(var i=4;i<list_of_A_tag;i++) {
        var current_link = list_of_A_tag[i];
        var href = current_link.href;

       href = href.replace('/~shewitt/185_labs/lab_4_10/', '/~shewitt/185_labs/lab_4_10/images/');

       return_rext += "<img src=\"" + href + "\" width=100>";


    }

    return return_text;
  }
  */

 function parse_HTML( input_HTML ){
	// read the HTML page, return only the image links
	
	// make a 'fake' wegpage in HTML
	var e = document.createElement('HTML');
	e.innerHTML = input_HTML;
	// get a list of all 'A' tags from fake page
	var list_of_A_tag = e.getElementsByTagName('A');
	
	var return_text = "";
	// go through the list, add the links to the 'return_text'
	// start at item 6 in the list (index of "i=5")
	for(var i=5; i< list_of_A_tag.length; i++){
		
		var current_link = list_of_A_tag[i];
		var href = current_link.href;
		
		href = href.replace('/~shewitt/185_labs/lab_4_10/',
			'/~shewitt/185_labs/lab_4_10/images/');
			
		return_text += "<IMG SRC=\"" + href + "\" width=100>"
		
	}
	//
	return return_text;
	
	
}
