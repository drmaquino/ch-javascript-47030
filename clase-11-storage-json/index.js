// @ts-nocheck

class Usuario {
  constructor(nombre, contrasenia) {
    this.nombre = nombre
    this.contrasenia = contrasenia
  }
}

// entrada

const formRegistro = document.querySelector('#formRegistro')
const inputNombre = document.querySelector('#inputNombre')
const inputContrasenia = document.querySelector('#inputContrasenia')
const pUsuarios = document.querySelector('#pUsuarios')

let usuarios = []
const jsonAlmacenado = localStorage.getItem('usuarios')
if (jsonAlmacenado) {
  usuarios = JSON.parse(jsonAlmacenado)
}
refrescar()

// proceso

formRegistro.addEventListener('submit', (event) => {
  event.preventDefault()

  const usuario = new Usuario(inputNombre.value, inputContrasenia.value)
  usuarios.push(usuario)
  localStorage.setItem('usuarios', JSON.stringify(usuarios))

  refrescar()
  inputNombre.value = ''
  inputContrasenia.value = ''
})

// salida
function refrescar() {
  const soloNombres = usuarios.map(u => u.nombre)
  pUsuarios.innerHTML = soloNombres.join(', ')
}
