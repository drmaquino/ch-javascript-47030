// @ts-nocheck

class Ingreso {
  constructor(monto, descripcion) {
    this.tipo = 'ingreso'
    this.monto = monto
    this.descripcion = descripcion
  }
}

class Gasto {
  constructor(monto, descripcion) {
    this.tipo = 'gasto'
    this.monto = monto
    this.descripcion = descripcion
  }
}

// ingreso

function pedirIngreso() {
  let monto = parseFloat(prompt('por favor, defina el monto a ingresar '))
  while (isNaN(monto) || monto <= 0) {
    monto = parseFloat(prompt('por favor, estableza un monto valido '))
  }
  let descripcion = prompt('por favor, describa el ingreso')
  if (descripcion === '') {
    descripcion = 'sin descripcion'
  }
  return new Ingreso(monto, descripcion)
}

function pedirGasto() {
  let monto = parseFloat(prompt('por favor, defina el monto a gastar '))
  while (isNaN(monto) || monto <= 0) {
    monto = parseFloat(prompt('por favor, estableza un monto valido '))
  }
  let descripcion = prompt('por favor, describa el ingreso')
  if (descripcion === '') {
    descripcion = 'sin descripcion'
  }
  return new Gasto(monto, descripcion)
}

const movimientos = []

function pedirMovimiento() {
  let num = prompt('Qué desea registrar? presione 1 para ingreso, 2 para gasto:')
  while (num !== '1' && num !== '2') {
    num = prompt('Por favor, ingrese una opcion válida: 1 para ingreso, 2 para gasto:')
  }
  let movimiento
  if (num === '1') {
    movimiento = pedirIngreso()
  } else {
    movimiento = pedirGasto()
  }
  movimientos.push(movimiento)
}

let pedirDatos = true
while (pedirDatos) {
  pedirMovimiento()
  pedirDatos = prompt('desea seguir ingresando? s/n') === 's'
}

// proceso

const ingresos = movimientos.filter(m => m.tipo === 'ingreso')
const gastos = movimientos.filter(m => m.tipo === 'gastos')

const totalIngresos = ingresos.map(m => m.monto).reduce((a, b) => a + b)
const totalGastos = gastos.map(m => m.monto).reduce((a, b) => a + b)
const cantIngresos = ingresos.length
const cantGastos = gastos.length
const balanceFinal = totalIngresos - totalGastos

// salida
console.log(`total de ingresos: ${totalIngresos}`)
console.log(`total de gastos: ${totalGastos}`)


