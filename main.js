
// turns violet on page load
const violet = document.querySelector('.violet')
const dora = document.querySelector('.dorav');
const colquhoun = document.querySelector('.colquhoun');

// hero fade in
window.onload = doraC();
function doraC(){
    
    
   
};

window.onload = setTimeout(doraC, 1000);
function doraC(){
    // $(".dorav").fadeIn(1000);
    $(".dorav").animate({opacity: 1}, 2000);
}
window.onload = setTimeout(vio, 2000);
function vio(){
    // $(".violet").fadeIn(3000);
    $(".violet").animate({opacity: 1}, 1000);
}

window.onload = setTimeout(colq, 3500);
function colq(){
    // $(".colquhoun").fadeIn(1000);
    $(".colquhoun").animate({opacity: 1}, 1000);
}



window.onload = setTimeout(violetTurner, 6000);
function violetTurner(){
violet.classList.add('turnviolet');
}



//////////////////////////////////////////
/* sub title fade ins */
window.onload = setTimeout(subFader, 8000);
function subFader(){
$('.hero__sub').animate({opacity: 1}, 1000).animate({'opacity': 0}, 2000, function () {
    $(this).text('Devisor');
}).animate({'opacity': 1}, 1000).animate({'opacity': 0}, 2000, function () {
    $(this).text('Facilitator');
}).animate({'opacity': 1}, 1000).animate({'opacity': 0}, 2000, function () {
    $(this).text('Performer, Devisor, Facilitator');
}).animate({'opacity': 1}, 1000);
};
/************************************ */