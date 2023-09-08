//@ts-nocheck

const formRegistro = document.querySelector('#formRegistro')
const inputUser = document.querySelector('#inputUser')
const inputPass = document.querySelector('#inputPass')
const divListaUsuarios = document.querySelector('#listaUsuarios')
const seccionUsuarios = document.querySelector('#seccionUsuarios')

const usuarios = JSON.parse(localStorage.getItem('usuarios')) || []
mostrarUsuarios()

class Usuario {
  constructor({ username, password }) {
    this.username = username
    this.password = password
  }
}

formRegistro.onsubmit = e => {
  e.preventDefault()

  const username = inputUser.value
  const password = inputPass.value

  const usuario = new Usuario({ username, password })

  guardarUsuario(usuario)
}

function guardarUsuario(usuario) {
  usuarios.push(usuario)
  localStorage.setItem('usuarios', JSON.stringify(usuarios))
  mostrarUsuarios()
}

function mostrarUsuarios() {
  if (usuarios.length > 0) {
    seccionUsuarios.style.display = 'block'
    let listaUsuariosHtml = '<ul>'
    for (const usuario of usuarios) {
      listaUsuariosHtml += `<li><a onclick="hacerAlgoConUsuario('${usuario.username}')">${usuario.username}</a></li>`
    }
    divListaUsuarios.innerHTML = listaUsuariosHtml + '</ul>'
  }
}

function hacerAlgoConUsuario(nombreUsuario) {
  alert(nombreUsuario)
}