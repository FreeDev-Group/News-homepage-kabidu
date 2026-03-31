const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const body = document.querySelector('body');


menuToggle.addEventListener('click', () => {
navLinks.classList.toggle('active');

menuToggle.classList.toggle('open');

if (navLinks.classList.contains('active')) {
    body.style.overflow = 'hidden';
} else {
    body.style.overflow = 'auto';
}
});