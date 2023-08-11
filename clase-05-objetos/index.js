// @ts-nocheck
// // se refiere a una misma persona
// const nombreDeLaPersona = "Homero"
// const edadDeLaPersona = 39
// const calleDeLaPersona = "Av. Siempreviva 742"

// // ---------------------------------------------

// const persona = {
//   nombreDeLaPersona: "Homero",
//   edadDeLaPersona: 39,
//   calleDeLaPersona: "Av. Siempreviva 742",
// }

// // compuesto de:
// // nombreAtributo: valorAtributo
// // todo junto lo llamamos par clave-valor

// // definimos a un objeto como un conjunto de pares clave-valor

// // tambien se lo conoce en otros lenguajes como 'diccionario'

// // Ejemplos:

// const estudiante = {
//   nombre: 'Tomas',
//   apellido: 'zalazar',
//   edad: 25,
// }

// const PAIS_DE_ORIGEN = 'argentina'

// // ---------------------------------------------------

// const jugador1 = {
//   nombre: 'maradona',
//   velocidadEnKph: 30,
//   // velocidad_en_kph: 30,
//   posicion: 'delantero',
//   equipo: 'sacachispas'
// }

// const jugador2 = {
//   nombre: 'messi',
//   velocidadEnKph: 30,
//   // velocidad_en_kph: 30,
//   posicion: 'delantero',
//   equipo: 'sacachispas'
// }

// const jugador3 = {
//   nombre: 'dibu',
//   velocidadEnKph: 30,
//   // velocidad_en_kph: 30,
//   posicion: 'delantero',
//   equipo: 'sacachispas'
// }

// // -----------------------------------------------

// const producto1 = {
//   nombre: 'tita',
//   descripcion: 'golosina',
//   precio: 150,
//   calorias: 80,
// }

// const producto2 = {
//   nombre: 'rodesia',
//   descripcion: 'golosina',
//   precio: 200,
//   calorias: 150,
// }

// const producto3 = {
//   nombre: 'jorgito',
//   descripcion: 'alfajor',
//   precio: 250,
//   calorias: 200,
// }

// -------------------------------------------------

// function division(dividendo, divisor) {
//   const cociente = dividendo / divisor
//   // const parteEntera = Math.floor(cociente)
//   // const resto = dividendo % divisor

//   const resultado = {
//     parteEntera: Math.floor(cociente),
//     resto: dividendo % divisor,
//   }

//   return resultado
// }

// division(10, 3)

// ----------------------------------------------------

// function Producto(nombre, descripcion, precio, calorias) {
//   // this = {}
//   this.nombre = nombre
//   this.descripcion = descripcion
//   this.precio = precio
//   this.calorias = calorias
// }

// const prod1 = new Producto('tita', 'golosina', 150, 100)
// const prod2 = new Producto('rodesia', 'golosina', 200, 120)
// const prod3 = new Producto('jorgito', 'alfajor', 250, 200)

// // console.log(prod1)
// // console.log(prod2)
// // console.log(prod3)

// // const producto4 = {
// //   nombre: 'tita',
// //   descripcion: 'golosina',
// //   precio: 150,
// //   calorias: 80,
// // }

// // console.log(producto4)

// console.log(prod1.descripcion)

// prod1.descripcion = 'chocolate'

// console.log(prod1)

// const prod5 = new Producto('manon', 'galletitas', 500, 300)
// console.log(prod5)

// prod5.precio = 600
// console.log(prod5)

// prod5.precio = 700
// console.log(prod5)

// // esto no puedo!! (ni debería)
// // prod5 = { nombre: 'pepe' }


// function Producto(nombre, descripcion, precio, calorias) {
//   this.nombre = nombre
//   this.descripcion = descripcion
//   this.precio = precio
//   this.calorias = calorias
// }

// const prod5 = new Producto('manon', 'galletitas', 500, 300)

// // ciclo exacto
// for (let i = 0; i < 10; i++) { /* instrucciones a repetirse... */ }

// // ciclo FOR...IN
// for (const clave in prod5) {
//   console.log(clave)
//   console.log(prod5[clave])
// }

// prod5['precio'] = 5000

//-------------------------------------------------

// const LIMITE_DE_BARATEZ = 500

// class Producto {
//   constructor(nombre, descripcion, precio, calorias) {
//     this.nombre = nombre
//     this.descripcion = descripcion
//     this.precio = precio
//     this.calorias = calorias
//   }

//   esBarato() {
//     // if (this.precio <= LIMITE_DE_BARATEZ) {
//     //   return 'si'
//     // } else {
//     //   return 'no'
//     // }
//     // if (this.precio <= LIMITE_DE_BARATEZ) {
//     //   return true
//     // } else {
//     //   return false
//     // }
//     return this.precio <= LIMITE_DE_BARATEZ
//   }
// }

// const prod = new Producto('manon', 'galletitas', 400, 300)

// console.log(prod.esBarato())

// const prod2 = new Producto('ferrero rocher', 'bombones', 3000, 800)

// console.log(prod2.esBarato())

// --------------------------------------------------

const PORC_INTERES_3_CUOTAS = 20

class PlanDePago {
  constructor(montoInicial) {
    this.montoInicial = montoInicial
  }

  calcular(cantCuotas) {
    if (cantCuotas === 1) {
      return {
        cuotas: 1,
        valorCuota: this.montoInicial
      }
    }
    if (cantCuotas === 3) {
      return {
        cuotas: 3,
        valorCuota: (this.montoInicial / 100 * (100 + PORC_INTERES_3_CUOTAS)) / cantCuotas
      }
    }
  }
}

// entrada de datos
const montoInicial = parseInt(prompt('ingrese monto'))
const cantCuotas = parseInt(prompt('ingrese cant cuotas'))

// procesamiento de datos
const plan1 = new PlanDePago(montoInicial)
const resultado = plan1.calcular(cantCuotas)

// salida de datos
alert('el plan en ' + resultado.cuotas + 'cuotas es de $' + resultado.valorCuota + ' por cuota')