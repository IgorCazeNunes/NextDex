import { TypeIcon } from 'components';

import * as S from './styles';

export interface BadgeProps {
  type:
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

const Badge = ({ type = 'normal' }: BadgeProps) => (
  <S.Container type={type}>
    <TypeIcon type={type} />

    {type}
  </S.Container>
);

export default Badge;
