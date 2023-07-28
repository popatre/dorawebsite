// turns violet on page load
const violet = document.querySelector(".violet");
const dora = document.querySelector(".dorav");
const colquhoun = document.querySelector(".colquhoun");

// hero fade in
window.onload = doraC();
function doraC() {}

window.onload = setTimeout(doraC, 1000);
function doraC() {
    // $(".dorav").fadeIn(1000);
    $(".dorav").animate({ opacity: 1 }, 2000);
}
window.onload = setTimeout(vio, 2000);
function vio() {
    // $(".violet").fadeIn(3000);
    $(".violet").animate({ opacity: 1 }, 1000);
}

window.onload = setTimeout(colq, 3500);
function colq() {
    // $(".colquhoun").fadeIn(1000);
    $(".colquhoun").animate({ opacity: 1 }, 1000);
}

window.onload = setTimeout(violetTurner, 6000);
function violetTurner() {
    violet.classList.add("turnviolet");
}

//////////////////////////////////////////
/* sub title fade ins */
window.onload = setTimeout(subFader, 8000);
function subFader() {
    $(".hero__sub")
        .animate({ opacity: 1 }, 1000)
        .animate({ opacity: 0 }, 2000, function () {
            $(this).text("Devisor");
        })
        .animate({ opacity: 1 }, 1000)
        .animate({ opacity: 0 }, 2000, function () {
            $(this).text("Facilitator");
        })
        .animate({ opacity: 1 }, 1000)
        .animate({ opacity: 0 }, 2000, function () {
            $(this).text("Performer, Devisor, Facilitator");
        })
        .animate({ opacity: 1 }, 1000);
}
/************************************ */

$(function () {
    // Create an object to keep track of loaded images
    var loadedImages = {};

    $(".carousel.lazy-load").bind("slide.bs.carousel", function (e) {
        // Reset the loading state and hide all loading indicators when moving to a new slide
        $(".loading-indicator").hide();

        var slide = $(e.relatedTarget);
        var image = slide.find("img[data-src]");
        var loadingIndicator = slide.find(".loading-indicator");
        var imageSrc = image.data("src");

        // If the image has already been loaded, hide the loading indicator and exit

        if (!imageSrc) {
            loadingIndicator.hide();
            return;
        }

        // Show the loading indicator while fetching the image
        loadingIndicator.show();

        // Create a new image element to preload the image
        var tempImage = new Image();
        tempImage.onload = function () {
            // Once the image is loaded, set it as the source, hide the loading indicator, and mark it as loaded
            image.attr("src", tempImage.src);
            loadingIndicator.hide();
            loadedImages[imageSrc] = true;
        };
        tempImage.src = imageSrc;

        // Remove the "data-src" attribute after loading to prevent redundant loading
        image.removeAttr("data-src");
    });
});
