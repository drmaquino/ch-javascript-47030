// const nombre = 'marian' // tipo: string

// const edad = 37 // tipo: number

// const esProfe = true // tipo: boolean

// // forma tradicional
// function presentarse1() { // mi preferida
//   console.log('hola me llamo marian, tengo 37 años.....')
// }

// // forma anonima
// const presentarse2 = function () { // tipo: function. la MENOS preferida
//   console.log('hola me llamo marian, tengo 37 años.....')
// }

// // forma Flecha (arrow function)
// const presentarse3 = () => { // tipo: function
//   console.log('hola me llamo marian, tengo 37 años.....')
// }

// presentarse1()
// presentarse2()
// presentarse3()

// ------------------------------------------

// function sumar(n1, n2) {
//   const result = n1 + n2
//   return result
// }

// // usando variable
// const resultado = sumar(10, 20)
// console.log(resultado)

// // sin usar variable
// console.log(sumar(10, 20))

//---------------------------------------------

// function sumar(n1, n2, esDificil) { // n1 y n2 son los parametros de la funcion
//   const result = n1 + n2
//   return result
// }

// const edad1 = 20
// const edad2 = 30

// const result = sumar(edad1, edad2, true) // edad1 y edad2 son los argumentos de la funcion
// console.log(result)

// const edad3 = 50

// const result2 = sumar(edad3, 100, false) // edad3 y el 100 son los argumentos de la funcion
// console.log(result2)

//-----------------------------------------------

// function gritar(frase) {
//   return frase + '!!!'
// }

// const gritar = (frase) => {
//   return frase + '!!!'
// }

// const gritar = (frase) => frase + '!!!'

// const gritar = frase => frase + '!!!'
// const dudar = frase => frase + '...'

// console.log(gritar('hola'))

// function leerTextoConIntencion(texto, fnIntencion) {
//   console.log(fnIntencion(texto))
// }

// leerTextoConIntencion('no se inunda más', gritar)
// leerTextoConIntencion('no se inunda más', dudar)

// // const fun = texto => '*' + texto + '*'
// // leerTextoConIntencion('no se inunda más', fun)

// leerTextoConIntencion('no se inunda más', t => '*' + t + '*')

//----------------------------------------------------

// const gritar = frase => frase + '!!!'
// const dudar = frase => frase + '...'

// const frases = ['hola', 'chau, nos vemos', 'qué buena onda']

// function leerFrasesConIntencion(frases, fnIntencion) {
//   for (const frase of frases) {
//     console.log(fnIntencion(frase))
//   }
// }

// leerFrasesConIntencion(frases, gritar)
// leerFrasesConIntencion(frases, dudar)

// ---------------------------------------------------------

// function mostrar(texto) {
//   console.log(texto)
// }

// // mostrar('coder')


// const frases = ['hola', 'chau, nos vemos', 'qué buena onda']

// // mostrar(frases[0])
// // mostrar(frases[1])
// // mostrar(frases[2])

// for (const frase of frases) {
//   mostrar(frase)
// }
// // es (casi) lo mismo que...
// frases.forEach(mostrar)

// ------------------------------------------------

// const numeros = [2, 3, 4, 5, 6, 7, 8, 9, 10]

// const esPar = n => n % 2 === 0

// // const pares = []
// // for (const num of numeros) {
// //   if (esPar(num)) {
// //     pares.push(num)
// //   }
// // }

// const pares = numeros.filter(esPar)

// console.log(pares)

// ------------------------------------------------

// const sueldos = [2, 3, 4, 5, 6, 7, 8, 9, 10]

// const aumentar10 = n => n + 10

// // const sueldosAumentados = []
// // for (const sueldo of sueldos) {
// //   sueldosAumentados.push(aumentar10(sueldo))
// // }

// // console.log(sueldosAumentados)

// const sueldosAumentados = sueldos.map(aumentar10)

// console.log(sueldosAumentados)

// -----------------------------------

const numeros = [1, 3, 5, 7, 8, 9, 11]
const esPar = n => n % 2 === 0

// let resp = false
// for (const num of numeros) {
//   if (esPar(num)) {
//     resp = true
//   }
// }

// console.log(resp)

console.log(numeros.some(esPar))












