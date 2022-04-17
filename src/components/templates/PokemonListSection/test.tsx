import { renderWithTheme } from 'utils/tests/helper';

import { screen } from '@testing-library/react';

import { pokemonList } from 'utils/tests/mocks';

import PokemonList from '.';

describe('<PokemonListSection />', () => {
  it('Should render Section with components: ResponsiveContainer and PokemonList', () => {
    renderWithTheme(<PokemonList list={pokemonList} />);

    expect(screen.getByTestId('ResponsiveContainer')).toBeInTheDocument();

    expect(screen.getByTestId('PokemonList')).toBeInTheDocument();
  });
});
