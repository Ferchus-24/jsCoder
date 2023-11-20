
function validarUsuario() {
    let usuarioValido = "cerati"
    let passValida = "zoom"
    let intento = 0

    while (intento < 3) {
        let nombreUsuario = prompt("Ingrese su nombre de usuario:")
        let passUsuario = prompt("Ingrese su contraseña:")

        if (nombreUsuario === usuarioValido && passUsuario === passValida) {
            alert("Inicio de sesión exitoso. Bienvenido! " + usuarioValido)
            return
        } else {
            alert("Nombre de usuario o contraseña incorrectos. Inténtelo de nuevo.");
            intento++
        }
    }

    alert("Se han realizado 3 intentos fallidos. Su cuenta ha sido bloqueada.")
}

function buscarLibro() {
    let libro; 
    do {
        libro = prompt("¿Qué libro estás buscando?");
        
        switch (libro) {
            case "demian":
            case "lobo estepario":
                alert("Sí, está disponible para retirar.");
                break;
            case "siddhartha":
                alert("Este libro estará disponible a partir del 4/11/23.");
                break;
            case "":
                break;
            default:
                alert("El libro no está disponible en nuestra biblioteca.");
                break;
        }
    } while (libro !== "");
}

function calcularTarifa() {
    let tarifaBase = 50
    let descuento = 0
    let edad= parseInt(prompt("¿Cuál es su edad?"))
    let duracionMembresia = parseInt(prompt("¿Cuántos años quiere que dure la membresia?"))
    if (edad < 18) {
        descuento = 20
    } else if (edad >= 65) {
        descuento = 30
    }

    let tarifaTotal = tarifaBase - (tarifaBase * (descuento / 100));
    let tarifaMembresia = tarifaTotal * duracionMembresia;
    alert("Su tarifa de membresía será de $"+ tarifaMembresia)
}


validarUsuario()
buscarLibro()
calcularTarifa()

const Libro = function(nombre,anio,apellidoAutor, stock){       
    this.nombre = nombre
    this.anio = anio
    this.apellidoAutor = apellidoAutor
    this.stock = stock
}

let libro1 = new Libro("El aleph", 1945, Borges, 5)
let libro2 = new Libro("Ficciones", 1944, Borges, 3)
let libro3 = new Libro("La tregua", 1960, Benedetti, 6)
let libro4 = new Libro("Gracias por el fuego", 1966, Benedetti, 2)
let libro5 = new Libro("Rayuela", 1963, Cortazar, 4)
let libro6 = new Libro("Mujeres", 2015, Galeano, 1)




let lista = [libro1,libro2,libro3,libro4,libro5,libro6]


function filtrarLibros(){
let palabraClave = prompt("ingresa el libro que estas buscando").toUpperCase().trim()
let resultado = lista.filter((x)=>x.nombre.toUpperCase().includes(palabraClave))


if(resultado.length >0){
    console.table(resultado)
}else{
    alert("no se encontro el libro " + palabraClave)
    let respuesta= confirm("lo Quiere agregar un nuevo libro?")

    if(respuesta == true ){
        agregarLibro()
    }
}
}


function agregarLibro(){

let nombre = prompt("ingresa el nombre del libro")
let anio = parseInt(prompt("ingresa el año de edición del libro")) 
let apellidoAutor = prompt("ingresa el nombre del libro")
let stock = parseInt(prompt("ingresa el stock del libro"))


if(isNaN(anio) || isNaN(stock) || nombre==="" || apellidoAutor===""){
    alert("por favor ingresa valores validos")
    return
}

let libro = new Libro(nombre,anio,apellidoAutor,stock)

lista.push(libro)
console.table(lista)
}