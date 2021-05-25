import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react'
import fetch from 'node-fetch'
import { mocked } from 'ts-jest/utils'
import PokemonList from '.'
import { DetailProp } from '../pokemonDetail/pokemonDetail.test'

jest.mock('node-fetch', () => {
  return jest.fn()
})

beforeEach(() => {
  mocked(fetch).mockClear()
})

const setup = () => {
  const utils = render(<PokemonList />)

  return {
    ...utils,
  }
}

describe('PokemonList', () => {
  it('should load list', async () => {
    mocked(fetch).mockImplementation((): Promise<any> => {
      return Promise.resolve({
        json() {
          return Promise.resolve({
            results: [
              {
                name: 'charmander',
                url: 'https://pokeapi.co/api/v2/pokemon/4/',
              },
              { name: 'ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/' },
            ],
          })
        },
      })
    })
    const { queryByText } = setup()
    await waitFor(() => {
      expect(queryByText('charmander')).toBeInTheDocument()
      expect(queryByText('ivysaur')).toBeInTheDocument()
    })
  })

  it('should click load other component', async () => {
    mocked(fetch).mockImplementation((): Promise<any> => {
      return Promise.resolve({
        json() {
          return Promise.resolve({
            results: [
              {
                name: 'charmander',
                url: 'https://pokeapi.co/api/v2/pokemon/4/',
              },
              { name: 'ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/' },
            ],
          })
        },
      })
    })

    const { queryByText, getByTestId } = setup()
    await waitFor(() => {
      expect(queryByText('charmander')).toBeInTheDocument()
      expect(queryByText('ivysaur')).toBeInTheDocument()
      mocked(fetch).mockImplementation((): Promise<any> => {
        return Promise.resolve({
          json() {
            return Promise.resolve({
              ...DetailProp,
            })
          },
        })
      })
      fireEvent.click(queryByText('charmander') as HTMLButtonElement)
    })

    expect(getByTestId('pokemon-name').textContent).toEqual('charmander')
  })
})
