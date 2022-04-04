import dottedSmall from 'assets/imgs/dottedSmall.png';
import pokeball from 'assets/imgs/pokeball-white.png';

import styled, { css } from 'styled-components';

import { TPokemonType } from 'components/TypeBadge';

export const Container = styled.li`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    align-items: flex-end;

    height: 14rem;

    @media (${theme.breakpoints.lg}) {
      height: 17rem;
    }
  `}
`;

export const Content = styled.section<{ type: TPokemonType }>`
  ${({ theme, type }) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: ${theme.spacings.xxsmall};

    height: 11.5rem;
    width: 100%;

    padding: ${theme.spacings.xsmall};

    background: ${theme.colors.type.background[type] ||
    theme.colors.type.background['normal']};

    background-image: url(${dottedSmall.src}), url(${pokeball.src});
    background-repeat: no-repeat, no-repeat;
    background-size: 10rem, 14rem;
    background-position: 30% 5%, 100% 50%;

    border-radius: ${theme.border.radius};

    img {
      width: 13rem;
      height: 13rem;

      margin-bottom: ${theme.spacings.large};
    }

    @media (${theme.breakpoints.lg}) {
      height: 14rem;

      img {
        width: 16rem;
        height: 16rem;

        margin-bottom: ${theme.spacings.xxlarge};
      }
    }
  `}
`;

export const MainContent = styled.aside`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;

    color: ${theme.colors.text.number};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.weight.bold};

    @media (${theme.breakpoints.lg}) {
      justify-content: space-around;
      height: 100%;
    }

    .dottedSmall {
    }

    h3 {
      color: ${theme.colors.text.white};
      font-size: ${theme.font.sizes.large};
      font-weight: ${theme.font.weight.bold};

      margin-bottom: ${theme.spacings.xxsmall};
    }

    ul {
      display: flex;
      flex-direction: row;
      gap: ${theme.spacings.xxsmall};

      list-style: none;
    }
  `}
`;
