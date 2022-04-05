import { renderWithTheme } from 'utils/tests/helper';

import { screen } from '@testing-library/react';

import { IPokemonCardProps } from 'components/PokemonCard';

import PokemonList from '.';

describe('<PokemonListSection />', () => {
  const listMock: IPokemonCardProps[] = [
    {
      id: '001',
      name: 'charizard',
      types: ['fire', 'flying'],
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png',
    },
    {
      id: '002',
      name: 'charizard',
      types: ['fire', 'flying'],
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png',
    },
    {
      id: '003',
      name: 'charizard',
      types: ['fire', 'flying'],
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png',
    },
    {
      id: '004',
      name: 'charizard',
      types: ['fire', 'flying'],
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png',
    },
    {
      id: '005',
      name: 'charizard',
      types: ['fire', 'flying'],
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png',
    },
    {
      id: '006',
      name: 'charizard',
      types: ['fire', 'flying'],
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png',
    },
  ];

  it('Should render Section with components: ResponsiveContainer and PokemonList', () => {
    renderWithTheme(<PokemonList list={listMock} />);

    expect(screen.getByTestId('ResponsiveContainer')).toBeInTheDocument();

    expect(screen.getByTestId('PokemonList')).toBeInTheDocument();
  });
});
