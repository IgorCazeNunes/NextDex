import styled, { css } from 'styled-components';

export const Main = styled.main`
  ${({ theme }) => css`
    margin: 0;

    @media (${theme.breakpoints.sm}) {
      margin: ${theme.spacings.xxsmall} 0;
    }

    @media (${theme.breakpoints.md}) {
      margin: ${theme.spacings.small} 0;
    }
  `}
`;
