class Usuario {
  username
  password
  nombre
  mail
  edad
  telefono
  constructor({ username, password, nombre, mail, edad, telefono }) {
    this.username = username
    this.establecerContrasenia(password)
    this.nombre = nombre
    this.mail = mail
    this.edad = edad
    this.telefono = telefono
  }

  saludar = () => {

  }

  establecerContrasenia(valor) {
    if (valor?.length >= 8) {
      this.password = valor
      return true
    } else {
      return false
    }
  }

  datosDeContacto() {
    return {
      nombre: this.nombre,
      mail: this.mail,
      edad: this.edad,
      telefono: this.telefono,
    }
  }
}


const u1 = new Usuario({
  username: 'marian',
  password: 'abc123xyz',
  nombre: 'mariano',
  mail: 'marian@mail.com',
  edad: 37,
  telefono: '123456789'
})

const u2 = new Usuario({
  username: 'nacho',
  password: 'abc123',
  nombre: 'ignacio',
  mail: 'nacho@mail.com',
  edad: 25,
  telefono: '123456789'
})

console.log(u2)
console.log(u1.establecerContrasenia('abcd'))

console.log(u1)