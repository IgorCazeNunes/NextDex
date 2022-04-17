import { renderWithTheme } from 'utils/tests/helper';

import { screen } from '@testing-library/react';

import ResponsiveContainer from '.';

describe('<ResponsiveContainer />', () => {
  it('Should render Container with correct responsiviness', () => {
    renderWithTheme(
      <ResponsiveContainer>
        <h1>Test</h1>
      </ResponsiveContainer>,
    );

    const SContainer = screen.getByTestId('ResponsiveContainer');

    expect(SContainer).toHaveStyle({
      padding: '0 0.8rem',
    });

    expect(SContainer).toHaveStyleRule('padding', '0 4.0rem', {
      media: '(min-width: 414px)',
    });

    expect(SContainer).toHaveStyleRule('padding', '0 3.2rem', {
      media: '(min-width: 768px)',
    });

    expect(SContainer).toHaveStyleRule('padding', '0 0.8rem', {
      media: '(min-width: 1024px)',
    });

    expect(SContainer).toHaveStyleRule('padding', '0', {
      media: '(min-width: 1366px)',
    });
  });
});
