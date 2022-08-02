const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuIcon = document.querySelector('.menu');

navEmail.addEventListener('click', toggleMenu);
menuIcon.addEventListener('click', toggleMenu);

function toggleMenu() {
    desktopMenu.classList.toggle('inactive');
    mobileMenu.classList.toggle('inactive');
}