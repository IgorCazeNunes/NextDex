import { renderWithTheme } from 'utils/tests/helper';
import { screen } from '@testing-library/react';

import TypeBadge, { TPokemonType } from '.';

describe('<TypeBadge />', () => {
  it('Should render default Badge background with incorrect type prop', () => {
    const type = 'shadow' as unknown as TPokemonType;

    renderWithTheme(<TypeBadge type={type} />);

    expect(screen.getByText('shadow')).toHaveStyle({
      background: '#9da0aa',
    });
  });

  it('Should render Badge with correct text and background', () => {
    renderWithTheme(<TypeBadge type="dragon" />);

    expect(screen.getByText('dragon')).toBeInTheDocument();
    expect(screen.getByText('dragon')).toHaveStyle({
      background: '#0f6ac0',
    });
  });
});
