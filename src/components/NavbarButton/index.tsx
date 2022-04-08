import { NavbarIcon } from 'components';
import { TNavbarIcon } from 'components/NavbarIcon';

import * as S from './styles';

interface INavbarButtonProps {
  icon?: TNavbarIcon;
  label: string;
}

const NavbarButton = ({ icon, label }: INavbarButtonProps) => {
  return (
    <S.Button>
      <S.Label data-testid="NavbarButton-label">{label}</S.Label>

      {icon ? <NavbarIcon icon={icon} /> : null}
    </S.Button>
  );
};

export default NavbarButton;
