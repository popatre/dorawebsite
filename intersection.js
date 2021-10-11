/* inter section Observer */ 

const aboutMe = document.querySelector('.about-me');
const shows = document.querySelector('.shows');
const media = document.querySelector('.media');
const contact = document.querySelector('.contact');

const faders = document.querySelectorAll('.fade-in')

const appearOptions = {
    // root: null,
    threshold: 0.5,
     rootMargin: "0px 0px -100px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll){

    entries.forEach(entry => {
        if(!entry.isIntersecting){
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    })

}, appearOptions);

faders.forEach( fader => {
    appearOnScroll.observe(fader);
})



