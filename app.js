var menuButtons = document.querySelectorAll('.nav-link');

function menuButtonActive() {
    menuButtons.forEach((item) =>{
        item.classList.remove('active');});
        this.classList.add('active');
};

menuButtons.forEach((item) =>{
    item.addEventListener('click', menuButtonActive)
})
