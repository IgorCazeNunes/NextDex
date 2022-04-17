import { Navbar, PokemonList } from 'components';
import { IPokemonCardProps } from 'components/organisms/PokemonCard';

export interface IHomeTemplateProps {
  list: IPokemonCardProps[];
}

const HomeTemplate = ({ list }: IHomeTemplateProps) => (
  <>
    <Navbar />

    <PokemonList list={list} />
  </>
);

export default HomeTemplate;
