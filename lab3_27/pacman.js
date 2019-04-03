/* pacman.js */
// Global variables
var pacman_position = [ 200, 200 ];
var pacman_size = 100;
var pacman_theta = 0.25*Math.PI;
var theta_speed = 0.05 * Math.PI;
var pacman_direction = "right";
var pacman_speed = 10;


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
	draw_all_pellets();
	// draw cheries
	
	// call animation_loop in a little bit
	setTimeout(function(){ animation_loop(); }, 10);
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
            pacman_position[1] = window.innerHeight;
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

//list of walls
var horizontal_walls = [
	[300,300],
	[400,300],
	[500,300],
	[600,300],
	[700,300],
	[300,200],
	[400,200],
	[500,200],
	[600,200],
	[700,200],

];
var vertical_walls = [
	[300,300],
	[300,400],
	[300,500],
	[800,300],
	[800,400],
	[800,500],

];

var list_of_pellets = [
	[200,250],
	[300,250],
	[400,250],
	[500,250],
	[600,250],
	[700,250],
	[800,250],
	[900,250],
	[900,350],
	[900,450],

]

function draw_all_walls() {
	//draw all the horizontal walls
	for( var i = 0; i < horizontal_walls.length; i++){
		draw_horizontal_wall( i );
	}
	//draw all the vertical walls
	for( var j=0 ; j < vertical_walls.length ; j++ ){
		// draw wall j
		draw_vertical_wall( j );
	}
	
}

function draw_horizontal_wall( z ){
//z = index of wall drawing
	var c = document.getElementById('screen');
	var ctx = c.getContext('2d');

	var this_wall = horizontal_walls[z];
	var x = this_wall[0];
	var y =	this_wall[1];

	ctx.fillStyle = 'blue';
	ctx.fillRect(x, y, pacman_size, 10);
}

function draw_vertical_wall( d ){
//d = index of wall drawing
	var c = document.getElementById('screen');
	var ctx = c.getContext('2d');

	var this_wall = vertical_walls[d];
	var x = this_wall[0];
	var y =	this_wall[1];

	ctx.fillStyle = 'blue';
	ctx.fillRect(x, y, 10, pacman_size);
	
}

function draw_pellets ( p ){
	var c = document.getElementById('screen');
	var ctx = c.getContext('2d');

	var this_pellet = list_of_pellets[p];
	var x = this_pellet[0];
	var y = this_pellet[1];

	ctx.beginPath();
	ctx.arc(x,y,10,0,2*Math.PI);
	ctx.fillStyle = 'white';
	ctx.fill();
	ctx.stroke();
}

function draw_all_pellets() {
    for( var p=0 ; p < list_of_pellets.length ; p++ ){
		// draw wall j
		draw_pellets( p );
	}
}

/*
var pellets = [
	
];

function draw_all_pellets() {

}
*/


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












