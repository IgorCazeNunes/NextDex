import { renderWithTheme } from 'utils/tests/helper';

import { screen } from '@testing-library/react';

import { pokemonList } from 'utils/tests/mocks';

import PokemonList from '.';

describe('<PokemonList />', () => {
  it('Should render List with correct grid responsiviness', () => {
    renderWithTheme(<PokemonList list={pokemonList} />);

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
        media: '(min-width: 1366px)',
      },
    );
  });
});
