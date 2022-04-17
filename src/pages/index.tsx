import HomeTemplate, { IHomeTemplateProps } from '../templates/Home';

export default function Home(props: IHomeTemplateProps) {
  return <HomeTemplate {...props} />;
}

export function getServerSideProps() {
  return {
    props: {
      list: [
        {
          id: '001',
          name: 'bulbasaur',
          types: ['grass', 'poison'],
          image:
            'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
        },
        {
          id: '002',
          name: 'ivysaur',
          types: ['grass', 'poison'],
          image:
            'https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png',
        },
        {
          id: '003',
          name: 'venusaur',
          types: ['grass', 'poison'],
          image:
            'https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png',
        },
        {
          id: '004',
          name: 'charmander',
          types: ['fire'],
          image:
            'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
        },
        {
          id: '005',
          name: 'charmeleon',
          types: ['fire'],
          image:
            'https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png',
        },
        {
          id: '006',
          name: 'charizard',
          types: ['fire', 'flying'],
          image:
            'https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png',
        },
        {
          id: '007',
          name: 'squirtle',
          types: ['water'],
          image:
            'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png',
        },
        {
          id: '008',
          name: 'wartortle',
          types: ['water'],
          image:
            'https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png',
        },
        {
          id: '009',
          name: 'blastoise',
          types: ['water'],
          image:
            'https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png',
        },
      ],
    },
  };
}
