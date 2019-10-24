const API = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=25'

const fetchPokemons= ()=>fetch(API).then(response => response.json())


export {fetchPokemons}