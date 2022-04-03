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

export interface ITypeBadgeProps {
  type: TPokemonType;
}

const TypeBadge = ({ type }: ITypeBadgeProps) => (
  <S.Container type={type}>
    <TypeIcon type={type} />

    {type}
  </S.Container>
);

export default TypeBadge;
