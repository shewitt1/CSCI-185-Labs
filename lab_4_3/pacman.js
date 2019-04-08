



//pacman.js
//global variables
var pacman_position = [ 50, 50 ];
var pacman_size = 100;
var pacman_theta = 0.25*Math.PI;
var theta_speed = 0.05*Math.PI;
var pacman_direction = "right";
var pacman_speed = 10;
var score = 0;

function game(){
 var gameboard = document.getElementById("gameboard");
 gameboard.innerHTML = "<canvas id=\"screen\" height=\"" +window.innerHeight +  "\" width=\"" + window.innerWidth + "\"></canvas>";
 
 //start the animation
 
animation_loop()
}
//handle keyboard events
document.onkeydown = keypress;
function keypress( e ){
 //alert("e.keyCode=" + e.keyCode );
 if( e.keyCode == 37){
  //left arrow key
  pacman_direction = "left";
 }
 else if( e.keyCode == 39){
  //right arrow key 
  pacman_direction = "right";
  
 }
 else if( e.keyCode == 38){
  //up arrow key
  pacman_direction = "up";
 }
 else if( e.keyCode == 40){
  //down arrow key 
  pacman_direction = "down";
 }
}


function animation_loop(){
 //erase the screen
 erase()
 //make the background black
 paint_background();
 //draw pacman
 move_pacman();
 draw_pacman();
 //draw ghosts
 //draw walls
 draw_all_walls();
 //draw pellets
 eat_pellets();
 pacman_collide_wall();
 draw_all_pellets();
 //draw cherries
 
 
 
 //call animation_loop in a little bit
 setTimeout(function(){ animation_loop(); }, 25);
}
//list of walls
var horizontal_walls = [
	[300,325],
	[400,325],
	[500,325],
	[600,325],
	[700,325],
	[300,200],
	[400,200],
	[500,200],
	[600,200],
	[700,200],

];
var vertical_walls = [
	[300,325],
	[300,425],
	[300,525],
	[800,325],
	[800,425],
	[800,525],

];

