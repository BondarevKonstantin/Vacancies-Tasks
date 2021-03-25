import React from "react"
import { Redirect, BrowserRouter as Router, Route } from "react-router-dom"
import { Container } from "react-bootstrap"

import TableScreen from "./screens/TableScreen"
import PokemonScreen from "./screens/PokemonScreen"

const App = () => {
  return (
    <Router>
      <Redirect to='/pokemons' />
      <main className='py-4'>
        <Container>
          <Route path='/pokemons' component={TableScreen} exact />
          <Route path='/pokemons/details/:id' component={PokemonScreen} />
        </Container>
      </main>
    </Router>
  )
}

export default App
