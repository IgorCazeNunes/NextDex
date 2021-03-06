import { renderWithTheme } from 'utils/tests/helper';

import NavbarButtonList from '.';

describe('<NavbarButtonList />', () => {
  it('Should render NavbarButtonList responsive', () => {
    const { container } = renderWithTheme(<NavbarButtonList />);

    expect(container.firstChild).toHaveStyle({
      gap: '1.6rem',
    });

    expect(container.firstChild).toHaveStyleRule('gap', '2.4rem', {
      media: '(min-width: 414px)',
    });

    expect(container.firstChild).toHaveStyleRule('gap', '4.0rem', {
      media: '(min-width: 1024px)',
    });
  });
});
