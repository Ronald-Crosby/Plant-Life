const navToggle = document.querySelector(".toggle-nav");
const navTag = document.querySelector("nav");
const mainTag = document.querySelector("main");
const fullMenuClose = document.querySelector("div.menu-close")

navToggle.addEventListener("click", function() {
    mainTag.classList.toggle("open")

    if (mainTag.classList.contains("open")) {
        navToggle.innerHTML = `<img src="assets/close.svg"/> Close`;
    } else {
        navToggle.innerHTML = `<img src="assets/menu.svg"/> Menu`;
    }
})

fullMenuClose.addEventListener("click", function() {
    mainTag.classList.remove("open")

    if (mainTag.classList.contains("open")) {
        navToggle.innerHTML = `<img src="assets/close.svg"/> Close`;
    } else {
        navToggle.innerHTML = `<img src="assets/menu.svg"/> Menu`;
    }
})





