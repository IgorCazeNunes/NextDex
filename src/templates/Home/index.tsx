import { Navbar, PokemonList } from 'components';
import { IPokemonCardProps } from 'components/organisms/PokemonCard';

import * as S from './styles';
export interface IHomeTemplateProps {
  list: IPokemonCardProps[];
}

const HomeTemplate = ({ list }: IHomeTemplateProps) => (
  <>
    <Navbar />

    <S.Main>
      <PokemonList list={list} />
    </S.Main>
  </>
);

export default HomeTemplate;
