import React from "react"
import { Link } from "react-router-dom"

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
                <Link to={`/pokemons/details/${pokemon.id}`}>
                  <strong>{pokemon.name}</strong>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default TableScreen
