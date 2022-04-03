import { TypeIcon } from 'components';

import * as S from './styles';

export type TPokemonType =
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

export interface IBadgeProps {
  type: TPokemonType;
}

const Badge = ({ type = 'normal' }: IBadgeProps) => (
  <S.Container type={type}>
    <TypeIcon type={type} />

    {type}
  </S.Container>
);

export default Badge;
