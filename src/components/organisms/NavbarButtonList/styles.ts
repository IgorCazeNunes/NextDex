import styled, { css } from 'styled-components';

export const Container = styled.ul`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: ${theme.spacings.xsmall};

    list-style: none;

    @media (${theme.breakpoints.sm}) {
      gap: ${theme.spacings.small};
    }

    @media (${theme.breakpoints.lg}) {
      gap: ${theme.spacings.large};
    }

    transition: gap 0.5s;
  `}
`;
