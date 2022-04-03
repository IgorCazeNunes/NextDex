import { TypeIcon } from 'components';

import * as S from './styles';

export type PokemonType =
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

export interface BadgeProps {
  type: PokemonType;
}

const Badge = ({ type = 'normal' }: BadgeProps) => (
  <S.Container type={type}>
    <TypeIcon type={type} />

    {type}
  </S.Container>
);

export default Badge;
