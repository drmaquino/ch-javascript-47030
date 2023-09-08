// @ts-nocheck


// function mostrar(arg1, arg2, arg3, arg4, arg5, arg6) {
//   console.log(arg1)
//   console.log(arg2)
//   console.log(arg3)
// }

// mostrar('a', 'b', 'c')

// const datos = ['a', 'b', 'c', 'd', 'e']
// mostrar(datos[0], datos[1], datos[2])

// mostrar(datos) // no es lo que quiero

// // transforma ['a', 'b', 'c']
// // es          'a', 'b', 'c' 
// mostrar(...datos)

// // mostrar(['a', 'b', 'c'])
// // mostrar( 'a', 'b', 'c' )

// //------------------------------

// function mostrar2([arg0, arg1, arg2]) {
//   console.log(arg0)
//   console.log(arg1)
//   console.log(arg2)
// }
// mostrar2(datos)

// solo sirve si puedo modificar la funcion

//-------------------------------------------

// function agrupar(arg1, arg2, ...args) {
//   // args = ['a','b','c','d', 'e','f','g']
//   console.log(arg1)
//   console.log(arg2)
//   console.log(args)
//   return args
// }

// // console.log(agrupar('a'))
// // console.log(agrupar('a', 'b', 'c', 'd', 'e', 'f', 'g'))
// // console.log(agrupar())

// agrupar('a', 'b', 'c', 'd', 'e', 'f', 'g')

//--------------------------------------------

// function armarCuenta(operador, ...numeros) {
//   return numeros.join(operador)
// }

// console.log(armarCuenta('+', 2, 5, 7, 19, 8, 22, 100, 1, 55))

// -----------------------------------------------

// // usos medio locos que se ven mucho
// // copiar un array
// const nums = [1, 2, 3, 4, 5]
// //1,2,3,4,5
// const numsCopia = [...nums]

// const masNums = [0, ...nums, 6]
// // [0,1,2,3,4,5,6]

// // concatenar arrays
// const union = [...nums, ...masNums]
// // [1,2,3,4,5,0,1,2,3,4,5,6]

// -----------------------------------------------

const p = { dni: '123', nombre: 'pepe', edad: 40 }
// ...p
// nombre: 'pepe', edad: 40

const p4 = { ...p, color: 'rojo' }

console.log(p)
console.log(p4)

const d = { dni: '1234', comision: '47030', turno: '19a21' }

const o = { ...p, ...d }

console.log(o)

const datosParaActualizar = { edad: 41, nombre: 'Pepee' }

const pActualizada = { ...o, ...datosParaActualizar }

console.log(pActualizada)
console.log(o)

