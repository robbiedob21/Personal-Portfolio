let navbar = document.getElementById('mobile-nav');
let navbarOpen = document.getElementById('mobile-nav-open');
let navbarClose = document.getElementById('mobile-nav-close');
navbar.style.display = 'none';

function mobileNavbarOpen() {
    navbar.style.display = 'block';
}

function mobileNavbarClose() {
    navbar.style.display = 'none';
}

navbarOpen.addEventListener('click', mobileNavbarOpen);
navbarClose.addEventListener('click', mobileNavbarClose);