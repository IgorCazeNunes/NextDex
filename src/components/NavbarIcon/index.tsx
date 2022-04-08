import FilterSvg from 'assets/vectors/icons/filter.svg';
import SortSvg from 'assets/vectors/icons/sort.svg';
import GenerationSvg from 'assets/vectors/icons/generation.svg';

type TNavbarIcon = 'filter' | 'sort' | 'generation';

interface INavbarIconProps {
  icon: TNavbarIcon;
}

const NavbarIcon = ({ icon }: INavbarIconProps) => {
  const Svg = {
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

  return Svg[icon];
};

export default NavbarIcon;
