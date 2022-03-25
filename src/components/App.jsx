import React from 'react'
import getPokemon from '../api/getPokemon'
import SearchBar from './SearchBar'
import PokemonCard from './PokemonCard'

class App extends React.Component {
  state = { pokemons: [] }

  onSearchSubmit = async (term) => {
    // console.log(term)
    const response = await getPokemon.get('/pokemon/', term)

    this.setState({ pokemons: response.data.results })
  }

  render() {
    return (
      <div className="w-full h-full bg-gray-50">
        <SearchBar onSubmit={this.onSearchSubmit} />
        {/* Found: {this.state.pokemon.length} pokemon */}
        <PokemonCard pokemons={this.state.pokemons} />
      </div>
    )
  }
}

export default App
