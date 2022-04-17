import styled, { css } from 'styled-components';

export const Button = styled.a`
  ${({ theme }) => css`
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    gap: ${theme.spacings.xsmall};

    svg {
      width: 2.5rem;
      height: 2.5rem;

      path {
        fill: ${theme.colors.text.black};
      }
    }
  `}
`;

export const Label = styled.span`
  ${({ theme }) => css`
    display: none;

    color: ${theme.colors.text.black};
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.weight.bold};
    line-height: ${theme.font.sizes.xlarge};
    text-transform: capitalize;

    @media (${theme.breakpoints.lg}) {
      display: block;
    }
  `}
`;
