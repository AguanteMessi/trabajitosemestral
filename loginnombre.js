const nombre = document.getElementById("name")
const contraseña = document.getElementById("pass")
const formulario = document.getElementById("formulario")
const parrafo = document.getElementById("warnings")
form.addEventListener("submit",o=>{
    o.preventDefault()
    let warnings=""
    let entrar = false
    parrafo.innerHTML=""
    if (pass.value.length < 6 || pass.value===null || pass.value==='' ) {
        warnings+= `contraseña no valida <br> `
        entrar = true
    }
    if (nombre.value.length<6 || nombre.value===null || nombre.value==='') {
        warnings+= `nombre no valido <br> `
        entrar=true
    }
    if (entrar) {
        parrafo.innerHTML=warnings
        
    }
})