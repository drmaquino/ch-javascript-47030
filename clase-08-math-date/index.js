// @ts-nocheck

class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre
    this.precio = precio
  }
}

function pedirProducto() {
  const precio = parseFloat(prompt('ingrese precio'))
  const nombre = prompt('ingrese nombre')
  return new Producto(nombre, precio)
}

const productos = []

let quiereSeguirComprando = true
while (quiereSeguirComprando) {
  const prod = pedirProducto()

  productos.push(prod)

  const resp = prompt('quiere seguir comprando? s/n')
  if (resp === 'n') {
    quiereSeguirComprando = false
  }
}

let total = 0
const precios = productos.map(p => p.precio)
precios.forEach(p => { total = total + p })

alert('total: $' + total)

