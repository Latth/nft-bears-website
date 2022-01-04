var menuButtons = document.querySelectorAll('.nav-link');

function menuButtonActive() {
    menuButtons.forEach((item) =>{
        item.classList.remove('active');});
        this.classList.add('active');
};

menuButtons.forEach((item) =>{
    item.addEventListener('click', menuButtonActive)
})



function animations() {
    var controller = new ScrollMagic.Controller();


    const t1 = gsap.timeline({defaults: {ease: "power1.InOut"}})
    
    
    t1.fromTo(nav,1, {y: "-100%"}, {y: "0%"})
}


animations()
