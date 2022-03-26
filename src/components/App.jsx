import React from 'react'
import getPokemon from '../api/getPokemon'
import SearchBar from './SearchBar'
import PokemonCard from './PokemonCard'
import Spinner from './Spinner'

class App extends React.Component {
  state = {
    pokemon: [],
    isLoaded: false,
    // errorMessage: '',
    error: null,
  }

  onSearchSubmit = async (term) => {
    // console.log(term)
    try {
      const response = await getPokemon.get(term.toLowerCase())
      // console.log(response)
      this.setState({
        isLoaded: true,
        pokemon: {
          name: response.data.name,
          id: response.data.id,
          height: response.data.height,
          weight: response.data.weight,
          picture: response.data.sprites.other.dream_world.front_default,
          smPicture: response.data.sprites.front_default,
          baseXp: response.data.base_experience,
          type: response.data.types[0].type.name,
          species: response.data.species.name,
        },
      })
    } catch (error) {
      this.setState({ isLoaded: true, error })
    }
  }

  renderContent() {
    if (this.state.error) {
      return (
        <div className="flex justify-center m-12 font-light tracking-tight dark:text-gray-400 dark:text-white">
          Oups, This pokemon is not in the pokedex
        </div>
      )
    }
    if (!this.state.error && this.state.isLoaded) {
      return (
        <div>
          <PokemonCard poke={this.state.pokemon} />
        </div>
      )
    }
    if (!this.state.isLoaded && !this.state.error && !this.state.pokemon) {
      return <Spinner message="We're catching your Pokemon!" />
    }
  }

  render() {
    return (
      <div className="w-full h-full">
        <div className="w-full h-full bg-gray-50">
          <SearchBar onSubmit={this.onSearchSubmit} />
        </div>
        <div>{this.renderContent()}</div>
      </div>
    )
  }
}

export default App
