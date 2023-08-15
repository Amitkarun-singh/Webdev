/*18. Change Text on Button click.
Create a simple HTML page with a heading and a button. The initial text must be “The most affordable learning
platform”, use JavaScript to change the heading text to “PW Skills” when the button is clicked. The button must
toggle the text of a heading between "The most affordable learning platform" and "PW Skills" on each click.*/

function toggleHeading() {
    let heading = document.querySelector('#heading');
    let firstheading = "The most affordable learning platform";
    let secondheading = "PW Skills";

    if(heading.textContent !== firstheading){
        heading.textContent = firstheading;
    }else{
        heading.textContent = secondheading;
    }
}