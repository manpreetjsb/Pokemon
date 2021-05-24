import React, { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import fetch from 'node-fetch'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { Container } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import { IPokemonDetail, IpokemonCommen } from '../../types'
import PokemonDetailCom from '../pokemonDetail'

const PokemonList: React.FC = () => {
  const [pokemonList, setPokemonList] = useState<IpokemonCommen[]>([])
  const [pokemonDetail, setPokemonDetail] = useState<IPokemonDetail | null>()
  const [searchList, setSearchList] = useState<string>('')

  const handleChange = (event: { target: { value: string } }) => {
    setSearchList(event.target.value)
    setPokemonDetail(null)
    const newList = pokemonList.filter((item) =>
      item.name.toLowerCase().includes(event.target.value.toLowerCase())
    )
    setPokemonList(newList)
  }

  const getPokemon = (url: string) => {
    fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data: IPokemonDetail) => setPokemonDetail(data))
  }

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => setPokemonList(data.results))
  }, [])

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Typography component='h5' variant='h5'>
            Pokemon List
            <TextField
              value={searchList}
              variant='outlined'
              placeholder='Search by Name'
              onChange={handleChange}
            />
          </Typography>
          <Box>
            <List component='nav' aria-label='secondary mailbox folders'>
              {pokemonList.map((item) => (
                <ListItem
                  button
                  key={item.name}
                  component='a'
                  onClick={() => {
                    getPokemon(item.url)
                  }}
                >
                  <ListItemText>{item.name}</ListItemText>
                </ListItem>
              ))}
            </List>
          </Box>
        </Grid>
        <Grid item xs={8}>
          <Typography component='h5' variant='h5'>
            Detail
          </Typography>
          {pokemonDetail && <PokemonDetailCom {...pokemonDetail} />}
        </Grid>
      </Grid>
    </Container>
  )
}
export default PokemonList
