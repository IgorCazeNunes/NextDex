import BugSvg from 'assets/vectors/types/bug.svg';
import DarkSvg from 'assets/vectors/types/dark.svg';
import DragonSvg from 'assets/vectors/types/dragon.svg';
import ElectricSvg from 'assets/vectors/types/electric.svg';
import FairySvg from 'assets/vectors/types/fairy.svg';
import FightingSvg from 'assets/vectors/types/fighting.svg';
import FireSvg from 'assets/vectors/types/fire.svg';
import FlyingSvg from 'assets/vectors/types/flying.svg';
import GhostSvg from 'assets/vectors/types/ghost.svg';
import GrassSvg from 'assets/vectors/types/grass.svg';
import GroundSvg from 'assets/vectors/types/ground.svg';
import IceSvg from 'assets/vectors/types/ice.svg';
import NormalSvg from 'assets/vectors/types/normal.svg';
import PoisonSvg from 'assets/vectors/types/poison.svg';
import PsychicSvg from 'assets/vectors/types/psychic.svg';
import RockSvg from 'assets/vectors/types/rock.svg';
import SteelSvg from 'assets/vectors/types/steel.svg';
import WaterSvg from 'assets/vectors/types/water.svg';

import { TPokemonType } from 'components/TypeBadge';

const svgProps = {
  role: 'img',
  'aria-label': `Type Icon`,
};

interface IIconProps {
  type: TPokemonType;
}

const TypeIcon = ({ type }: IIconProps) => {
  const Svg = {
    bug: <BugSvg data-testid="TypeIcon-bug" {...svgProps} />,
    dark: <DarkSvg {...svgProps} />,
    dragon: <DragonSvg {...svgProps} />,
    electric: <ElectricSvg {...svgProps} />,
    fairy: <FairySvg {...svgProps} />,
    fighting: <FightingSvg {...svgProps} />,
    fire: <FireSvg {...svgProps} />,
    flying: <FlyingSvg {...svgProps} />,
    ghost: <GhostSvg {...svgProps} />,
    grass: <GrassSvg {...svgProps} />,
    ground: <GroundSvg {...svgProps} />,
    ice: <IceSvg {...svgProps} />,
    normal: <NormalSvg data-testid="TypeIcon-normal" {...svgProps} />,
    poison: <PoisonSvg {...svgProps} />,
    psychic: <PsychicSvg {...svgProps} />,
    rock: <RockSvg {...svgProps} />,
    steel: <SteelSvg {...svgProps} />,
    water: <WaterSvg {...svgProps} />,
  };

  return Svg[type] || Svg['normal'];
};

export default TypeIcon;
