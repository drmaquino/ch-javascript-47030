class Persona {

  constructor(nombre) {
    this.nombre = nombre
  }

  saludar() {
    console.log('hola, soy ' + this.nombre)
  }

  static mostrarNombre() {
    console.log('clase: Persona')
  }
}

const persona1 = new Persona('pepe')
const persona2 = new Persona('luiza')

persona1.saludar()
persona2.saludar()

Persona.mostrarNombre()

// persona1.mostrarNombre() // no existe