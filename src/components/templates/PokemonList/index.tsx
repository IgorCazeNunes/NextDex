import React from 'react';

import { PokemonCard, ResponsiveContainer } from 'components';
import { IPokemonCardProps } from 'components/organisms/PokemonCard';

import * as S from './styles';

export interface IPokemonListProps {
  list: IPokemonCardProps[];
}

const PokemonList = ({ list }: IPokemonListProps) => {
  return (
    <S.Container>
      <ResponsiveContainer>
        <S.Content data-testid="PokemonList">
          {list.map((pokemon) => (
            <PokemonCard
              key={pokemon.id}
              id={pokemon.id}
              name={pokemon.name}
              types={pokemon.types}
              image={pokemon.image}
            />
          ))}
        </S.Content>
      </ResponsiveContainer>
    </S.Container>
  );
};

export default PokemonList;
