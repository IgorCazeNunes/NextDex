import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0 ${theme.spacings.xxsmall};

    width: min(100%, ${theme.grid.container});

    @media (${theme.breakpoints.sm}) {
      padding: 0 ${theme.spacings.large};
    }

    @media (${theme.breakpoints.md}) {
      padding: 0 ${theme.spacings.medium};
    }

    @media (${theme.breakpoints.lg}) {
      padding: 0 ${theme.spacings.xxsmall};
    }

    @media (${theme.breakpoints.xl}) {
      padding: 0;
    }
  `}
`;
