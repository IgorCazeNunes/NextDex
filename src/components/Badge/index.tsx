import React from 'react';

import { TypeIcon } from 'components';

import * as S from './styles';

export interface BadgeProps {
  type?:
    | 'bug'
    | 'dark'
    | 'dragon'
    | 'electric'
    | 'fairy'
    | 'fighting'
    | 'fire'
    | 'flying'
    | 'ghost'
    | 'grass'
    | 'ground'
    | 'ice'
    | 'normal'
    | 'poison'
    | 'psychic'
    | 'rock'
    | 'steel'
    | 'water';
}

const Badge: React.FC<BadgeProps> = ({ type }: BadgeProps) => (
  <S.Container type={type}>
    <TypeIcon type={type} />

    {type || 'normal'}
  </S.Container>
);

export default Badge;
