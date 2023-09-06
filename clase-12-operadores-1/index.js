

// TERNARIO -------------------------------------------

// const edad = 8
// let permiso = edad >= 18


// const profes = ['a', 'b']
// const tutores = ['c', 'd']

// // let result
// // if (tutores.length > 0) {
// //   result = tutores[0]
// // } else {
// //   result = profes[0]
// // }

// // const result = condicion ? expresion1 : expresion2

// const result =
//   tutores.length > 0
//     ? tutores[0]
//     : profes[0]

// if (tutores.length > 0) {
//   console.log('hola')
// } else {
//   console.log('chau')
// }

// AND -------------------------------------------

// const edad = 15
// (edad >= 10) && edad <= 20 // si se evalua
// true && (edad <= 20)
// (true && true)
// true

// const edad = 5
// (edad >= 10) && edad <= 20 // no se evalua
// false && /* lo que sea */
// false


// if (edad >= 10) { alert('bingo') }
// edad >= 10 && alert('bingo')

// OR ---------------------------------------------

// > 8+8
// 16
// > 'hola' + 'mundo' 
// 'holamundo'

// FALSY -> falseable
// TRUTHY -> verdadereable

// if (20) {
//   console.log('hola')
// } else {
//   console.log('chau')
// }

// const nombre = prompt('ingrese su nombre')

// if (nombre) {
//   alert(nombre)
// } else {
//   // nombre === ''
//   // nombre === undefined
//   // nombre === null
// }

// if (!nombre) {
//   alert('error, ingrese un valor')
// } else {
//   // tengo la certeza de que hay un valor
// }

// let resultado
// if (!nombre) {
//   resultado = 'anonimo'
// } else {
//   resultado = nombre
// }
// alert(resultado)

// const nombre = prompt('ingrese su nombre')

// // OR: 1ro castea a true => devuelve el primero
// // sino, devuelve el segundo
// const result = nombre || 'anonimo'

// coalescencia nula ---------------------------------------

// const result = nombre ?? 'anonimo'

// encadenamiento opcional ---------------------------------------

// let persona

// // persona = { nombre: 'pepe' }

// // tira error
// // console.log(persona.nombre)

// // no tira error pero es mas largo
// if (persona) {
//   console.log(persona.nombre)
// }

// // no tire error
// console.log(persona?.nombre)
// // equivale a:
// console.log(persona && persona.nombre)

// DESESTRUCTURACION (de-structuring)
// de objetos

// const nombre = 'jacinto'

// const persona = {
//   nombre: 'marian',
//   edad: 37,
//   peso: 75,
//   altura: 1.77,
//   direccion: {
//     pais: 'argentina',
//     ciudad: 'caba'
//   }
// }

// const gasto = {
//   nombre: 'alquiler',
//   monto: 80_000
// }

// const nombre = persona.nombre
// const edad = persona.edad
// const peso = persona.peso
// const altura = persona.altura

// desestructuracion
// const {
//   nombre: nombrePersona,
//   edad: edadPersona,
//   peso: pesoPersona,
//   altura: alturaPersona
// } = persona

// const {
//   nombre: nombreGasto,
//   monto
// } = gasto

// // significa que declaro una variable const que se llama
// // nombrePersona y le asigno persona.nombre (o persona['nombre'])

// console.log(nombrePersona)
// console.log(edadPersona)
// console.log(pesoPersona)
// console.log(alturaPersona)
// console.log(persona)

// de arrays
// const nombres = ['a', 'b', 'c', 'd']

// // const nombre1 = nombres[0]
// // const nombre2 = nombres[1]
// // const nombre3 = nombres[2]

// const [nombre1, nombre2, nombre3] = nombres

// console.log(nombre1)
// console.log(nombre2)
// console.log(nombre3)

// ---------------------------------------------

class Persona {
  // constructor(datosPersona) {
  //   this.nombre = datosPersona.nombre
  //   this.edad = datosPersona.edad
  //   this.peso = datosPersona.peso
  //   this.altura = datosPersona.altura
  // }

  constructor({ nombre, edad, peso, altura }) {
    this.nombre = nombre
    this.edad = edad
    this.peso = peso
    this.altura = altura
  }
}

const datosPersona = {
  nombre: 'marian',
  edad: 37,
  peso: 75,
  altura: 1.77,
}

const persona = new Persona(datosPersona)