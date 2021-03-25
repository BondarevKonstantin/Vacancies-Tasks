import axios from "axios"

import {
  POKEMON_LIST_REQUEST,
  POKEMON_LIST_SUCCESS,
  POKEMON_LIST_FAIL,
  POKEMON_DETAILS_REQUEST,
  POKEMON_DETAILS_SUCCESS,
  POKEMON_DETAILS_FAIL,
} from "../constants/pokemonConstants"

export const listPokemons = () => async (dispatch) => {
  try {
    dispatch({ type: POKEMON_LIST_REQUEST })

    const { data } = await axios.get("https://api.pokemontcg.io/v1/cards")

    dispatch({
      type: POKEMON_LIST_SUCCESS,
      payload: data.cards,
    })
  } catch (error) {
    dispatch({
      type: POKEMON_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const getPokemonsDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: POKEMON_DETAILS_REQUEST })

    const { data } = await axios.get(`https://api.pokemontcg.io/v1/cards/${id}`)

    dispatch({
      type: POKEMON_DETAILS_SUCCESS,
      payload: data.card,
    })
  } catch (error) {
    dispatch({
      type: POKEMON_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
