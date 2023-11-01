
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
    let edad= prompt("Cual es su edad?")
    let duracionMembresia = prompt("Cuanto quiere que dure la membresia")
    if (edad < 18) {
        descuento = 20
    } else if (edad >= 65) {
        descuento = 30
    }

    let tarifaTotal = tarifaBase - (tarifaBase * (descuento / 100));
    let tarifaMembresia = tarifaTotal * duracionMembresia;
    alert("Su tarifa de membresía sería de $ "+ tarifaMembresia)
}


validarUsuario()
buscarLibro()
calcularTarifa()

