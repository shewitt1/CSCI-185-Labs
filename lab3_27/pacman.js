/* pacman.js */
// Global variables
var pacman_position = [ 200, 200 ];
var pacman_size = 100;
var pacman_theta = 0.25*Math.PI;
var theta_speed = 0.05 * Math.PI;
var pacman_direction = "right";
var pacman_speed = 50;


function game(){
	// create the canvas (size of the screen)
	var gameboard = document.getElementById('gameboard');
	gameboard.innerHTML = "<CANVAS id=\"screen\" HEIGHT=\"" + window.innerHeight +  "\" WIDTH=\"" + window.innerWidth + "\"></CANVAS>";
	
	// start the animation
	animation_loop();
}

// handle keyboard event
document.onkeydown = keypress;

function keypress( e ){
	//alert('e.keyCode = ' + e.keyCode );
	if( e.keyCode == 37 ){
		// left arrow key
		pacman_direction = "left";
	}else if( e.keyCode == 39 ){
		// right arrow key
		pacman_direction = "right";
	}else if( e.keyCode == 38 ){
		// up arrow key
		pacman_direction = "up";
	}else if( e.keyCode == 40 ){
		// down arrow key
		pacman_direction = "down";
	}
}


function animation_loop(){
	// erase the screen
	erase();
	// make the background black
	paint_background();
	// draw pacman
	move_pacman();
	draw_pacman();
	// draw ghosts
    // draw walls
    draw_all_walls();
	// draw pellets
	// draw cheries
	
	// call animation_loop in a little bit
	setTimeout(function(){ animation_loop(); }, 100);
}

function move_pacman(){
	if(pacman_direction == "right"){
		// increase the x-coordate value
		pacman_position[0] = pacman_position[0] + pacman_speed;
		if( pacman_position[0] > window.innerWidth ){
			// wrap around to the left side
			pacman_position[0] = 0;
		}
	}else if(pacman_direction == "left"){
        pacman_position[0] = pacman_position[0] - pacman_speed;
		if( pacman_position[0] <= 0 ){
			// wrap around to the left side
			pacman_position[0] = window.innerWidth;
	    }	
    }else if(pacman_direction == "down"){
        pacman_position[1] = pacman_position[1] + pacman_speed;
        if(pacman_position[1] > window.innerHeight ){
            pacman_position[1] = 0;
        }
    }else if(pacman_direction == "up"){
        pacman_position[1] = pacman_position[1] - pacman_speed;
        if(pacman_position[1] <= 0){
            pacman_position[1] = 0;
    }
}
}

function draw_pacman(){
	var c = document.getElementById('screen');
	var ctx = c.getContext('2d');
	
	var x = pacman_position[0];
	var y = pacman_position[1];
	
	// check what direction pacman is facing
	var rotation_offset = 0;
	
	if(pacman_direction == "right"){
	}else if(pacman_direction == "left"){
		rotation_offset = Math.PI;
	}else if(pacman_direction == "up"){
		rotation_offset = -1 * Math.PI/2;
	}else if(pacman_direction == "down"){
		rotation_offset = Math.PI/2;
	}
	
	ctx.beginPath();
	ctx.arc(x, y, pacman_size/2, 
		pacman_theta + rotation_offset, 
		(2*Math.PI - pacman_theta) + rotation_offset );
	ctx.lineTo(x, y);	
	var delta_x = (pacman_size/2) * Math.cos(pacman_theta + rotation_offset);
	var delta_y = (pacman_size/2) * Math.sin(pacman_theta + rotation_offset);
	ctx.lineTo( x+delta_x , y+delta_y );
	ctx.closePath();
	// color in pacman
	ctx.fillStyle = 'yellow';
	ctx.fill();
	
	// change mouth angle
	pacman_theta = pacman_theta - theta_speed;
	// do we need to reverse the speed?
	if( pacman_theta <= 0 ){
		// mouth all the way closed
		theta_speed = theta_speed * -1; //reverse direction
	} else if( pacman_theta >= 0.25*Math.PI ) {
		// mouth all the way open
		theta_speed = theta_speed * -1; //reverse direction
	}
	
}

function draw_all_walls() {

}

function draw_wall( i ) {
    
}


function erase(){
	var c = document.getElementById('screen');
	var ctx = c.getContext('2d');
	ctx.clearRect(0, 0, c.width, c.height);
}


function paint_background(){
	var c = document.getElementById('screen');
	var ctx = c.getContext('2d');
	ctx.fillStyle = 'black'
	ctx.fillRect(0, 0, c.width, c.height)
}












