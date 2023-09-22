
document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");
    const menu = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');

    window.addEventListener("scroll", function () {
        header.classList.toggle("sticky", window.scrollY > 0);
    });

    menu.addEventListener('click', function () {
        menu.classList.toggle('bx-x');
        navbar.classList.toggle('open');
    });

    window.addEventListener('click', function (event) {
        if (!menu.contains(event.target) && !navbar.contains(event.target)) {
            menu.classList.remove('bx-x');
            navbar.classList.remove('open');
        }
    });
});
