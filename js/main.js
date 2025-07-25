document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");
    const hero = document.querySelector(".hero");

    if (!navbar || !hero) return;

    window.onscroll = function () {
        if (window.scrollY > hero.offsetTop) {
            navbar.classList.add("change-navbar");
        } else {
            navbar.classList.remove("change-navbar");
        }
    };
});
