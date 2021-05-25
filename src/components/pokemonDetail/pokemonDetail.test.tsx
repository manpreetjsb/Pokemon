import React from 'react'
import { render } from '@testing-library/react'

import PokemonDetailCom from '.'

const abilities = [
  {
    is_hidden: true,
    ability: { name: 'blaze', url: 'https://pokeapi.co/api/v2/ability/66/' },
    slot: 1,
  },
]
const types = [
  {
    slot: 1,
    type: { name: 'fire', url: 'https://pokeapi.co/api/v2/type/10/' },
  },
]

const stats = [
  {
    base_stat: 39,
    effort: 0,
    stat: { name: 'hp', url: 'https://pokeapi.co/api/v2/stat/1/' },
  },
]

const sprites = {
  back_default:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/4.png',
}
const species = {
  name: 'blaze',
  url: 'https://pokeapi.co/api/v2/ability/66/',
}

const moves = [
  {
    move: { name: 'mega-punch', url: 'https://pokeapi.co/api/v2/move/5/' },
    version_group_details: [
      {
        level_learned_at: 0,
        move_learn_method: {
          name: 'machine',
          url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
        },
        version_group: {
          name: 'red-blue',
          url: 'https://pokeapi.co/api/v2/version-group/1/',
        },
      },
    ],
  },
]

export const DetailProp = {
  abilities: abilities,
  name: 'charmander',
  order: 2,
  sprites: sprites,
  types: types,
  stats: stats,
  species: species,
  moves: moves,
}

const setup = (prop: any) => {
  const utils = render(<PokemonDetailCom {...prop} />)

  return {
    ...utils,
  }
}

describe('PokemonDetailCom', () => {
  it('should show a Name', () => {
    const { getByTestId } = setup({ ...DetailProp })
    expect(getByTestId('pokemon-name').textContent).toEqual('charmander')
  })
  it('should show a image', () => {
    setup({ ...DetailProp })
    const displayedImage = document.querySelector('img') as HTMLImageElement
    expect(displayedImage.src).toContain('4.png')
  })
})
