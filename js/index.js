const navOpenBtn = document.querySelector('.nav__toggle');
const navCloseBtn = document.querySelector('.nav__close');
const sideBar = document.querySelector('.side-bar')

navOpenBtn.addEventListener('click', () => {
    sideBar.classList.toggle('close');
});

navCloseBtn.addEventListener('click', () => {
    sideBar.classList.toggle('close');
});