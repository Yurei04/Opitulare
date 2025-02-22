document.addEventListener("DOMContentLoaded", function () {
    const dyslexicSwitch = document.getElementById("dyslexic-font-switch");
    const secretHelpDiv = document.getElementById("secret-help-btn");
    const helpInput = document.getElementById("helpInput");
    const helpButton = document.getElementById("helpButton");

    // Show/hide the help section when the switch is toggled
    dyslexicSwitch.addEventListener("change", function () {
        if (this.checked) {
            secretHelpDiv.style.display = "block";
        } else {
            secretHelpDiv.style.display = "none";
            helpInput.value = ""; // Clear input when hidden
            helpButton.disabled = true; // Disable button
        }
    });

    // Enable button only when correct text is entered
    helpInput.addEventListener("input", function () {
        if (helpInput.value.trim().toLowerCase() === "i need help") {
            helpButton.disabled = false;
        } else {
            helpButton.disabled = true;
        }
    });

    // Action when button is clicked
    helpButton.addEventListener("click", function () {
        alert("Help is on the way! Stay strong.");
        // You can add additional functionality, such as redirecting to a support page
    });
});
