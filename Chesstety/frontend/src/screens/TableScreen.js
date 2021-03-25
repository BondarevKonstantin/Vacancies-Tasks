import React, { useState, useEffect } from "react"
import axios from "axios"

import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"

const TableScreen = () => {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    const fetchPokemons = async () => {
      const { data } = await axios.get("https://api.pokemontcg.io/v1/cards")

      setPokemons(data.cards)
    }

    fetchPokemons()
  }, [])

  const reloadDataHandler = () => {
    console.log(pokemons)
  }

  return (
    <>
      <div className='d-flex justify-content-between'>
        <h1>Pokemons</h1>
        <Button variant='outline-info' onClick={reloadDataHandler}>
          Reload data
        </Button>
      </div>
      <div className='pokemons-block'>
        <ul className='pokemons-block-list'>
          {pokemons.map((pokemon) => {
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
