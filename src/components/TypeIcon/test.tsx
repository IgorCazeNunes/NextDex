import { render, screen } from '@testing-library/react';

import TypeIcon from '.';

describe('<TypeIcon />', () => {
  it('Should render default icon', () => {
    render(<TypeIcon />);

    expect(screen.getByTestId('TypeIcon-normal')).toBeInTheDocument();
  });

  it('Should render correct icon based in prop', () => {
    render(<TypeIcon type="bug" />);

    expect(screen.getByTestId('TypeIcon-bug')).toBeInTheDocument();
  });
});
