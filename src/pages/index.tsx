import { TPokemonType } from 'components/molecules/TypeBadge';
import { IPokemonCardProps } from 'components/organisms/PokemonCard';
import { useInfiniteQuery } from 'react-query';
import HomeTemplate from '../templates/Home';

interface IPokemonData {
  id: string;
  name: string;
  sprites: {
    other: {
      'official-artwork': {
        // eslint-disable-next-line camelcase
        front_default: string;
      };
    };
  };
  types: { slot: number; type: { name: TPokemonType } }[];
}

export default function Home() {
  const fetchPokemon = async ({ pageUrl = '' }) => {
    const request = await fetch(pageUrl);
    const pokemon = await request.json();
    return pokemon;
  };

  const fetchPokemonList = async ({
    pageParam = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=18',
  }) => {
    const { results, next } = await fetch(pageParam).then((response) =>
      response.json(),
    );

    const pokemonList = await Promise.all(
      results.map(({ url = '' }) => url && fetchPokemon({ pageUrl: url })),
    );

    const formattedPokemonList: IPokemonCardProps[] = pokemonList.map(
      (pokemon: IPokemonData) => {
        const typeList = pokemon.types.map((type) => type.type.name);

        return {
          id: pokemon.id,
          name: pokemon.name,
          types: typeList,
          image: pokemon.sprites.other['official-artwork'].front_default,
        };
      },
    );

    return { response: formattedPokemonList, nextPage: next };
  };

  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery('pokemons', fetchPokemonList, {
      getNextPageParam: (lastPage) => lastPage.nextPage,
    });

  if (isLoading || !data) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <HomeTemplate list={data?.pages.map((page) => page.response).flat()} />

      {hasNextPage && (
        <button
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          Load more pokemons...
        </button>
      )}

      {isFetchingNextPage && <p>Loading...</p>}
    </>
  );
}
