// DOM Manipulation Code
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded and parsed"); // Add this to check if the script runs
    var heading = document.getElementById('formHeading');
    if (heading) {
        heading.textContent = "Welcome to the Enhanced Form";
        heading.style.color = 'blue';
        console.log("Heading text and color updated"); // Add this to verify that changes happened
    } else {
        console.error("Heading element not found");
    }
});
