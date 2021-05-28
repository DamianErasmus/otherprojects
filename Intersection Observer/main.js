const sectionOne = document.querySelector(".section1");
const sections = document.querySelectorAll('section');


/*const options = {
    root: null, //it is the viewport
    threshold: 0,//how much is on the page
    rootMargin: "-150px"//changes when the viewport thingy is fired; must be pixel or percentage
};


//Basic Observer
const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            return;//doesn't run further if condition is met
        }
        console.log(entry.target);
        entry.target.classList.toggle('inverse');
        observer.unobserve(entry.target);
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});*/


const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -500px 0px"
};


//Fade in observer
const faders = document.querySelectorAll('.fade-in');

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return;
        } else {
            console.log("yes");
            entry.target.classList.add("appear");
            appearOnScroll.unobserve(entry.target);
        }
    })
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
})

//Sliding in

const sliders = document.querySelectorAll(".slide-in");


sliders.forEach(slider => {
    appearOnScroll.observe(slider);
});