let timerId = null;
// When the document is clicked, start the animation by calling the startAnimation function.
window.addEventListener("DOMContentLoaded", function () {
    document.addEventListener("click", startAnimation);
})
/*This function is called when the document is clicked and stops any existing animation 
using clearInterval
*/
function startAnimation(e) {
    // Clear any existing timer before starting a new one.
    clearInterval(timerId);
    let clickX = e.clientX;
    let clickY = e.clientY;
    moveImage(clickX, clickY);
}
/* This function calculates the distance between the current 
position of the image and the target position, then moves 
the image towards the target position.*/
function moveImage(x, y) {
    const img = document.querySelector("img");

    let imgX = parseInt(img.style.left);
    let imgY = parseInt(img.style.top);

    const centerX = Math.round(x - (img.width / 2));
    const centerY = Math.round(y - (img.height / 2));
    // Start a new timer that moves the image towards the target position.
    timerId = setInterval(function () {
        // Moving the image in the x direction.
        if (imgX < centerX) {
            imgX++;
        } else if (imgX > centerX) {
            imgX--;
        }
        // Moving the image in the y direction.
        if (imgY < centerY) {
            imgY++;
        } else if (imgY > centerY) {
            imgY--;
        }
        // Set the new position of the image using CSS
        img.style.left = imgX + "px";
        img.style.top = imgY + "px";
        // Stop the timer when the image has reached the target position.
        if (imgX === centerX && imgY === centerY) {
            clearInterval(timerId);
        }
    }, 10);
}