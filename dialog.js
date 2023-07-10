const dialog = document.getElementById("popup");
const homePage = document.getElementById("home");

setTimeout(() => {
    fadeIn(dialog);
    dialog.showModal();
}, 2000);

function closeDialog() {
    dialog.close();
    dialog.style.opacity = 0;
    dialog.style.display = "none";
}

function fadeIn(element) {
    let opacity = 0;
    element.style.opacity = 0;
    element.style.display = "block";
    const interval = setInterval(() => {
        opacity += 0.1;
        element.style.opacity = opacity;
        if (opacity >= 1) {
            clearInterval(interval);
        }
    }, 50);
}

// Event listener to close the dialog when clicked outside
homePage.addEventListener("click", closeDialog);
