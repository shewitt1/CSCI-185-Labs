/* survey.js */

// Global variables - save for later
var list_of_user_answers = [];
var list_of_correct_answers = ['d', 'd', 'c', 'b', 'b'];
var correct = 0;


function show_question( which_question ){
	var div_id = "question_" + which_question;
	//alert("un-hiding DIV " + div_id );
	var q = document.getElementById(div_id);
	q.style.display = 'block';
	
	var hide = "question_" + (which_question-1)
	var q_hide = document.getElementById(hide);
	q_hide.style.display = "none";
}

function go_back( which_question ){
	var show = "question_" + which_question;
	var q_show = document.getElementById(show);
	q_show.style.display = 'block';
	
	var hide = "question_" + (which_question +1);
	var q_hide = document.getElementById(hide);
	q_hide.style.display = 'none';
}

function save_value( which_question ){
	var form_name = "question_"+which_question+"_form";
	var form_handle = document.getElementById(form_name);
	var answer = form_handle[ "question_"+which_question+"_answer" ].value;
	// answer now hold 'a','b','c','d', or 'e'
	// save answer
	list_of_user_answers[ which_question -1 ] = answer;
	// show correct or incorrect
	if( list_of_user_answers[ which_question -1 ] == list_of_correct_answers[ which_question -1 ] ){
        alert("correct!");
        correct++;
	}else{
		alert("incorrect!");
    }
    
    
}

function get_score(correct) {
    alert("You got " + correct + "/5 answers correct!");
}



















