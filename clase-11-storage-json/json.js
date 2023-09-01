// SERIALIZACION
// '7sd6f876d58f76d5g8765d8f7g65f87d6h58f76f587asd65f87dsa658f7ds'

// toma un valor, y lo transforma en string
// const str = JSON.stringify('hola')
// console.log(str)

// const strNum = JSON.stringify('128')
// console.log(strNum)

// const num = JSON.stringify(128)
// console.log(num)

const obj = { clave: 'valor', clave2: 'valor2' }

const jsonObj = JSON.stringify(obj)
console.log(jsonObj)
// '{"clave":"valor","clave2":"valor2"}'

const arr = [1, 2, 'hola', { nombre: 'pepe', edad: 50 }]

const jsonArr = JSON.stringify(arr)
console.log(jsonArr)
// [1,2,"hola",{"nombre":"pepe","edad":50}]


const usuarios = [{ nombre: 'pepe' }, { nombre: 'carla' }]
localStorage.setItem('usuarios', JSON.stringify(usuarios))

// toma un string (siempre y cuando sea JSON), y lo transforma en su valor original
// console.log(JSON.parse(str))
// console.log(JSON.parse(strNum))
// console.log(JSON.parse(num))

const json = localStorage.getItem('usuarios')
if (json) {
  const arrOriginal = JSON.parse(json)
  console.log(arrOriginal)
  arrOriginal.forEach(e => { console.log(e) })
}


