import React from 'react'

const PokemonCard = (props) => {
  console.log(props.poke)
  const poke = props.poke
  const stats = props.poke.stats
  console.log(stats)

  return (
    <div className="m-12 flex justify-center">
      <div className="p-5 w-96 max-w-2xl flex flex-col bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <img className="rounded-t-lg" src={poke.picture} alt={poke.name} />
        <div className=" m-3 p-8 flex flex-col">
          <h5 className="mb-2 text-center text-2xl capitalize font-bold tracking-tight text-gray-900 dark:text-white">
            {poke.name}
          </h5>
          <p className="mb-3 pt-2 capitalize font-light tracking-tight dark:text-gray-400 dark:text-white">
            Type : {poke.type}
          </p>
          <p className="mb-3 capitalize font-light tracking-tight dark:text-gray-400 dark:text-white">
            Specie : {poke.species}
          </p>
          <p className="mb-3 font-light tracking-tight dark:text-gray-400 dark:text-white">
            Experience : {poke.baseXp}
          </p>
          <p className="mb-3 font-light tracking-tight dark:text-gray-400 dark:text-white">
            Height : {poke.height}
          </p>
          <p className="mb-3 font-light tracking-tight dark:text-gray-400 dark:text-white">
            Weight : {poke.weight}
          </p>
        </div>
      </div>
    </div>
  )
}

export default PokemonCard
