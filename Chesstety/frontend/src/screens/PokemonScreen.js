import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPokemonsDetails } from "../actions/pokemonActions"

import { Link } from "react-router-dom"

import {
  Row,
  Col,
  ListGroup,
  Card,
  Button,
  Image,
  Table,
  Spinner,
} from "react-bootstrap"

const PokemonScreen = ({ match, history }) => {
  const dispatch = useDispatch()

  const pokemonData = useSelector((state) => state.pokemonDetails)
  const { loading, error, pokemon } = pokemonData

  const [updateRequest, setUpdateRequest] = useState(0)

  useEffect(() => {
    dispatch(getPokemonsDetails(match.params.id))
  }, [dispatch, match, history, updateRequest])

  return (
    <>
      <Link style={{ textDecoration: "none" }} to='/pokemons'>
        <Button variant='outline-secondary' size='lg' block>
          Back to table
        </Button>
      </Link>
      {loading ? (
        <Spinner className='mt-4' animation='border' />
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <>
          <Button
            className='mt-2'
            variant='outline-info'
            size='lg'
            block
            onClick={() => setUpdateRequest(updateRequest + 1)}
          >
            Reload data
          </Button>

          <Card className='mt-3'>
            <Card.Body>
              <Row>
                <Col md={4}>
                  <Image src={pokemon.imageUrl} />
                </Col>
                <Col md={{ span: 6, offset: 1 }}>
                  <ListGroup>
                    <ListGroup.Item className='text-center'>
                      <strong>Name:</strong> {pokemon.name}
                    </ListGroup.Item>
                    <ListGroup.Item className='text-center'>
                      <strong>National Pokedex Number:</strong>{" "}
                      {pokemon.nationalPokedexNumber}
                    </ListGroup.Item>
                    <ListGroup.Item className='text-center'>
                      <strong>Types:</strong> {pokemon.types}
                    </ListGroup.Item>
                    <ListGroup.Item className='text-center'>
                      <strong>Subtype:</strong> {pokemon.subtype}
                    </ListGroup.Item>
                    <ListGroup.Item className='text-center'>
                      <strong>Evolves From:</strong> {pokemon.evolvesFrom}
                    </ListGroup.Item>
                    <ListGroup.Item className='text-center'>
                      <strong>Health:</strong> {pokemon.hp}
                    </ListGroup.Item>
                    <ListGroup.Item className='text-center'>
                      <strong>Rarity:</strong> {pokemon.rarity}
                    </ListGroup.Item>
                  </ListGroup>
                </Col>
              </Row>
              <Card className='mt-4'>
                <Card.Body>
                  <h2 className='text-center'>Attacks</h2>
                  {pokemon.attacks.map((attack) => {
                    return (
                      <ListGroup className='mt-4'>
                        <ListGroup.Item className='text-center'>
                          <h3>{attack.name}</h3>
                        </ListGroup.Item>

                        <ListGroup.Item className='text-center'>
                          <strong>Cost:</strong>{" "}
                          {attack.cost.map((cost, index) => {
                            return index !== attack.cost.length - 1
                              ? cost + ",  "
                              : cost
                          })}
                        </ListGroup.Item>

                        <ListGroup.Item className='text-center'>
                          <strong>Description:</strong> {attack.text}
                        </ListGroup.Item>

                        <ListGroup.Item className='text-center'>
                          <strong>Damage:</strong> {attack.damage}
                        </ListGroup.Item>

                        <ListGroup.Item className='text-center'>
                          <strong>Energy Cost:</strong>{" "}
                          {attack.convertedEnergyCost}
                        </ListGroup.Item>
                      </ListGroup>
                    )
                  })}

                  <h2 className='text-center mt-5'>Weaknesses</h2>

                  <Table className='mt-4' striped bordered hover>
                    <thead>
                      <tr>
                        <th>Type</th>
                        <th>Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pokemon.weaknesses.map((weakness) => {
                        return (
                          <tr>
                            <td>{weakness.type}</td>
                            <td>{weakness.value}</td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            </Card.Body>
          </Card>
        </>
      )}
    </>
  )
}

export default PokemonScreen
