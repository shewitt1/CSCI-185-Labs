/* clock.js */

function tic(){
	clear_screen();
	draw_circle();
	draw_minute_hand();
	draw_second_hand();
	draw_hour_hand();
	
	// update the time every second
	setTimeout(function(){ tic(); }, 1000); 
	
}

function clear_screen(){
	var c = document.getElementById('clock');
	var ctx = c.getContext('2d');
	
	ctx.clearRect(0,0, c.width, c.height);
}


function draw_circle(){
	var c = document.getElementById('clock');
	var ctx = c.getContext('2d');
	
	ctx.beginPath();	
	ctx.lineWidth = 1;
	ctx.arc(c.width/2, c.height/2, 0.9*(c.width/2), 0, 2 * Math.PI);
	ctx.stroke();

	ctx.closePath();
}

function draw_minute_hand(){
	var c = document.getElementById('clock');
	var ctx = c.getContext('2d');
	
	ctx.beginPath();	
	// move to the center of the circle
	ctx.moveTo(c.width/2, c.height/2); 
	// find out the time
	var d = new Date();
	var num_minutes = d.getMinutes();
	// fraction of the way around the circle
	var how_far_around = num_minutes / 60; // 0->1
	
	// angle
	var theta = how_far_around * 2* Math.PI;
	theta = theta - Math.PI / 2;  // correction

	var Radius = 0.6 * (c.width/2);
	var delta_x = Math.cos(theta) * Radius;
	var delta_y = Math.sin(theta) * Radius;
	
	var x = delta_x + c.width/2;
	var y = delta_y + c.height/2;

	ctx.lineWidth = 10;
	ctx.lineTo(x,y);
	ctx.stroke();
	
	ctx.closePath();
}

function draw_second_hand() {
    var c = document.getElementById('clock');
    var ctx = c.getContext('2d');

    ctx.beginPath();
    ctx.moveTo(c.width/2, c.height/2);
    var d = new Date();
    var num_seconds = d.getSeconds();
    
    var how_far_around = num_seconds / 60;

    var theta = how_far_around * 2* Math.PI;
	theta = theta - Math.PI / 2;


	var Radius = 0.8 * (c.width/2);
	var delta_x = Math.cos(theta) * Radius;
	var delta_y = Math.sin(theta) * Radius;
	
	var x = delta_x + c.width/2;
	var y = delta_y + c.height/2;

	ctx.lineWidth = 5;
	ctx.lineTo(x,y);
	ctx.stroke();
	
	ctx.closePath();

}

function draw_hour_hand() {
    var c = document.getElementById('clock');
    var ctx = c.getContext('2d');

    ctx.beginPath();
    ctx.moveTo(c.width/2, c.height/2);
    var d = new Date();
    var num_hours = d.getHours();
    
    var how_far_around = num_hours / 12;

    var theta = how_far_around * 2* Math.PI;
	theta = theta - Math.PI / 2;


	var Radius = 0.6 * (c.width/2);
	var delta_x = Math.cos(theta) * Radius;
	var delta_y = Math.sin(theta) * Radius;
	
	var x = delta_x + c.width/2;
	var y = delta_y + c.height/2;

	ctx.lineWidth = 14;
	ctx.lineTo(x,y);
	ctx.stroke();
	
	ctx.closePath();

}











