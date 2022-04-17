import NavbarIcon from 'components/atoms/NavbarIcon';

import * as S from './styles';

interface INavbarBrand {
  children: string;
}

const NavbarBrand = ({ children }: INavbarBrand) => {
  return (
    <S.Brand>
      <NavbarIcon icon="pokeball" />
      {children}
    </S.Brand>
  );
};

export default NavbarBrand;
