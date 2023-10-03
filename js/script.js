let listaMenu = document.getElementById("listaMenu");
let menu = document.getElementById("menu");

menu.addEventListener("click", function () {
    if (listaMenu.classList.contains("menu")) {
        listaMenu.classList.add("menu-block");
        listaMenu.classList.remove("menu");
    }
    else {
        listaMenu.classList.remove("menu-block");
        listaMenu.classList.add("menu");
    }
});