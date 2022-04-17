import { render, screen } from '@testing-library/react';

import NavbarIcon from '.';

describe('<TypeIcon />', () => {
  it('Should render Icon based on type prop.', () => {
    render(<NavbarIcon icon="filter" />);

    expect(screen.getByTestId('NavbarIcon-filter')).toBeInTheDocument();
  });
});
