
function change_colors() {
    setTimeout(first_box_red, 1000);
    setTimeout(first_box_gray, 2000);
    setTimeout(second_box_yellow, 2000);
    setTimeout(second_box_gray, 3000);
    setTimeout(third_box_green, 3000);
    setTimeout(third_box_gray, 4000);
}



function first_box_red() {
    document.getElementById('box1').style.backgroundColor = "red";
}

function first_box_gray() {
    document.getElementById('box1').style.backgroundColor = "gray";
}

function second_box_yellow() {
    document.getElementById('box2').style.backgroundColor = "yellow";

}

function second_box_gray() {
    document.getElementById('box2').style.backgroundColor = "gray";

}

function third_box_green() {
    document.getElementById('box3').style.backgroundColor = "green";

}

function third_box_gray() {
    document.getElementById('box3').style.backgroundColor = "gray";

}
setInterval(change_colors, 4000)

