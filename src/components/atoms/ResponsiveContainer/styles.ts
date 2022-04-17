import styled, { css } from 'styled-components';

export const ResponsiveContainer = styled.div`
  ${({ theme }) => css`
    display: flex;

    padding: 0 ${theme.spacings.xxsmall};

    width: min(100%, ${theme.grid.container});

    @media (${theme.breakpoints.sm}) {
      padding: 0 ${theme.spacings.large};
    }

    @media (${theme.breakpoints.md}) {
      padding: 0 ${theme.spacings.medium};
    }

    @media (${theme.breakpoints.xl}) {
      padding: 0;
    }
  `}
`;
