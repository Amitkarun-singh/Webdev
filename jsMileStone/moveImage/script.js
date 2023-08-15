/**25. Move the Image
The objective is to write a JavaScript program that enables an image to move according to the direction
specified by the arrow keys. The program must be able to recognize and respond to the input from the arrow
keys, and accordingly, update the position of the image on the screen. The program should be able to handle
the movement of the image in all directions, including up, down, left, and right, in a smooth and responsive
manner. Have a look at the event key codes before starting the project. */

const movingImage = document.getElementById("movingImage");
let imageX = 0;
let imageY = 0;
const step = 10;

document.addEventListener("keydown", function(event) {
    const key = event.key;

    switch (key) {
        case "ArrowUp":
            imageY -= step;
            break;
        case "ArrowDown":
            imageY += step;
            break;
        case "ArrowLeft":
            imageX -= step;
            break;
        case "ArrowRight":
            imageX += step;
            break;
    }

    movingImage.style.transform = `translate(${imageX}px, ${imageY}px)`;
});
