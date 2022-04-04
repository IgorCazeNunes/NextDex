import React from 'react';

import { PokemonCard } from 'components';
import { IPokemonCardProps } from 'components/PokemonCard';

import * as S from './styles';

export interface IPokemonListProps {
  list: IPokemonCardProps[];
}

const PokemonList = ({ list }: IPokemonListProps) => {
  return (
    <S.Container data-testid="PokemonList">
      {list.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          id={pokemon.id}
          name={pokemon.name}
          types={pokemon.types}
          image={pokemon.image}
        />
      ))}
    </S.Container>
  );
};

export default PokemonList;
