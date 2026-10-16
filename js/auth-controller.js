function iniciarSesion() {
    let correo = document.querySelector("#correo").value
    let clave = document.querySelector("#clave").value

    if (correo == "correo@ejemplo.com" && clave == "12345") {
        alert("Bienvenido a KOSAS Studio")
        window.location.href = "./pages/catalogo.html"
    } else {
        alert("Correo o clave incorrectos")
    }
}


let btn_login = document.querySelector("#btn-login")
let eventos = ["click", "dblclick", "mouseenter"]

btn_login.addEventListener(eventos[0], iniciarSesion()) 