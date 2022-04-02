import { renderWithTheme } from 'utils/tests/helper';
import { screen } from '@testing-library/react';

import Badge from '.';

describe('<Badge />', () => {
  it('Should render default Badge with correct text and background', () => {
    renderWithTheme(<Badge />);

    expect(screen.getByText('normal')).toHaveStyle({
      background: '#9da0aa',
    });
  });

  it('Should render typed Badge with correct text and background', () => {
    renderWithTheme(<Badge type="dragon" />);

    expect(screen.getByText('dragon')).toBeInTheDocument();
    expect(screen.getByText('dragon')).toHaveStyle({
      background: '#0f6ac0',
    });
  });
});
