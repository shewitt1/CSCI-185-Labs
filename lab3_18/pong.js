var v_x = 20;
var v_y = 16;
var is_game_started = false;
var is_paused = false;
var is_game_over = false;
var game_score = 0;
var left_bar_top = 0;
var right_bar_top = 0;


function start_game(){
	var start_screen = document.getElementById('start_screen');
	start_screen.style.display = 'none';
	// start animation
	is_game_started = true;
	moveball();

}

// keyboard input:

document.onkeydown = handle_keyboard;

function handle_keyboard( e ){
	if(is_game_started == false){
		// do nothing
	}else if( e.keyCode == 32 ){
		// space bar was pressed
		if( is_paused == false){
			is_paused = true;
			var show = document.getElementById('paused_screen');
			show.style.display = "block";
			
		} else if( is_paused == true ){
			is_paused = false;
			moveball();  // restart the animation loop
			var show = document.getElementById('paused_screen');
			show.style.display = "none";
		}
	} else if( e.keyCode == 87){
		// W key
		var bar = document.getElementById('bar1');
		if( left_bar_top > 0){
			left_bar_top = left_bar_top - 45;
		}
		bar.style.top = left_bar_top + "px";
		
	} else if( e.keyCode == 83){
		// S key
		var bar = document.getElementById('bar1');
		if( left_bar_top+300 < window.innerHeight ){
			left_bar_top = left_bar_top + 45;
		}
		bar.style.top = left_bar_top + "px";	
		
	} else if( e.keyCode == 38){
		// up arrow key
		var bar = document.getElementById('bar2');
		if( right_bar_top > 0){
			right_bar_top = right_bar_top - 45;
		}
		bar.style.top = right_bar_top + "px";	
	
	} else if( e.keyCode == 40){
		// down arrow key
		var bar = document.getElementById('bar2');
		if( right_bar_top+300 < window.innerHeight ){
			right_bar_top = right_bar_top + 45;
		}
		bar.style.top = right_bar_top + "px";
		
	}

}


function resize(){
	
	location.reload();
}


function moveball(){
	var ball = document.getElementById('ball1');
	
	var x = parseInt( ball.style.left );
	var y = parseInt( ball.style.top );
	
	if( isNaN(x) && isNaN(y) ){
		
		x = window.innerWidth/2;
		y = window.innerHeight/2;
	}
	
	ball.innerHTML = "<SPAN>x = " + x + "<BR>" + "y = " + y + "</SPAN>";
	
	
	if( x < 50 && v_x < 0){
		
		var bottom = y + 100;
		
		if( y > left_bar_top 
			&& 
			y < (left_bar_top + 300 ) 
		   ){
			
			x = 50; 
			v_x = -1 * v_x;
			game_score = game_score + 1;
		}
		
		else if( bottom > left_bar_top 
			&& 
			bottom < (left_bar_top + 300 ) 
		   ){
			x = 50; 
			v_x = -1 * v_x;
			game_score = game_score + 1;
		}
	}
	
	
	if( (x+100) > (window.innerWidth-50) && v_x > 0 ){
		var bottom = y + 100;
		
		if( y > right_bar_top 
			&& 
			y < (right_bar_top + 300 ) 
		   ){
			
			x = (window.innerWidth-50)-100; 
			v_x = -1 * v_x;
			game_score = game_score + 1;
		}
		
		else if( bottom > right_bar_top 
			&& 
			bottom < (right_bar_top + 300 ) 
		   ){
			
			x = (window.innerWidth-50)-100; 
			v_x = -1 * v_x;
			game_score = game_score + 1;
		}		
	}
	
	
	
	
	var bottom = y + 100;
	if( bottom >  window.innerHeight){
		v_y = -1 * v_y; 
	}
	if( y < 0 ){
		v_y = -1 * v_y; 
	}
	if(x < 0 ){
	
		is_game_over = true;
		alert("Game Over.  Score = " + game_score );
		resize();  
	}
	var right = x + 100;
	if(right > window.innerWidth){
	
		is_game_over = true;
		alert("Game Over.  Score = " + game_score );
		resize();  
	}
	
	

	var new_x = x + v_x;
	var new_y = y + v_y;
	
	ball.style.top = new_y + "px";
	ball.style.left = new_x + "px";
	

	if( is_paused == false && is_game_over == false){
		setTimeout( function(){ moveball(); } , 75 );
	}
	
}





