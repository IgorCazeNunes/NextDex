import HomeTemplate, { IHomeTemplateProps } from '../../templates/Home';

import { pokemonList } from 'utils/tests/mocks';

export default function Home(props: IHomeTemplateProps) {
  return <HomeTemplate {...props} />;
}

export function getServerSideProps() {
  return {
    props: {
      list: pokemonList,
    },
  };
}
