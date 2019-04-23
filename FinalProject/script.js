/* script.js */
var i = 0;
var txt = 'Cybersecurity Enthusiast & Web Developer';
var speed = 70;

function typewriter_effect() {
    
    if (i < txt.length) {
        document.getElementById('typewriter').innerHTML += txt.charAt(i);
        i++;
        setTimeout(typewriter_effect, speed);
    }


}