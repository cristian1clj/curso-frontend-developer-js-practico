const menuIcon = document.querySelector('.menu');
const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartBar = document.querySelector('.product-detail')

navEmail.addEventListener('click', toggleMenu);
menuIcon.addEventListener('click', toggleMenu);
shoppingCartIcon.addEventListener('click', toggleCartBar);

function toggleMenu() {
    const isCartClosed = shoppingCartBar.classList.contains('inactive');

    if (!isCartClosed) {
        shoppingCartBar.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
    mobileMenu.classList.toggle('inactive');
}

function toggleCartBar() {
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    
    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }

    shoppingCartBar.classList.toggle('inactive');
}