var the_pellets = [
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

function draw_all_walls(){
 //draw all horizontal walls
 for( var i=0 ; i < horizontal_walls.length ; i++){
  //draw wall i 
  draw_horizontal_wall( i );
 }
 
 //draw all veritcal walls
 for ( var j=0 ; j < vertical_walls.length ; j++){
  //draw wall j
  draw_vertical_wall( j );
 
 }
}

function draw_horizontal_wall( z ){
 //z is the index of the wall we are drawing
 var c = document.getElementById("screen");
 var ctx = c.getContext("2d");
 //upper left corner on the wall
 var this_wall = horizontal_walls[z];
 var x = this_wall[0];
 var y = this_wall[1];
 //draw wall
 ctx.fillStyle = "darkblue";
 ctx.fillRect(x, y, pacman_size, 10) 
}

function draw_vertical_wall( d ){
 //z is the index of the wall we are drawing
 var c = document.getElementById("screen");
 var ctx = c.getContext("2d");
 
 var this_wall = vertical_walls[d];
 var x = this_wall[0];
 var y = this_wall[1];
 
 ctx.fillStyle = "darkblue";
 ctx.fillRect(x, y, 10, pacman_size)
}

function eat_pellets() {
	for(var i=0; i < the_pellets.length ; i++){
		// check if pacman collied with pellet i
		var x = the_pellets[i][0];
		var y = the_pellets[i][1];
		
		if( pacman_collide_pellet(x,y) ){
			// pacman ate the pellet
			// remove pellet i
			the_pellets.splice(i,1);
			// since we shorted the list by 1, we decriment the counter by 1
			i--;

			score++;
			document.getElementById('scorenum').innerHTML = score;

			if (the_pellets == 0) {
				alert('You Win!')
			}
		}
	}
}

function pacman_collide_pellet( pellet_x, pellet_y ){
	// check collison with pellet
	// check for collision in the vertical
	var A_left = pacman_position[0] - pacman_size/2;
	var A_right = pacman_position[0] + pacman_size/2;
	var B_left = pellet_x - 5;
	var B_right = pellet_x + 5;
	
	var A_top = pacman_position[1] - pacman_size/2;
	var A_bottom = pacman_position[1] + pacman_size/2;
	var B_top = pellet_y - 5;
	var B_bottom = pellet_y + 5;
	
	if( 
	   (A_right > B_left && A_left < B_left)
	      || // "or"
	   (A_right > B_right && A_left < B_right)
	  ){
		// B_left inside A
		if(B_top < A_bottom && B_top > A_top){
			// B_top inside A
			return true;
		}
		if(B_bottom < A_bottom && B_bottom > A_top){
			// B_bottom inside A
			return true;
		}
	}
	
	// no collision
	return false;
	
}




function draw_all_pellets(){
 for( var l=0 ; l < the_pellets.length ; l++){
  draw_pellets( l );
 }
}
function draw_pellets( p ){
 var c = document.getElementById("screen");
 var ctx = c.getContext("2d");
 

 var this_pellet = the_pellets[p];
 var x = this_pellet[0];
 var y = this_pellet[1];
 
 ctx.beginPath();
 ctx.fillStyle = "white";
 ctx.arc(x, y, 10, 0, 2 * Math.PI);
 ctx.fill()
 ctx.closePath();
}


function move_pacman(){
	var save_x = pacman_position[0];
	var save_y = pacman_position[1];

 if( pacman_direction == "right"){
  pacman_position[0] = pacman_position[0] + pacman_speed;
  if(pacman_position[0] > window.innerWidth ){
   //wrap around to the left
   pacman_position[0] = 0;
  }
 }
 else if(pacman_direction == "left"){
  pacman_position[0] = pacman_position[0] - pacman_speed;
  if(pacman_position[0] <= 0){
   pacman_position[0] = window.innerWidth;
  }
 }
 else if(pacman_direction == "up"){
  pacman_position[1] = pacman_position[1] - pacman_speed;
  if(pacman_position[1] <= 0){
   pacman_position[1] = window.innerHeight;
  }
 }
 else if( pacman_direction == "down"){
  pacman_position[1] = pacman_position[1] + pacman_speed;
  if(pacman_position[1] > window.innerHeight){
    pacman_position[1] = 0;
  }
 }

 	// check if pacman hit a wall
		// check horizontal walls
		for(var q=0; q < horizontal_walls.length; q++){
		
			var x = horizontal_walls[q][0];
			var y = horizontal_walls[q][1];
			
			if( pacman_collide_wall(x,y,'horizontal') ){
				// if so, move pacman back to saved position
				pacman_position[0] = save_x;
				pacman_position[1] = save_y;
				// stop the loop
				break;
			}
		}
			// check vertidcal walls
		for(var q=0; q < vertical_walls.length; q++){
			var x = vertical_walls[q][0];
			var y = vertical_walls[q][1];
			
			if( pacman_collide_wall(x,y,'vertical') ){
				// if so, move pacman back to saved position
				pacman_position[0] = save_x;
				pacman_position[1] = save_y;
				// stop the loop
				break;
			}
		}
		
		
		
}

function draw_pacman(){
 var c = document.getElementById("screen");
 var ctx = c.getContext("2d");
 
 var x = pacman_position[0];
 var y = pacman_position[1];
 
 //check what direction pacman is facing
 var rotation_offset = 0;
 
 if(pacman_direction == "right"){
  
 }
 else if(pacman_direction == "left"){
  rotation_offset = Math.PI;
 }
 else if(pacman_direction == "up"){
  rotation_offset = -1*Math.PI/2;
 }
 else if(pacman_direction == "down"){
  rotation_offset = Math.PI/2;
 }
 
 ctx.beginPath();
 ctx.arc(x, y, pacman_size/2, pacman_theta + rotation_offset, (2*Math.PI - pacman_theta) + rotation_offset);
 ctx.lineTo(x, y);
 
 var delta_x = (pacman_size/2) *Math.cos(pacman_theta + rotation_offset);
 var delta_y = (pacman_size/2) *Math.sin(pacman_theta + rotation_offset);
 ctx.lineTo(x + delta_x , y + delta_y);
 ctx.closePath();
 //color in pacman
 ctx.fillStyle = "yellow";
 ctx.fill();
 
 //close mouth
 pacman_theta = pacman_theta - theta_speed;
 //open mouth
 if (pacman_theta <= 0){
  theta_speed = theta_speed*-1;
 }
 else if (pacman_theta >= 0.25*Math.PI){
  theta_speed = theta_speed * -1;
 }
}

function pacman_collide_wall( wall_x, wall_y, direction) {
	// check collison with pellet
	// check for collision in the vertical
	var A_left = pacman_position[0] - pacman_size/2;
	var A_right = pacman_position[0] + pacman_size/2;	
	var A_top = pacman_position[1] - pacman_size/2;
	var A_bottom = pacman_position[1] + pacman_size/2;
	
	var B_top = wall_y;
	var B_left = wall_x;
	if( direction == 'horizontal'){
		var B_bottom = wall_y + 10;
		var B_right = wall_x + pacman_size;
	}else if( direction == 'vertical'){
		var B_bottom = wall_y + pacman_size;
		var B_right = wall_x + 10;
	}
	// Check if A collides with B
	if( 
	   (A_right > B_left && A_left < B_left)
	      || // "or"
	   (A_right > B_right && A_left < B_right)
	  ){
		// B_left inside A
		if(B_top < A_bottom && B_top > A_top){
			// B_top inside A
			return true;
		}
		if(B_bottom < A_bottom && B_bottom > A_top){
			// B_bottom inside A
			return true;
		}
	}
	// Check if B collies with A
	if(
		(B_right > A_left && B_left < A_left)
			|| // or
		(B_right > A_right && B_left < A_right)
	  ){
		if(A_top < B_bottom && A_top > B_top){
			return true;
		}
		if(A_bottom < B_bottom && A_bottom > B_top){
			return true;
		}
	}
	
	
	// no collision
	return false;
}

function erase(){
 var c = document.getElementById("screen");
 var ctx = c.getContext("2d");
 
 ctx.clearRect(0, 0, c.width, c.height);
}


function paint_background(){
 var c = document.getElementById("screen");
 var ctx = c.getContext("2d");
 
 ctx.fillStyle = "black"
 ctx.fillRect(0, 0, c.width, c.height)
 
 
}