// Agregar evento al botón de registro
document.getElementById("btn__iniciar-sesion").addEventListener("click", iniciarSesion);
document.getElementById("btn__registrarse").addEventListener("click", register);
window.addEventListener("resize", anchopagina);


// Declaración de valores
var contenedor_login_register = document.querySelector(".contenedor__login-register");
var formulario_login = document.querySelector(".formulario__login");
var formulario_register = document.querySelector(".formulario__register");
var caja_trasera_login = document.querySelector(".caja__trasera-login"); // Corregido: Agregado "."
var caja_trasera_register = document.querySelector(".caja__trasera-register"); // Corregido: Agregado "."
var loginForm = document.getElementById("loginForm");
var btnEntrar = loginForm.querySelector("button");

btnEntrar.addEventListener("click", function() {
    // Redirige a la página deseada
    window.location.href = "./index.html"; // Reemplaza "tu_pagina_destino.html" con la URL deseada
});


function anchopagina(){
    if(window.innerWidth >850){
       caja_trasera_login.style.display = "block";
       caja_trasera_register.style.display = "block";
    }else{
        caja_trasera_register.style.display = "block"
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.display = "none";
        formulario_login.style.display = "block";
        formulario_register.style.display = "none";
        contenedor_login_register.style.left = "0px";
    }
}


// Función para el registro
function iniciarSesion() { // Corregido: Agregado "()"

    if(window.innerWidth > 850){
        formulario_register.style.display = "none";
        contenedor_login_register.style.left = "10px";
        formulario_login.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.opacity = "0"; 
    }else{
        formulario_register.style.display = "none";
        contenedor_login_register.style.left = "8px";
        formulario_login.style.display = "block";
        caja_trasera_register.style.opacity = "block";
        caja_trasera_login.style.opacity = "none"; 
    }
}

function register() { // Corregido: Agregado "()"

    if(window.innerWidth >850){
    formulario_register.style.display = "block";
    contenedor_login_register.style.left = "410px";
    formulario_login.style.display = "none";
    caja_trasera_register.style.opacity = "0";
    caja_trasera_login.style.opacity = "1";
}else{
    formulario_register.style.display = "block";
    contenedor_login_register.style.left = "0px";
    formulario_login.style.display = "none";
    caja_trasera_register.style.display = "block";
    caja_trasera_login.style.opacity = "1";
}

}
