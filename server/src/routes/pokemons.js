const { Router } = require('express')
const pokemons = require('../data/pokemons')

const router = Router()

// :: GET /pokemons > Get all Pokemons
router.get('/', (_, response) => {
  response.json(pokemons)
})

// router.get('/', (_, response) => {
//   const newPokemon = []
//   for (var i = 0; i < pokemons.length; i++) {
//     newPokemon.push(pokemons[i].name, pokemons[i].type)
//   }
//   response.json(newPokemon)
// })

module.exports = router
