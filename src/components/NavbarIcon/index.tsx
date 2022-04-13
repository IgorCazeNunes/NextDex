import PokeballSvg from 'assets/vectors/icons/pokeball.svg';
import FilterSvg from 'assets/vectors/icons/filter.svg';
import SortSvg from 'assets/vectors/icons/sort.svg';
import GenerationSvg from 'assets/vectors/icons/generation.svg';

export type TNavbarIcon = 'pokeball' | 'filter' | 'sort' | 'generation';

interface INavbarIconProps {
  icon: TNavbarIcon;
}

const Svg = {
  pokeball: <PokeballSvg role="img" aria-label="Pokeball Icon" />,
  filter: (
    <FilterSvg
      data-testid="NavbarIcon-filter"
      role="img"
      aria-label="Filter Icon"
    />
  ),
  sort: <SortSvg role="img" aria-label="Sort Icon" />,
  generation: <GenerationSvg role="img" aria-label="Generation Icon" />,
};

const NavbarIcon = ({ icon }: INavbarIconProps) => {
  return Svg[icon];
};

export default NavbarIcon;
