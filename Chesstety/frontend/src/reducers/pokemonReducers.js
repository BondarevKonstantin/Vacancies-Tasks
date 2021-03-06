import {
  POKEMON_LIST_REQUEST,
  POKEMON_LIST_SUCCESS,
  POKEMON_LIST_FAIL,
  POKEMON_DETAILS_REQUEST,
  POKEMON_DETAILS_SUCCESS,
  POKEMON_DETAILS_FAIL,
} from "../constants/pokemonConstants"

export const pokemonListReducer = (state = { pokemons: [] }, action) => {
  switch (action.type) {
    case POKEMON_LIST_REQUEST:
      return { loading: true, pokemons: [] }
    case POKEMON_LIST_SUCCESS:
      return { loading: false, pokemons: action.payload }
    case POKEMON_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const pokemonDetailsReducer = (
  state = {
    pokemon: {
      types: [],
      attacks: [],
      weaknesses: [],
    },
  },
  action
) => {
  switch (action.type) {
    case POKEMON_DETAILS_REQUEST:
      return {
        loading: true,
        pokemon: {
          types: [],
          attacks: [],
          weaknesses: [],
        },
      }
    case POKEMON_DETAILS_SUCCESS:
      return { loading: false, pokemon: action.payload }
    case POKEMON_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
