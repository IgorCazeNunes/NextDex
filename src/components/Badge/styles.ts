import styled, { css } from 'styled-components';

import { BadgeProps } from './index';

export const Container = styled.span<BadgeProps>`
  ${({ theme, type }) => css`
    display: inline-flex;
    padding: 0.5rem;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    background: ${theme.colors.type.color[type] ||
    theme.colors.type.color['normal']};
    border-radius: 0.3rem;

    color: ${theme.colors.text.white};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.weight.medium};
    text-transform: capitalize;

    svg {
      width: 1.5rem;
      height: 1.5rem;

      path {
        fill: ${theme.colors.text.white};
      }
    }
  `}
`;
