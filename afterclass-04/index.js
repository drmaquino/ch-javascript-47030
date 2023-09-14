//@ts-nocheck

// globales

// localStorage.setItem('hamburguesas', JSON.stringify(hamburguesas))

const hamburguesas = [
  { opcion: 1, nombre: 'Hamburguesa Clásica', precio: 1000 },
  { opcion: 2, nombre: 'Hamburguesa con Queso', precio: 1500 },
  { opcion: 3, nombre: 'Hamburguesa Doble', precio: 1800 },
  { opcion: 4, nombre: 'Hamburguesa Triple', precio: 2000 }
]

// const hamburguesas = JSON.parse(localStorage.getItem('hamburguesas') || [])

const inputCantHamburguesas = document.querySelector('#inputCantHamburguesas')
const inputOpcionHamburguesa = document.querySelector('#inputOpcionHamburguesa')
const formIngresoPedido = document.querySelector('#formIngresoPedido')
const tbodyFilas = document.querySelector('#tbodyFilas')

// ------------------------------------

bienvenido()
mostrarOpciones()

// funciones -------------------------------------------------------

function bienvenido() {
  // const nombreIngresado = prompt("ingrese su nombre")
  const hTitulo = document.querySelector('#hTitulo')
  hTitulo.innerHTML = `Bienvenido a Mc Dowel`//: ${nombreIngresado}`
}

function mostrarOpciones() {
  tbodyFilas.innerHTML = ''
  for (const hamb of hamburguesas) {
    const tr = document.createElement('tr')
    tbodyFilas.appendChild(tr)

    const tdOpcion = document.createElement('td')
    tr.appendChild(tdOpcion)
    tdOpcion.innerHTML = hamb.opcion

    const tdHamburguesa = document.createElement('td')
    tr.appendChild(tdHamburguesa)
    tdHamburguesa.innerHTML = hamb.nombre

    const tdPrecio = document.createElement('td')
    tr.appendChild(tdPrecio)
    tdPrecio.innerHTML = `$${hamb.precio}`
  }
}


function obtenerCantidadHamburguesas() {
  let hamburguesasPorComer = parseInt(inputCantHamburguesas.value)
  return hamburguesasPorComer
}


function obtenerOpcionDelUsuario() {
  const seleccion = parseInt(inputOpcionHamburguesa.value)
  return seleccion
}

formIngresoPedido.onsubmit = e => {
  e.preventDefault()
  const hamburguesasPorComer = obtenerCantidadHamburguesas()
  const opcionElegida = obtenerOpcionDelUsuario()
  const costoTotal = calcularCostoTotal(hamburguesasPorComer, opcionElegida)
  mostrarTotal(costoTotal)
}

function calcularCostoTotal(cantidad, hamburguesaSeleccionada) {
  let hamburguesa = hamburguesas[hamburguesaSeleccionada - 1]
  return cantidad * hamburguesa.precio
}

const pCostoTotal = document.querySelector('#pCostoTotal')

function mostrarTotal(costoTotal) {
  pCostoTotal.innerHTML = `$${costoTotal}`
}
