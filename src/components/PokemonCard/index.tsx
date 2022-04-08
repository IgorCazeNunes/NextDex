import React, { memo } from 'react';

import { TypeBadge } from 'components';

import { TPokemonType } from 'components/TypeBadge';

import * as S from './styles';

export interface IPokemonCardProps {
  id: string;
  name: string;
  types: TPokemonType[];
  image?: string;
}

const PokemonCard = ({ id, name, types, image }: IPokemonCardProps) => {
  return (
    <S.Container>
      <S.Content type={types[0]} data-testid={`PokemonCard-${name}`}>
        <S.MainContent>
          <div>
            <span>#{id}</span>

            <h3>{name}</h3>
          </div>

          <ul>
            {types.map((type) => (
              <li key={type} data-testid={`PokemonCard-Type`}>
                <TypeBadge type={type} />
              </li>
            ))}
          </ul>
        </S.MainContent>

        {image ? <img src={image} alt={`Front image of ${name}`} /> : null}
      </S.Content>
    </S.Container>
  );
};

export default memo(PokemonCard);
