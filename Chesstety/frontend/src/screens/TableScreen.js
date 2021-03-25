import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { listPokemons } from "../actions/pokemonActions"

import { Link } from "react-router-dom"
import { Button, Spinner } from "react-bootstrap"

const TableScreen = () => {
  const dispatch = useDispatch()

  const pokemonList = useSelector((state) => state.pokemonList)
  const { loading, error, pokemons } = pokemonList

  const [updateRequest, setUpdateRequest] = useState(0)

  useEffect(() => {
    dispatch(listPokemons())
  }, [dispatch, updateRequest])

  return (
    <>
      <div className='d-flex justify-content-between'>
        <h1>Pokemons</h1>
        {loading ? (
          ""
        ) : (
          <Button
            variant='outline-info'
            onClick={() => setUpdateRequest(updateRequest + 1)}
          >
            Reload data
          </Button>
        )}
      </div>

      {loading ? (
        <Spinner animation='border' />
      ) : error ? (
        <h3>{error}</h3>
      ) : (
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
      )}
    </>
  )
}

export default TableScreen
