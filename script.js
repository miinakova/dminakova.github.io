function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// dynamic hover effect to the "Download CV" button
function applyDynamicEffect() {
    const cvButton = document.getElementById("cv-btn");

    // Change background color and grow the button when hovering
    cvButton.onmouseover = function() {
        cvButton.style.transform = "scale(1.1)";    // Grow button slightly
    };

    // Revert background color and size when not hovering
    cvButton.onmouseout = function() {
        cvButton.style.transform = "scale(1)";  // Reset button size
    };
}

// Call the function once the page loads
document.addEventListener("DOMContentLoaded", applyDynamicEffect);

