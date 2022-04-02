import { render, screen } from '@testing-library/react';

import TypeIcon, { IconProps } from '.';

describe('<TypeIcon />', () => {
  it('Should render default icon with incorrect type', () => {
    const iconProps = { type: '???' } as unknown as IconProps;

    render(<TypeIcon {...iconProps} />);

    expect(screen.getByTestId('TypeIcon-normal')).toBeInTheDocument();
  });

  it('Should render correct icon based in prop', () => {
    render(<TypeIcon type="bug" />);

    expect(screen.getByTestId('TypeIcon-bug')).toBeInTheDocument();
  });
});
