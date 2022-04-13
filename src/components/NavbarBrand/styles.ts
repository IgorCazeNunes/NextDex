import styled, { css } from 'styled-components';

export const Brand = styled.h1`
  ${({ theme }) => css`
    display: inline-flex;
    align-items: center;
    gap: ${theme.spacings.xxsmall};

    color: ${theme.colors.text.black};
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.weight.bold};
    line-height: ${theme.font.sizes.xlarge};
    text-transform: capitalize;

    svg {
      width: ${theme.font.sizes.huge};
      height: ${theme.font.sizes.huge};

      path {
        fill: ${theme.colors.text.black};
      }
    }
  `}
`;
