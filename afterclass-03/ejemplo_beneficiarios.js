class Beneficiary {
  constructor(familyRelationship, name, sex, age, amountMonth) {
    this.familyRelationship = familyRelationship
    this.name = name
    this.sex = sex
    this.age = age
    this.amountMonth = amountMonth
  }
}

const beneficiarios = []

// -------------------------------------
// CARGA DE DATOS

function agregarBeneficiario() {
  const famRel = prompt('rel')
  const name = prompt('nombre')
  const age = prompt('edad')
  const sex = prompt('sex')

  const amMonth = 100

  const ben = new Beneficiary(famRel, name, sex, age, amMonth)
  beneficiarios.push(ben)
}

agregarBeneficiario()
agregarBeneficiario()

// -------------------------------------
// PROCESAMIENTO DE DATOS

// const listadoBen = []
// for (const b of beneficiarios) {
//     const datosAMostrar = {
//       nombre: b.name,
//       vinculo: b.famRel
//     }
//     listadoBen.push(datosAMostrar)
// }

// const listadoBen = beneficiarios.map(b => ({nombre: b.name, vinculo: b.famRel, sexo: b.sex})

// const listadoBen = []
// for (const b of beneficiarios) {
//   const datosAMostrar = `nombre: ${b.name} - (${b.familyRelationship})`
//   listadoBen.push(datosAMostrar)
// }

const listadoBen = beneficiarios.map(b => (`nombre: ${b.name} - (${b.famRel}`))

console.log(listadoBen)


// -------------------------------------
// MUESTRA DE DATOS

console.log(listadoBen.join('\n'))
