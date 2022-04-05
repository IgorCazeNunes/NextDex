import { PokemonList, ResponsiveContainer } from 'components';

import { IPokemonCardProps } from 'components/PokemonCard';

import * as S from './styles';

export interface IPokemonListProps {
  list: IPokemonCardProps[];
}

const PokemonListSection = ({ list }: IPokemonListProps) => {
  return (
    <S.Container>
      <ResponsiveContainer>
        <PokemonList list={list} />
      </ResponsiveContainer>
    </S.Container>
  );
};

export default PokemonListSection;
