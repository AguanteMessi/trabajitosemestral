const nombre = document.getElementById("name")
const contraseña = document.getElementById("pass")
const correo = document.getElementById("email")
const confcontraseña = document.getElementById("confpass")
const formulario = document.getElementById("formulario")
const parrafo = document.getElementById("warnings")
form.addEventListener("submit",e=>{
    e.preventDefault()
    let warnings=""
    let entrar = false
    let regexemail= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML = ""
    if (nombre.value.length<6) {    
        warnings+= `El Nombre debe contener un minimo de 6 caracteres <br> `
        entrar=true
    
}
    console.log(regexemail.test(email.value))
    if (!regexemail.test(email.value)) {
        warnings+= `El email no es valido <br> `
        entrar= true
        
    }
    if (pass.value.length < 6 || pass.value===null || pass.value==='' ) {
        warnings+= `la contraseña debe contener un minimo de 6 caracteres <br> `
        entrar = true
    }
    if (pass.value !== confpass.value) {
        warnings+= `Contraseñas no coinciden <br> `
        entrar = true
    }
    if (entrar) {
        parrafo.innerHTML = warnings
        
    }

})