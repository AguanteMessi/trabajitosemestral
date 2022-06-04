const prices = document.getElementById("prices")
const nombre = document.getElementById("names")
const descripcion = document.getElementById("descr")
const stock = document.getElementById("stock")
const parrafo= document.getElementById("warnings")
form.addEventListener("submit",a=>{
    a.preventDefault()
    let warnings=""
    let entrar = false
    parrafo.innerHTML=""
    if(prices.value.lenght>10 || prices.value ==='' || prices.value === null){
    warnings+= `precio no puede estar vacio<br> `
        entrar = true
}
if (nombre.value==='' || nombre.value=== null) {
    warnings+= `nombre no puede estar vacio <br> `
        entrar = true
    
}
if (descripcion.value==='' || descripcion.value=== null) {
    warnings+= `descripcion no puede estar vacia <br> `
        entrar = true
    
}
if (stock.value===''|| stock.value=== null) {
    warnings+= `stock no puede ser vacio pero si 0 <br> `
        entrar = true
}
if (entrar) {
    parrafo.innerHTML=warnings
    
}
})