//@ts-nocheck

// const timer1 = setTimeout(() => { alert('hola 10.000') }, 10_000)

// setTimeout(() => {
//   console.log('cancelando el primer timer')
//   clearTimeout(timer1)
// }, 5_000)

// const timer2 = setInterval(() => { console.log('tick') }, 2_000)

// function f1() {
//   console.log('entrando a f1')
//   f2()
//   console.log('saliendo de f1')
// }

// function f2() {
//   console.log('entrando a f2')
//   f3()
//   console.log('saliendo de f2')
// }

// function f3() {
//   console.log('entrando a f3')
//   console.log('llegué!')
//   console.log('saliendo de f3')
// }

// f1()
// console.log('termine')

//------------------------------------------------------

// const timer1 = setTimeout(() => { console.log('hola 10.000') }, 10_000)
// const timer2 = setTimeout(() => { console.log('hola 5.000') }, 5_000)


// function crearPromesa1() {
//   return new Promise((salioBien, salioMal) => {
//     setTimeout(() => {
//       console.log('hola 10.000')
//       salioBien()
//     }, 10_000)
//   })
// }
// const promesa1 = crearPromesa1()

// setTimeout(() => {
//   console.log('hola 8.000')
// }, 8_000)

// setTimeout(() => {
//   console.log('hola 5.000')
// }, 5_000)

// setTimeout(() => {
//   console.log('hola 2.000')
// }, 2_000)

//----------------------------------------------------

// la promesa entera, con sus then, se comporta como un todo, asincronico
// new Promise((salioBien, salioMal) => {
//   setTimeout(() => {
//     console.log('hola 5.000')
//     salioBien()
//   }, 5_000)
// }).then(() => {
//   setTimeout(() => {
//     console.log('hola 2.000')
//   }, 2_000)
// })

// // esto tb es asincronico
// new Promise((salioBien, salioMal) => {
//   setTimeout(() => {
//     console.log('hola 1.000')
//   }, 1_000)
// })

//---------------------------------------------------------

function mensaje(num) {
  return () => {
    console.log('#' + num++)
  }
}

// version asincronica comun

// function timeoutComun(seconds, tarea) {
//   setTimeout(() => {
//     tarea()
//   }, seconds * 1_000)
// }

// timeoutComun(4, mensaje(1))
// timeoutComun(3, mensaje(2))
// timeoutComun(2, mensaje(3))
// timeoutComun(1, mensaje(4))

// version con promesas, asincronica sin secuencia

// function timeoutSecuencial(seconds, tarea) {
//   return new Promise((salioBien, salioMal) => {
//     setTimeout(() => {
//       tarea()
//       salioBien()
//     }, seconds * 1_000)
//   })
// }

// timeoutSecuencial(4, mensaje(1))
// timeoutSecuencial(3, mensaje(2))
// timeoutSecuencial(2, mensaje(3))
// timeoutSecuencial(1, mensaje(4))

// misma version con promesas asincronica pero secuencial

function timeoutSecuencial(seconds, tarea) {
  return new Promise((salioBien, salioMal) => {
    setTimeout(() => {
      tarea()
      salioBien()
    }, seconds * 1_000)
  })
}

timeoutSecuencial(4, mensaje(1))
  .then(() => {
    return timeoutSecuencial(3, mensaje(2))
  })
  .then(() => {
    return timeoutSecuencial(2, mensaje(3))
  })
  .then(() => {
    return timeoutSecuencial(1, mensaje(4))
  })