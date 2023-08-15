/**22. Progress Bar
Create a progress bar that fills up as the user scrolls down the page. */

document.addEventListener("DOMContentLoaded", function() {
    const progressBar = document.getElementById("myBar");
    
    function updateProgressBar() {
        const totalHeight = document.body.scrollHeight - window.innerHeight;
        const progress = (window.pageYOffset / totalHeight) * 100;
        progressBar.style.width = `${progress}%`;
    }

    window.addEventListener("scroll", updateProgressBar);
    window.addEventListener("resize", updateProgressBar);
});
