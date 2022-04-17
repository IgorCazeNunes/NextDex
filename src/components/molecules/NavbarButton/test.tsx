import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helper';

import NavbarButton from '.';

describe('<NavbarButton />', () => {
  it('Should render NavbarButton without icon.', () => {
    renderWithTheme(<NavbarButton label="NextDex" />);

    expect(screen.getByText('NextDex')).toBeInTheDocument();
    expect(screen.queryByTestId('NavbarIcon-filter')).not.toBeInTheDocument();
  });

  it('Should render NavbarButton with icon.', () => {
    renderWithTheme(<NavbarButton label="filtro" icon="filter" />);

    expect(screen.getByTestId('NavbarButton-label')).toHaveTextContent(
      'filtro',
    );
    expect(screen.getByTestId('NavbarIcon-filter')).toBeInTheDocument();
  });

  it('Should render NavbarButton with text in desktop', () => {
    renderWithTheme(<NavbarButton label="filtro" icon="filter" />);

    expect(screen.getByTestId('NavbarButton-label')).toHaveStyleRule(
      'display',
      'block',
      {
        media: '(min-width: 1024px)',
      },
    );
  });
});
