document.addEventListener("DOMContentLoaded", function () {
    const helpInput = document.getElementById("helpInput");
    const helpButton = document.getElementById("helpButton");

    helpInput.addEventListener("input", function () {
        if (helpInput.value.trim().toLowerCase() === "i need help") {
            helpButton.disabled = false;
        } else {
            helpButton.disabled = true;
        }
    });

    helpButton.addEventListener("click", function () {
        alert("Help is on the way! Stay strong.");
    });
});
