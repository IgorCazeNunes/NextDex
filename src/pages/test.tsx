import { screen } from '@testing-library/react';

import { renderWithTheme } from 'utils/tests/helper';

import Home from '.';

describe('<Home />', () => {
  it('Should render home', () => {
    renderWithTheme(<Home />);

    expect(
      screen.getByRole('heading', { name: /ReactDex/i }),
    ).toBeInTheDocument();
  });
});
