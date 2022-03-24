import React from 'react'
import axios from 'axios'
import SearchBar from './SearchBar'

class App extends React.Component {
  onSearchSubmit(term) {
    axios
      .get('https://pokeapi.co/api/v2/pokemon/', {
        params: { query: term },
      })
      .then((response) => {
        console.log(response)
      })
  }

  render() {
    return (
      <div className="w-full h-full bg-gray-50">
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    )
  }
}

export default App
