import { renderWithTheme } from 'utils/tests/helper';

import { screen } from '@testing-library/react';

import { TPokemonType } from 'components/TypeBadge';

import PokemonCard from '.';

describe('<PokemonCard />', () => {
  it('Should render default Card background with incorrect main type prop', () => {
    const types = ['???', 'dragon'] as unknown as TPokemonType[];

    renderWithTheme(<PokemonCard id="???" name="???" types={types} />);

    expect(screen.getByTestId('PokemonCard-???')).toHaveStyle({
      background: '#b5b9c4',
    });
  });

  it('Should render Card with correct id, name and background', () => {
    renderWithTheme(
      <PokemonCard id="001" name="Charizard" types={['fire', 'flying']} />,
    );

    expect(screen.getByText('#001')).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /Charizard/i }),
    ).toBeInTheDocument();

    expect(screen.getByTestId('PokemonCard-Charizard')).toHaveStyle({
      background: '#ffa756',
    });
  });

  it('Should render Card with all PokemonTypes correctly', () => {
    renderWithTheme(
      <PokemonCard id="001" name="Charizard" types={['fire', 'flying']} />,
    );

    expect(screen.getAllByTestId('PokemonCard-Type')).toHaveLength(2);
  });
});
