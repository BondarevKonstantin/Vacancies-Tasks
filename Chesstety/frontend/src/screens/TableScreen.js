import React from "react"
import pokemons from "../pokemons"

let pokemonsData = pokemons.cards

const TableScreen = () => {
  return (
    <>
      <h1>Pokemons</h1>
      <div className='pokemons-block'>
        <ul className='pokemons-block-list'>
          {pokemonsData.map((pokemon) => {
            return (
              <li key={pokemon.id} className='pokemons-block-list-item'>
                <a href={`/pokemon/${pokemon.id}`}>
                  <strong>{pokemon.name}</strong>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default TableScreen
