// !BURGER MENU

const header = document.querySelector(".header");
const burgerBtn = document.querySelector(".burger");
const burgerIcon = document.querySelector(".burger__icon");
const body = document.querySelector("body");


burgerBtn.addEventListener("click", () => {
    burgerBtn.classList.toggle('burger--active');
    header.classList.toggle('header-mobile');
    body.classList.toggle('no-scroll');

    // if (header.classList.contains('header-mobile')) {
    //     burgerIcon.src = "./img/svg/cross.svg"
    // } else {
    //     burgerIcon.src = "./img/svg/burger-menu.svg"
    // }
})

// !MODAL

const modal = document.querySelector('.modal-wrapper');
const btnsModalOpen = document.querySelectorAll('.btn[type="button"]');

btnsModalOpen.forEach((btn) => {
    btn.addEventListener('click', () => {
        modal.classList.remove('none');
        body.classList.add('no-scroll');
    });
})

const btnModalExit = document.querySelector('.modal__exit');

btnModalExit.addEventListener('click', () => {
    modal.classList.add('none');
    body.classList.remove('no-scroll');
})


// !VIDEO

const playVideoBtn = document.querySelector('.video__play-btn');
const video = document.querySelector('.video__media');
const playVideoIcon = document.querySelector('.video__play-btn img');

playVideoBtn.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        playVideoIcon.src = "./img/stop.svg"
    } else {
        video.pause();
        playVideoIcon.src = "./img/play-icon.svg"
    }
    



});



