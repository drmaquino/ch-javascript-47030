// @ts-nocheck

// const btnOk = document.querySelector('#btnOk')
// // btnOk.onclick = responderAlClick

// // function responderAlClick() {
// //   responderAlClick1()
// //   responderAlClick2()
// // }

// // btnOk.addEventListener('click', responderAlClick1)
// // btnOk.addEventListener('click', responderAlClick2)


// // btnOk.addEventListener('click', alternar)
// // let num = 0
// // function alternar() {
// //   if (num === 0) { responderAlClick1() }
// //   else if (num === 1) { responderAlClick2() }
// //   else if (num === 2) { responderAlClick3() }

// //   num = num + 1
// //   if (num === 3) { num = 0 }
// // }

// function responderAlClick1() {
//   console.log('hola')
// }

// function responderAlClick2() {
//   alert('hola')
// }

// // function responderAlClick3() {
// //   alert('chau')
// // }

// const boton = document.querySelector("#btnOk")

// boton.addEventListener('mousedown', (evento) => {
//   console.log("mouse down")
// })

// boton.addEventListener('mouseup', (evento) => {
//   console.log("mouse up")
// })

// boton.addEventListener('click', (evento) => {
//   console.log("Click")
// })

// boton.addEventListener('mousemove', (evento) => {
//   console.log(`Move x:${evento.x} / y: ${evento.y}`)
// })

// const input1 = document.querySelector("#nombre")
// const input2 = document.querySelector("#edad")

// input1.onkeyup = () => { console.log("keyUp") }
// input1.onchange = () => { console.log("algo cambió...") }
// input1.oninput = () => { console.log("algo cambió...") }

// input2.onkeydown = () => { console.log("keyDown") }

const form = document.querySelector('#formulario')

const p = document.createElement('p')
p.className = 'comun'
document.body.appendChild(p)

form.addEventListener('submit', e => {
  e.preventDefault()

  const inputNombre = document.querySelector('#inputNombre')
  const inputApellido = document.querySelector('#inputApellido')

  if (inputNombre.value === inputApellido.value) {
    // alert('el nombre no puede ser igual al apellido')
    p.innerHTML = 'el nombre no puede ser igual al apellido'
    p.className = 'rojo'
  } else {
    p.innerHTML = 'perfecto!'
    p.className = 'verde'
  }
  console.log(inputNombre.value)
  console.log(inputApellido.value)
})