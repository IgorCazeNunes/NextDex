import { render, screen } from '@testing-library/react';

import PokemonCard from '.';

describe('<PokemonCard />', () => {
  it('Should render', () => {
    render(<PokemonCard />);

    expect(
      screen.getByRole('heading', { name: /Pokemon Card/i }),
    ).toBeInTheDocument();
  });
});
