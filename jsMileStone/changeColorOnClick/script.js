/**23. Change the color on click
Create a button that utilizes an array of colors and the Math.random method to change the background color
of the page upon clicking. */

const colorButton = document.getElementById("colorButton");
const colors = ["#3498db", "#e74c3c", "#2ecc71", "#f39c12", "#9b59b6", "#1abc9c", "#e67e22"];

function changeBackgroundColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomIndex];
}

colorButton.addEventListener("click", changeBackgroundColor);
