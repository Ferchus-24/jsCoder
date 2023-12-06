document.getElementById("iniciarSesion").addEventListener("click", function() {
    let usuarioValido = "cerati";
    let passValida = "zoom";
    let intento = 0;
    let mensajeDiv = document.getElementById("mensajeDiv");

    while (intento < 3) {
        // Obtener valores de los elementos por su ID
        let nombreUsuario = document.getElementById("usuario").value;
        let passUsuario = document.getElementById("contrasena").value;

        if (nombreUsuario === usuarioValido && passUsuario === passValida) {
            mensajeDiv.innerHTML = "Inicio de sesión exitoso. ¡Bienvenido, " + usuarioValido + "!";
            return;
        } else {
            mensajeDiv.innerHTML = "Nombre de usuario o contraseña incorrectos. Inténtelo de nuevo.";
            intento++;
        }
    }

    mensajeDiv.innerHTML = "Se han realizado 3 intentos fallidos. Su cuenta ha sido bloqueada.";
});
  
let ListaLibros = []

let respuesta = document.getElementById("ValorLibros")

let boton = document.getElementById("agregarLista")


let resultado2 = document.getElementById("resultado2");


window.onload = function () {
    
    let valorGuardado = localStorage.getItem("tareaGuardada");
    if (valorGuardado) {

        ListaLibros = JSON.parse(valorGuardado)

        mostrarLibros()
        
    }
};

boton.addEventListener("click", function () {
   
    let valorinput = respuesta.value;

    let TareaObjeto = {
        
        libro:valorinput,
        fecha:new Date().toLocaleString()
    }

    
    ListaLibros.push(TareaObjeto)

    console.log(ListaLibros)

   
    resultado2.innerHTML = `Libro: ${TareaObjeto.libro}, Fecha: ${TareaObjeto.fecha}`;
    
   
    localStorage.setItem("tareaGuardada", JSON.stringify(ListaLibros));

    
    respuesta.value = "";

    mostrarLibros()
});


let mostrarLibros= () => {

    
    resultado2.innerHTML= "";

    ListaLibros.forEach(function (tarea) {

        resultado2.innerHTML += ` Libro: ${tarea.libro}, Fecha: ${tarea.fecha} <br/> `;

    })
}
