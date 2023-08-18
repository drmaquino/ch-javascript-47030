// @ts-nocheck
// const personas = [
//   { nombre: 'pepe', edad: 10 },
//   { nombre: 'alba', edad: 20 },
//   { nombre: 'luis', edad: 30 },
//   { nombre: 'marcelo', edad: 40 },
//   { nombre: 'samanta', edad: 50 },
// ]

// const tiene30anios = (persona) => persona.edad === 30
// const tiene40anios = (persona) => persona.edad === 40
// const tiene50anios = (persona) => persona.edad === 50

// const pirulo = 8

// function fn2(pirulo) {
//   return pirulo.edad === 50
// }

// fn2({nombre: '', edad: 80})

// const fn = persona => persona.edad === 50

// const indice1 = personas.findIndex(persona => persona.edad === 300)
// const indice2 = personas.findIndex(persona => persona.edad === 40)
// const indice3 = personas.findIndex(persona => persona.edad === 50)
// console.log(indice1)
// console.log(indice2)
// console.log(indice3)

// const pers1 = personas.find(persona => persona.edad === 300)
// const pers2 = personas.find(persona => persona.edad === 40)
// const pers3 = personas.find(persona => persona.edad === 50)
// console.log(pers1)
// console.log(pers2)
// console.log(pers3)

// const personas = [
//   { nombre: 'pepe', edad: 10 },
//   { nombre: 'alba', edad: 20 },
//   { nombre: 'luis', edad: 30 },
//   { nombre: 'marcelo', edad: 40 },
//   { nombre: 'samanta', edad: 50 },
// ]

// console.log(personas.some(p => p.edad > 500))

// console.log(personas.every(p => p.edad > 5))

// function esPar(num) {
//   return num % 2 === 0
// }

// function tieneEdad30(persona) {
//   return persona.edad === 30
// }

// function buscarEdadEnArray(unArray, edadBuscada) {
//   let i = 0
//   while (i < unArray.length && unArray[i].edad !== edadBuscada) {
//     // console.log(unArray[i])
//     i++
//   }

//   let indiceBuscado
//   if (i === unArray.length) {
//     indiceBuscado = -1
//   } else {
//     indiceBuscado = i
//   }

//   return indiceBuscado
// }

// console.log(buscarEdadEnArray(personas, 15))
// console.log(buscarEdadEnArray(personas, 40))

const empleados = [
  { nombre: 'samanta', edad: 50 },
  { nombre: 'alba', edad: 20 },
  { nombre: 'luis', edad: 30 },
  { nombre: 'pepe', edad: 10 },
  { nombre: 'marcelo', edad: 40 },
]

function porNombre(pers1, pers2) {
  let result
  if (pers1.nombre < pers2.nombre) {
    result = -1
  } else if (pers1.nombre > pers2.nombre) {
    result = 1
  } else {
    result = 0
  }
  return result
}

function porEdad(pers1, pers2) {
  let result
  if (pers1.edad < pers2.edad) {
    result = -1
  } else if (pers1.edad > pers2.edad) {
    result = 1
  } else {
    result = 0
  }
  return result
}

// toSorted: crea una copia y la devuelve ordenada. no modifica el original.
const ordenadosPorEdad = empleados.toSorted(porEdad)
console.log(ordenadosPorEdad)

const ordenadosPorNombre = empleados.toSorted(porNombre)
console.log(ordenadosPorNombre)

// sort: ordena el array original.
console.log(empleados.map(p => p.nombre))
empleados.sort(porNombre)
console.log(empleados.map(p => p.nombre))

console.log(empleados.map(p => p.edad))
empleados.sort(porEdad)
console.log(empleados.map(p => p.edad))