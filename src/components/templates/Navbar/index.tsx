import { NavbarButtonList, ResponsiveContainer } from 'components';

import NavbarBrand from 'components/molecules/NavbarBrand';

import * as S from './styles';

const Navbar = () => {
  return (
    <S.Container>
      <ResponsiveContainer>
        <S.Content>
          <NavbarBrand>NextDex</NavbarBrand>

          <NavbarButtonList />
        </S.Content>
      </ResponsiveContainer>
    </S.Container>
  );
};

export default Navbar;
