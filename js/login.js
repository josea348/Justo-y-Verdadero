let inicioSesion = document.getElementById('inicioSesion');
let registro = document.getElementById('registro');

inicioSesion.addEventListener('click', function() {
    let iniciarSesion = document.getElementById('iniciarSesion');
    let registrarse = document.getElementById('registrarse');

    iniciarSesion.style.display = "block";
    registrarse.style.display = "none";
    inicioSesion.style.backgroundColor = "#aaa";
    registro.style.backgroundColor = "#ddd";
});

registro.addEventListener('click', function() {
    let iniciarSesion = document.getElementById('iniciarSesion');
    let registrarse = document.getElementById('registrarse');

    iniciarSesion.style.display = "none";
    registrarse.style.display = "block";
    inicioSesion.style.backgroundColor = "#ddd";
    registro.style.backgroundColor = "#aaa";
});