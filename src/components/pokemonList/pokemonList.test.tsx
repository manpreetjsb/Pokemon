import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react'
import fetch from 'node-fetch'
import { mocked } from 'ts-jest/utils'
import PokemonList from '.'

jest.mock('node-fetch', () => {
  return jest.fn()
})

beforeEach(() => {
  mocked(fetch).mockClear()
})

mocked(fetch).mockImplementation((): Promise<any> => {
  return Promise.resolve({
    json() {
      return Promise.resolve({
        results: [
          { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
          { name: 'ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/' },
        ],
      })
    },
  })
})

const setup = () => {
  const utils = render(<PokemonList />)

  return {
    ...utils,
  }
}

describe('PokemonList', () => {
  it('should has list', async () => {
    const { queryByText } = setup()
    await waitFor(() => {
      expect(queryByText('bulbasaur')).toBeInTheDocument()
      expect(queryByText('ivysaur')).toBeInTheDocument()
    })
  })

  /*   it('should click', async () => {
    const { queryByText } = setup()
    await waitFor(() => {
      expect(queryByText('bulbasaur')).toBeInTheDocument()
      expect(queryByText('ivysaur')).toBeInTheDocument()
    })
  }) */
})
