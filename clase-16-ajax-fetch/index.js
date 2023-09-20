//@ts-nocheck

const formVerPokemones = document.querySelector('#formVerPokemones')
const tablePokemones = document.querySelector('#tablePokemones')
const tbodyPokemones = document.querySelector('#tbodyPokemones')

formVerPokemones.addEventListener('submit', e => {
  e.preventDefault()
  const cantidadStr = document.querySelector('#inputCantidad').value
  const cantidad = parseInt(cantidadStr)
  if (!isNaN(cantidad) && cantidad > 0 && cantidad < 1000) {
    actualizarTablaConPokemones(cantidad)
    tablePokemones.style.display = 'block'
  }
})

function actualizarTablaConPokemones(cantidad) {
  // const url = `https://pokeapi.co/api/v2/pokemon?limit=${cantidad}`
  const url = './pokemones.json'
  fetch(url)
    .then(res => res.json())
    .then(obj => {
      const pokemones = obj.results
      rellenarLaTablaConPokemones(pokemones, cantidad)
    })
}

function rellenarLaTablaConPokemones(pokemones, cantidad) {
  tbodyPokemones.innerHTML = ''
  for (let i = 0; i < cantidad; i++) {
    // console.log(pokemones[i])

    const tr = document.createElement('tr')
    tbodyPokemones.appendChild(tr)

    const tdNum = document.createElement('td')
    tdNum.innerHTML = i + 1
    tr.appendChild(tdNum)

    const tdNombre = document.createElement('td')
    tdNombre.innerHTML = pokemones[i].name
    tr.appendChild(tdNombre)
  }
}





// function obtener(dominio, ruta, parametro) {
//   // peticion GET

//   // me devuelve el HTML
// }

// obtener('drive.google.com', 'folders', '15V1z4mRJrKHWZSHMAlHDqtOh1fIVf-if')

// const o = { nombre: 'pepe' }
// const j = '{ "nombre":"pepe" }'

// const pokemones = '{"count":1281,"next":"https://pokeapi.co/api/v2/pokemon?offset=20&limit=20","previous":null,"results":[{"name":"bulbasaur","url":"https://pokeapi.co/api/v2/pokemon/1/"},{"name":"ivysaur","url":"https://pokeapi.co/api/v2/pokemon/2/"},{"name":"venusaur","url":"https://pokeapi.co/api/v2/pokemon/3/"},{"name":"charmander","url":"https://pokeapi.co/api/v2/pokemon/4/"},{"name":"charmeleon","url":"https://pokeapi.co/api/v2/pokemon/5/"},{"name":"charizard","url":"https://pokeapi.co/api/v2/pokemon/6/"},{"name":"squirtle","url":"https://pokeapi.co/api/v2/pokemon/7/"},{"name":"wartortle","url":"https://pokeapi.co/api/v2/pokemon/8/"},{"name":"blastoise","url":"https://pokeapi.co/api/v2/pokemon/9/"},{"name":"caterpie","url":"https://pokeapi.co/api/v2/pokemon/10/"},{"name":"metapod","url":"https://pokeapi.co/api/v2/pokemon/11/"},{"name":"butterfree","url":"https://pokeapi.co/api/v2/pokemon/12/"},{"name":"weedle","url":"https://pokeapi.co/api/v2/pokemon/13/"},{"name":"kakuna","url":"https://pokeapi.co/api/v2/pokemon/14/"},{"name":"beedrill","url":"https://pokeapi.co/api/v2/pokemon/15/"},{"name":"pidgey","url":"https://pokeapi.co/api/v2/pokemon/16/"},{"name":"pidgeotto","url":"https://pokeapi.co/api/v2/pokemon/17/"},{"name":"pidgeot","url":"https://pokeapi.co/api/v2/pokemon/18/"},{"name":"rattata","url":"https://pokeapi.co/api/v2/pokemon/19/"},{"name":"raticate","url":"https://pokeapi.co/api/v2/pokemon/20/"}]}'
