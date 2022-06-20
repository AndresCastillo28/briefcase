const navToggle = document.querySelector(".nav-toggle")
const navMenu = document.querySelector(".nav-menu")

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu-visible");
});

    if(navMenu.classList.contains("nav-menu-visible")) {
        navToggle.setAttribute("aria-label", "Close menu");
    } else {
        navToggle.setAttribute("aria-label", "Open menu")
    }
