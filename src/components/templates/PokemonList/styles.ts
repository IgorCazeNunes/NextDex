import styled, { css } from 'styled-components';

import { ResponsiveContainer } from 'components/atoms/ResponsiveContainer/styles';

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  ${ResponsiveContainer} {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Content = styled.ul`
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
      width: min(100%, 92rem);
    }

    @media (${theme.breakpoints.xl}) {
      grid-template-columns: repeat(3, 1fr);
      width: 100%;
    }
  `}
`;
