import React from 'react'

class SearchBar extends React.Component {
  state = { term: '' }

  onFormSubmit = (event) => {
    event.preventDefault()

    this.props.onSubmit(this.state.term)
    console.log(event)
  }

  render() {
    return (
      <div className="py-6 flex flex-col justify-center relative overflow-hidden sm:py-12 shadow-xl">
        <form onSubmit={this.onFormSubmit} className="flex justify-center">
          <div className="flex flex-col text-2xl lg:text-5xl font-bold text-yellow-600 mt-5">
            <label className="flex justify-center items-center">
              Pokemon Search
            </label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
              className="rounded text-gray-600 mt-2"
            />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar
