import { renderWithTheme } from 'utils/tests/helper';

import { screen } from '@testing-library/react';

import { IPokemonCardProps } from 'components/PokemonCard';

import PokemonList from '.';

describe('<PokemonList />', () => {
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

  it('Should render List with correct grid responsiviness', () => {
    renderWithTheme(<PokemonList list={listMock} />);

    const SPokemonList = screen.getByTestId('PokemonList');

    expect(SPokemonList).toHaveStyle({
      'grid-template-columns': '1fr',
    });

    expect(SPokemonList).toHaveStyleRule(
      'grid-template-columns',
      'repeat(2,1fr)',
      {
        media: '(min-width: 768px)',
      },
    );

    expect(SPokemonList).toHaveStyleRule(
      'grid-template-columns',
      'repeat(3,1fr)',
      {
        media: '(min-width: 1024px)',
      },
    );
  });
});
