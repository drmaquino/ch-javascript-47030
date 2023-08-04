// @ts-nocheck

const CANT_VECES = 10

// for (inicio el contador; condicion del ciclo; incremento del contador) {
// for (let i = 0; i < CANT_VECES; i++) { // recuerden que: i++ significa i = i + 1
//   alert(i)
// }

// es lo mismo que:
// let i = 0 // inicio el contador
// while (i < 10) { // pregunto si entro al ciclo
//   alert(i)
//   i++ // i = i + 1 // incremento el contador. tambien se puede escribir: i++
// }

// for (let i = 0; i < CANT_VECES; i++) {
//   if (Number.isInteger(i / 2)) {
//     console.log(i)
//   }
// }

for (let i = 0; i < CANT_VECES; i++) {
  if (!Number.isInteger(i / 2)) {
    console.log('es impar, no lo muestro')
    continue
  }

  if (i === 8) {
    break
  }

  console.log(i)
}

console.log('terminé')