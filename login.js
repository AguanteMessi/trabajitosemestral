const nombre = document.getElementById("name")
const contraseña = document.getElementById("pasa")
const correo = document.getElementById("email")
const confcontraseña = document.getElementById("confpass")
const formulario = document.getElementById("formulario")
const parrafo= document.getElementById("warning")
form.addEventListener("submit",e=>{
    e.preventDefault
    if (nombre.value.length<6) {
        alert("Nombre muy corto")
    
}
})