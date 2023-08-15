/* 3. Color Mixer
Write a JavaScript program that takes in two strings representing colors and uses a switch statement to
determine the resulting color when the two colors are mixed. The program should print the resulting color
based on the following criteria"
. If color1 is "red" and color2 is "blue" or vice versa, print "purple".
. If color1 is "red" and color2 is "yellow" or vice versa, print "orange".
. If color1 is "blue" and `color2" is "yellow" or vice versa, print "green".
. If any other combination of colors is input, the program should print "Invalid color combination".*/

let color1 = prompt("Enter any color from this (red, blue, yellow)");
let color2 = prompt("Enter any color from this (red, blue, yellow)");
let colorMixer;

if((color1 == 'yellow') && (color2 == 'yellow')){
    colorMixer = 'yellow';
}else if((color1 == 'red') && (color2 == 'red')){
    colorMixer = 'red';
}else if((color1 == 'blue') && (color2 == 'blue')){
    colorMixer = 'blue';
}else if(((color1 == 'red') && (color2 == 'blue')) || ((color1 == 'blue') && (color2 == 'red'))){
    colorMixer = 'purple';
}else if((color1 == 'red') && (color2 == 'yellow') || ((color1 == 'yellow') && (color2 == 'red'))){
    colorMixer = 'orange';
}else if((color1 == 'blue') && (color2 == 'yellow') || ((color1 == 'blue') && (color2 == 'yellow'))){
    colorMixer = 'green';
}

switch(colorMixer){
    case 'red':
        document.getElementById('output').innerHTML = "red";
        // console.log("red");
    break;
    case 'yellow':
        document.getElementById('output').innerHTML = "yellow" ;
        // console.log("yellow");
    break;
    case 'blue':
        document.getElementById('output').innerHTML = "blue";
        // console.log("blue");
    break;
    case 'purple':
        document.getElementById('output').innerHTML = "purple";
        // console.log("purple");
    break;
    case 'orange':
        document.getElementById('output').innerHTML = "orange" ;
        // console.log("orange");
    break;
    case 'green':
        document.getElementById('output').innerHTML = "green";
        // console.log("green");
    break;
    default:
        document.getElementById('output').innerHTML = "Invalid color combination" ;
        // console.log("Invalid color combination");
    break;
}