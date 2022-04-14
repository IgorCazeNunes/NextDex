import styled, { css } from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.nav`
  ${({ theme }) => css`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${theme.spacings.small};

    padding: ${theme.spacings.small} 0;

    @media (${theme.breakpoints.sm}) {
      gap: ${theme.spacings.medium};
    }
  `}
`;
