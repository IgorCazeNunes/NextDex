import styled, { css } from 'styled-components';

export const Container = styled.ul`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: ${theme.spacings.small};

    list-style: none;

    @media (${theme.breakpoints.lg}) {
      gap: ${theme.spacings.large};
    }
  `}
`;
