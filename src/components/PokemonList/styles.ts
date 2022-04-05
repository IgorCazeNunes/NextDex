import styled, { css } from 'styled-components';

export const Container = styled.ul`
  ${({ theme }) => css`
    display: grid;
    gap: ${theme.spacings.xxsmall} 0;
    grid-template-columns: 1fr;

    margin: 0 auto;

    width: min(100%, 40rem);

    @media (${theme.breakpoints.md}) {
      gap: ${theme.spacings.xsmall} ${theme.spacings.small};
      grid-template-columns: repeat(2, 1fr);

      margin: 0;
      width: min(100%, 82rem);
    }

    @media (${theme.breakpoints.lg}) {
      gap: ${theme.spacings.xsmall} ${theme.spacings.medium};
      grid-template-columns: repeat(3, 1fr);
      width: 100%;
    }
  `}
`;
