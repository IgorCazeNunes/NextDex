import { renderWithTheme } from 'utils/tests/helper';

import Navbar from '.';

describe('<Navbar />', () => {
  it('Should render Navbar with correct tags for SEO.', () => {
    const { container } = renderWithTheme(<Navbar />);

    const header = container.querySelector('header');

    expect(header).toBeInTheDocument();

    expect(header?.querySelector('nav')).toBeInTheDocument();
  });
});
