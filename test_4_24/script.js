var boxnum = [];
var colors = [];


function first_box() {
    document.getElementById('box0').style.backgroundColor = 'blue';

    document.getElementById('chat').innerHTML += '\nblue <br>';
    boxnum.push('box0');
    colors.push('blue');


setTimeout(function() {
    document.getElementById('box0').style.backgroundColor = 'gray';
},500);



}


function second_box() {
    document.getElementById('box1').style.backgroundColor = 'red';


    document.getElementById('chat').innerHTML += '\nred <br>';
    boxnum.push('box1');
    colors.push('red');

    setTimeout(function() {
        document.getElementById('box1').style.backgroundColor = 'gray';
    },500);
}

function third_box() {
    document.getElementById('box2').style.backgroundColor = 'green';


    document.getElementById('chat').innerHTML += '\ngreen <br>';
    boxnum.push('box2');
    colors.push('green');

    setTimeout(function() {
        document.getElementById('box2').style.backgroundColor = 'gray';
    },500);
}

function fourth_box() {
    document.getElementById('box3').style.backgroundColor = 'pink';


    document.getElementById('chat').innerHTML += '\npink <br>';
    boxnum.push('box3');
    colors.push('pink');

    setTimeout(function() {
        document.getElementById('box3').style.backgroundColor = 'gray';
    },500);
}

function record() {
    boxnum.splice(0,boxnum.length);
    document.getElementById('play_button').style.display = 'block';
    document.getElementById('start_button').style.display = 'none';
}

function play_recording() {
    console.log(boxnum);
    for(var i = 0;i >= 4;i++) {
        setTimeout( function() {
            document.getElementById(boxnum[i]).style.backgroundColor = colors[i];
        },1000);

} 
}