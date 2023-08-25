// @ts-nocheck

const nombres = []

let pedirEstudiantes = true
while (pedirEstudiantes) {
  const nombre = prompt('ingrese un nombre o Enter para terminar')
  if (nombre === '') {
    pedirEstudiantes = false
  } else {
    nombres.push(nombre)
  }
}

const container = document.getElementById("contenedor")

if (nombres.length === 0) {
  const texto = document.createElement('p')
  texto.innerText = 'no hay estudiantes'
  container.appendChild(texto)
} else {
  const lista = document.createElement('ul')
  for (const nombre of nombres) {
    const item = document.createElement('li')
    item.innerHTML = `nombre: ${nombre}`
    lista.appendChild(item)
  }
  container.appendChild(lista)
}




