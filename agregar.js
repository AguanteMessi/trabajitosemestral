const product = document.getElementById("product")
const description = document.getElementById("description")
const stock = document.getElementById("stock")
const price = document.getElementById("price")
const formulario = document.getElementById("formulario")
const parrafo = document.getElementById("warnings")
form.addEventListener("submit",o=>{
    o.preventDefault()
    let warnings=""
    let entrar = false
    parrafo.innerHTML=""
    if (product.value.length < 6 || product.value===null || product.value==='' ) {
        warnings+= `Producto no válido <br> `
        entrar = true
    }
    if (description.value.length<6 || description.value===null || description.value==='') {
        warnings+= `nombre no valido <br> `
        entrar=true
    }
    if (stock.value.length<6 || stock.value===null || stock.value==='') {
        warnings+= `nombre no valido <br> `
        entrar=true
        if (precio.value.length<6 || precio.value===null || precio.value==='') {
            warnings+= `nombre no valido <br> `
            entrar=true
    if (entrar) {
        parrafo.innerHTML=warnings
        
    }
}
form.addEventListener("submit",e=>{
    e.preventDefault()
    let warnings=""
    let entrar = false
    let regexproduct= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML = ""
    if (product.value.length<6) {    
        warnings+= `El Nombre debe contener un minimo de 6 caracteres <br> `
        entrar=true
    
}
    console.log(regexproduct.test(product.value))
    if (!regexproduct.test(product.value)) {
        warnings+= `El email no es valido <br> `
        entrar= true
        
    }
    if (price.value.length < 6 || price.value===null || price.value==='' ) {
        warnings+= `la contraseña debe contener un minimo de 6 caracteres <br> `
        entrar = true
    }
    if (price.value !== confprice.value) {
        warnings+= `Contraseñas no coinciden <br> `
        entrar = true
    }
    if (entrar) {
        parrafo.innerHTML = warnings
        
    }

}