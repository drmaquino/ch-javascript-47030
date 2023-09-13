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

function alertaSW(nombreUsuario) {
  return {
    title: 'Alerta!!',
    text: 'Acabas de tocar al usuario: ' + nombreUsuario,
    icon: 'warning',
    confirmButtonText: 'Ok'
  }
}

function hacerAlgoConUsuario(nombreUsuario) {

  // Swal.fire({
  //   title: 'Alerta!!',
  //   text: 'Acabas de tocar al usuario: ' + nombreUsuario,
  //   icon: 'warning',
  //   confirmButtonText: 'Ok'
  // })

  // Swal.fire(alertaSW(nombreUsuario))

  // Swal.fire({
  //   title: '<strong>HTML <u>example</u></strong>',
  //   icon: 'info',
  //   html:
  //     'You can use <b>bold text</b>, ' +
  //     '<a href="//sweetalert2.github.io">links</a> ' +
  //     'and other HTML tags',
  //   showCloseButton: true,
  //   showCancelButton: true,
  //   focusConfirm: false,
  //   confirmButtonText:
  //     '<i class="fa fa-thumbs-up"></i> Great!',
  //   confirmButtonAriaLabel: 'Thumbs up, great!',
  //   cancelButtonText:
  //     '<i class="fa fa-thumbs-down"></i>',
  //   cancelButtonAriaLabel: 'Thumbs down'
  // })
  // Swal.fire({
  //   title: 'Está seguro de eliminar el producto?',
  //   icon: 'warning',
  //   showCancelButton: true,
  //   confirmButtonText: 'Sí, seguro',
  //   cancelButtonText: 'No, no quiero'
  // }).then((result) => {

  //   if (result.isConfirmed) {
  //     Swal.fire({
  //       title: 'Borrado!',
  //       icon: 'success',
  //       text: 'El archivo ha sido borrado'
  //     })
  //   }
  // })
  // Toastify({
  //   text: "This is a toast",
  //   duration: 3000,
  //   destination: "https://github.com/apvarun/toastify-js",
  //   newWindow: true,
  //   close: true,
  //   gravity: "bottom", // `top` or `bottom`
  //   position: "right", // `left`, `center` or `right`
  //   stopOnFocus: true, // Prevents dismissing of toast on hover
  //   style: {
  //     background: "linear-gradient(to right, #00b09b, #96c93d)",
  //   },
  //   onClick: function () { } // Callback after click
  // }).showToast()

  // luxon
  // const dt = luxon.DateTime.fromObject(
  //   { day: 22, month: 2, hour: 12 },
  //   { zone: 'America/Buenos_Aires', numberingSystem: 'latn' }
  // )

  // let idioma = 'es'
  // console.log(dt.setLocale(idioma).toLocaleString(luxon.DateTime.DATE_MED_WITH_WEEKDAY))

  const Interval = luxon.Interval
  const DateTime = luxon.DateTime

  const now = DateTime.now()
  const later = DateTime.local(2023, 9, 21)
  const i = Interval.fromDateTimes(now, later)

  console.log(i.length('days'))
  console.log(i.length('hours'))
  console.log(i.length('minutes'))

}