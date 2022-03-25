import React from 'react'

const PokemonCard = (props) => {
  console.log(props.pokemons)
  const names = props.pokemons.map((pokemon) => {
    return (
      <h1>
        {' '}
        key={pokemon.id} + {pokemon.name}
      </h1>
    )
  })
  return <div>{names}</div>
}

export default PokemonCard
