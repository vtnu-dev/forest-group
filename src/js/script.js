const footerYear = document.querySelector('.footer__bottom-year');
const btnHumburger = document.querySelector('.humburger-btn');
const btnBars = document.querySelector('.fa-bars');
const navbarDesktop = document.querySelector('.navbar-desktop');
const navbarMobile = document.querySelector('.navbar-mobile');
const navbarItems = document.querySelectorAll('.navbar__item');
const mainPage = document.querySelector('.main-page');


const navActive = () => {
    navbarMobile.classList.toggle('navbar-mobile--active');
    btnBars.classList.toggle('fa-xmark');
    mainPage.classList.toggle('no-scroll');

    navbarItems.forEach(item => {
        item.addEventListener('click', navActive)
    });


    btnHumburger.addEventListener('click', navActive)

}

btnHumburger.addEventListener('click', navActive)





function currentYear() {
    footerYear.textContent = (new Date()).getFullYear();
}
currentYear()