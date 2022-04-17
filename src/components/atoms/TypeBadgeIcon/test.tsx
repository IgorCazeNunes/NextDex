import { render, screen } from '@testing-library/react';

import { TPokemonType } from 'components/molecules/TypeBadge';

import TypeIcon from '.';

describe('<TypeIcon />', () => {
  it('Should render default Icon with incorrect type prop.', () => {
    const type = '???' as unknown as TPokemonType;

    render(<TypeIcon type={type} />);

    expect(screen.getByTestId('TypeIcon-normal')).toBeInTheDocument();
  });

  it('Should render Icon based on type prop.', () => {
    render(<TypeIcon type="bug" />);

    expect(screen.getByTestId('TypeIcon-bug')).toBeInTheDocument();
  });
});
