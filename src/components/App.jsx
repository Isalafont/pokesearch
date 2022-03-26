import React from 'react'
import getPokemon from '../api/getPokemon'
import SearchBar from './SearchBar'
import PokemonCard from './PokemonCard'
import Spinner from './Spinner'


class App extends React.Component {
  state = {
    isLoaded: false,
    pokemon: [],
    errorMessage: '',
  }

  onSearchSubmit = async (term) => {
    console.log(term)
    const response = await getPokemon.get(term.toLowerCase())
    // console.log(response)
    this.setState({
      // isLoaded: true,
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
        movesPokemon: response.data.moves,
        ability: response.data.abilities[1].name,
        stats: response.data.stats,
      },
    }),
    (error) => this.setState({ isLoaded: true, errorMessage: err.message })
    }
  }
  
  renderContent(){
    if (this.state.errorMessage && !this.state.pokemon) {
      return <div>Error: {this.state.errorMessage}</div>
    }
    if (!this.state.errorMessage && this.state.pokemon) {
      return <div><PokemonCard poke={this.state.pokemon} />
        </div>
    }
    return <Spinner message="Catching your Pokemon!" />
  }

  render(){
    return (
      <div className="w-full h-full">
        <div className="w-full h-full bg-gray-50">
          <SearchBar onSubmit={this.onSearchSubmit} />
        </div>
        <div>
          {this.renderContent()}
        </div>
      </div>
    )
  }
}

export default App
