import { NavbarButton } from 'components';

import * as S from './styles';

const NavbarButtonList = () => {
  return (
    <S.Container>
      <li>
        <NavbarButton label="Filter" icon="filter" />
      </li>

      <li>
        <NavbarButton label="Generation" icon="generation" />
      </li>

      <li>
        <NavbarButton label="Sort" icon="sort" />
      </li>
    </S.Container>
  );
};

export default NavbarButtonList;
