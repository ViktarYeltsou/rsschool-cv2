let hMenu = document.querySelector(".burger-menu");

hMenu.addEventListener("click", showMenu);

function showMenu() {
    hMenu.classList.toggle("burger-menu-active")
}