import { screen } from '@testing-library/react';

import { renderWithTheme } from 'utils/tests/helper';

import NavbarBrand from '.';

describe('<NavbarBrand />', () => {
  it('Should render Brand with icon and header.', () => {
    renderWithTheme(<NavbarBrand>NextDex</NavbarBrand>);

    expect(screen.getByTestId('NavbarIcon-pokeball')).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /NextDex/, level: 1 }),
    ).toBeInTheDocument();
  });
});
