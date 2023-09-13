// globales

const hamburguesas = [
  { nombre: 'Hamburguesa Clásica', precio: 1000 },
  { nombre: 'Hamburguesa con Queso', precio: 1500 },
  { nombre: 'Hamburguesa Doble', precio: 1800 }
]

// ------------------------------------

bienvenido()

const hamburguesasPorComer = obtenerCantidadHamburguesas()
const opcionElegida = obtenerOpcionDelUsuario()

let costoTotal = calcularCostoTotal(hamburguesasPorComer, opcionElegida)

mostrarTotal(costoTotal)

despedida()

// funciones -------------------------------------------------------

function bienvenido() {
  let nombreIngresado = prompt("ingrese su nombre")
  alert("Bienvenido a Mc Dowel: " + nombreIngresado)
}

function obtenerCantidadHamburguesas() {
  let hamburguesasPorComer = parseInt(prompt("cuantas hamburguesas quieres comer"))
  while (isNaN(hamburguesasPorComer)) {
    hamburguesasPorComer = parseInt(prompt("eso no es un numero, vuelva a ingresar"))
  }
  return hamburguesasPorComer
}

function obtenerOpcionDelUsuario() {
  let opciones = "Selecciona una opción (1,2,3):\n"
  for (let i = 0; i < hamburguesas.length; i++) {
    opciones += (i + 1) + ". " + hamburguesas[i].nombre + "\n"
  }
  let seleccion = parseInt(prompt(opciones))
  while (seleccion < 1 || seleccion > hamburguesas.length) {
    alert('Lo siento, esa opción no es válida.')
    seleccion = parseInt(prompt(opciones))
  }

  return seleccion
}

function calcularCostoTotal(cantidad, hamburguesaSeleccionada) {
  let hamburguesa = hamburguesas[hamburguesaSeleccionada - 1]
  return cantidad * hamburguesa.precio
}

function mostrarTotal(costoTotal) {
  alert('El costo total es: ' + costoTotal)
}

function despedida() {
  alert(" Gracias vuelva pronto ")
}
