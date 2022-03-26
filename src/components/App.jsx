import React from 'react'
import getPokemon from '../api/getPokemon'
import SearchBar from './SearchBar'
import PokemonCard from './PokemonCard'
import { toHaveFocus } from '@testing-library/jest-dom/dist/matchers'

class App extends React.Component {
  state = {
    error: null,
    isLoaded: false,
    pokemon: [],
  }

  onSearchSubmit = async (term) => {
    console.log(term)
    const response = await getPokemon.get(term.toLowerCase())
    // console.log(response)
    this.setState({
      // isLoaded: true,
      pokemon: {
        name: response.data.forms[0].name,
        numberDex: response.data.id,
        height: response.data.height,
        weight: response.data.weight,
        spritePokemon: response.data.sprites.front_default,
        picture: response.data.sprites.other.dream_world.front_default,
        typePokemon: response.data.types,
        movesPokemon: response.data.moves,
        abilityPokemon: response.data.abilities[1].name,
        stats: response.data.stats,
      },
    })
    // (error) => {
    //   this.setState({
    //     isLoaded: true,
    //     error,
    //   })
    // }
  }

  render() {
    // const { error, isLoaded, pokemon } = this.state
    //     if (error) {
    //       return <div>Error : {error.message}</div>
    //     } else if (!isLoaded) {
    //       return <div>Catching your pokemon...</div>
    //     } else {
    return (
      <div className="w-full h-full">
        <div className="w-full h-full bg-gray-50">
          <SearchBar onSubmit={this.onSearchSubmit} />
        </div>
        <div>
          <PokemonCard poke={this.state.pokemon} />
        </div>
        {/* <div className="w-full h-full flex flex-col justify-center py-6">
          <img src={this.state.pokemon.picture} />
          <h2>Name: {this.state.pokemon.namePokemon}</h2>
          <p>ID: {this.state.pokemon.numberDex}</p>
          <p>Height: {this.state.pokemon.height}</p>
          <p>Weight: {this.state.pokemon.weight} </p>
          <p>
            {/* <div>
              {this.state.pokemon.stats.map((data, i) => (
                <li key={`${data.stat.name}-${i}`}>
                  {data.stat.name}: <span>{data.base_stat}</span>
                </li>
              ))}
            </div>
          </p>
        </div> */}
      </div>
    )
  }
}

export default App
