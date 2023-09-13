//@ts-nocheck

// globales

// localStorage.setItem('hamburguesas', JSON.stringify(hamburguesas))

const hamburguesas = [
  { nombre: 'Hamburguesa Clásica', precio: 1000 },
  { nombre: 'Hamburguesa con Queso', precio: 1500 },
  { nombre: 'Hamburguesa Doble', precio: 1800 },
  { nombre: 'Hamburguesa Triple', precio: 2000 }
]

// const hamburguesas = JSON.parse(localStorage.getItem('hamburguesas') || [])

const inputCantHamburguesas = document.querySelector('#inputCantHamburguesas')
const inputOpcionHamburguesa = document.querySelector('#inputOpcionHamburguesa')
const btnCalcularCosto = document.querySelector('#btnCalcularCosto')
const tbodyFilas = document.querySelector('#tbodyFilas')

// ------------------------------------

bienvenido()
mostrarOpciones()

// funciones -------------------------------------------------------

function bienvenido() {
  let nombreIngresado = prompt("ingrese su nombre")
  const hTitulo = document.querySelector('#hTitulo')
  hTitulo.innerHTML = `Bienvenido a Mc Dowel: ${nombreIngresado}`
}

function mostrarOpciones() {
  tbodyFilas.innerHTML = ''
  for (const hamb of hamburguesas) {
    const tr = document.createElement('tr')
    const tdHamburguesa = document.createElement('td')
    tdHamburguesa.innerHTML = hamb.nombre
    const tdPrecio = document.createElement('td')
    tdPrecio.innerHTML = `$${hamb.precio}`
    tr.appendChild(tdHamburguesa)
    tr.appendChild(tdPrecio)
    tbodyFilas.appendChild(tr)
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

btnCalcularCosto.onclick = () => {
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
