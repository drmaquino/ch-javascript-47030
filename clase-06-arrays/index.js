// @ts-nocheck
// ARRAYS

// cadena de caracteres
// const cadena = ''
// const nombre = 'marian'

// // objetos
// const objeto = {}
// const persona = { nombre: 'marian', edad: 37 }
// console.log(persona)

// console.log(persona.nombre)
// console.log(persona['nombre'])

// arrays
// const letras = []
// const cadenas = ['hola', 'chau', 'permiso', 'gracias']

// console.log(cadenas)

// for (const clave in cadenas) {
//   console.log('-> ' + clave + ': ' + cadenas[clave])
// }

// console.log(cadenas[0])
// console.log(cadenas[1])
// console.log(cadenas[2])
// console.log(cadenas[3])

// console.log(cadenas.length)
// for (let i = 0; i < cadenas.length; i++) {
//   const valor = cadenas[i]
//   console.log('-> ' + i + ': ' + valor)
// }

// console.log(cadenas)
// cadenas.reverse()
// console.log(cadenas)

//--------------------------------------

// const listaNombres = []
// let cantidad = 3

// for (let i = 0; i < cantidad; i++) {
//   const entrada = prompt("Ingresar nombre")
//   listaNombres.push(entrada.toUpperCase())
//   // console.log(listaNombres.length)
// }

// //Concatenamos un nuevo array de dos elementos
// const nuevaLista = listaNombres.concat(["ANA", "EMA"])
// //Salida con salto de línea usando join
// alert(nuevaLista.join("\n"))

// ------------------------------------
// const listaNums = []
// let cantidad = 3

// for (let i = 0; i < cantidad; i++) {
//   const entrada = prompt("Ingresar número")
//   listaNums.push(parseInt(entrada))
// }

// alert(listaNums)

// alert('eliminando el numero 99 de la lista (si existe ese valor)')

// const posicionDelValorBuscado = listaNums.indexOf(0)

// if (posicionDelValorBuscado === -1) {
//   alert('no habia ningun cero')
// } else {
//   listaNums.splice(posicionDelValorBuscado, 1)
// }

// alert(listaNums)

//----------------------------------------

// const cadenas = ['hola', 'chau', 'permiso', 'gracias']

// for (const clave in cadenas) {
//   console.log(cadenas[clave])
// }

// for (let i = 0; i < cadenas.length; i++) {
//     console.log(cadenas[i])
// }

// for (const nombre of cadenas) {
//   console.log(cadena)
// }

// -----------------------------------------

class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre
    this.precio = precio
  }
}

const cantProds = parseInt(prompt('cuantos prods?'))
const carrito = []

for (let i = 0; i < cantProds; i++) {
  const nombre = prompt("Ingresar nombre")
  const precio = parseFloat(prompt('Ingrese precio'))
  const prod = new Producto(nombre, precio)
  carrito.push(prod)
}

console.log(carrito)



