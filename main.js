const Libro = function(nombre, autor, stock) {
    this.nombre = nombre
    this.autor = autor
    this.stock = stock
}

let libro1 = new Libro("Aleph", "Borges", 10)
let libro2 = new Libro("Rayuela", "Cortazar", 8)
let libro3 = new Libro("Aura", "Fuentes", 4)
let libro4 = new Libro("La tregua", "Benedetti", 12)
let libro5 = new Libro("Paula", "Allende", 5)


let listado = [libro1, libro2, libro3, libro4, libro5]

function guardarListaEnLocalStorage() {
    localStorage.setItem('libros', JSON.stringify(listado))
}

function cargarListaDesdeLocalStorage() {
    const storedListado = localStorage.getItem('libros')
    if (storedListado) {
        listado = JSON.parse(storedListado).map(item => new Libro(item.nombre, item.autor, item.stock))
    }
}

let nombreLibro = document.getElementById("nombreLibro")
let nombreAutor = document.getElementById("nombreAutor")
let stockLibro = document.getElementById("stockLibro")
let guardaLibros = document.getElementById("guardarLibros")
let mostrardato2 = document.getElementById("mostrardato2")

guardaLibros.addEventListener("click", () => {
    let nuevoNombre = nombreLibro.value;
    let nuevoAutor = nombreAutor.value;
    let nuevoStock = parseInt(stockLibro.value)

    if (nuevoNombre && nuevoAutor && !isNaN(nuevoStock)) {
        let nuevoLibro = new Libro(nuevoNombre, nuevoAutor, nuevoStock)
        listado.push(nuevoLibro)
        nombreLibro.value = ""
        nombreAutor.value= ""
        stockLibro.value = ""
        Swal.fire(`El libro --${nuevoLibro.nombre}-- fue agregado correctamente a la base de datos`)
        mostrardato2.innerHTML = ""
        mostrarDato.innerHTML = ""

        guardarListaEnLocalStorage()

    } else {
        mostrardato2.innerHTML = "Por favor, ingrese valores válidos para agregar un producto."
    }
}) 


cargarListaDesdeLocalStorage()

let botonBusca = document.getElementById("botonBuscar")
let valorIngresado = document.getElementById("inputBusca")
let mostrarDato = document.getElementById("mostrarInput")

botonBusca.addEventListener("click", () => {
    let dato = valorIngresado.value.toUpperCase();
    let resultados = listado.filter((x) => x.nombre.toUpperCase().includes(dato));

    if (resultados.length > 0) {
        mostrarDato.innerHTML = resultados.map((producto) => {
            return `<div>
                        <p>Nombre: ${producto.nombre}</p>
                        <p>Autor: ${producto.autor}</p>
                        <p>Stock: ${producto.stock}</p>
                    </div>`
        }).join('')
    } else {
        mostrarDato.innerHTML = "No se encontraron resultados"
    }
})


function buscarClima() {
    const apiKey = '23d085963fadceec8a062432e2deddf9'
    const ciudad = document.getElementById('ciudad').value
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`

    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`La solicitud falló con el código de estado ${response.status}`)
        }
        return response.json();
      })
      .then(data => {
        mostrarResultadoClima(data);
      })
      .catch(error => {
        console.error('Error al realizar la solicitud:', error)
      });
  }

  function mostrarResultadoClima(data) {
    const resultadoDiv = document.getElementById('resultado')
    
    resultadoDiv.innerHTML = ''

    const temperatura = data.main.temp
    Swal.fire(`La temperatura en estos momentos es: ${temperatura} cº`)
  }

  document.getElementById('buscarBtn').addEventListener('click', buscarClima)
  buscarClima()

