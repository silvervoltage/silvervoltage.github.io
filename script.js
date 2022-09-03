const navToggle = document.querySelector('.nav-toggle');
let scrollTop = document.querySelector('.scroll-top');
let header = document.querySelector('header');
const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

window.addEventListener('scroll', () => {
    scrollTop.classList.toggle('scroll-top-active', window.scrollY > 0);
    header.classList.toggle('header-active', window.scrollY > 0);
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    });
});