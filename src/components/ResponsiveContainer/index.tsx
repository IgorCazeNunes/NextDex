import * as S from './styles';

export interface IResponsiveContainer {
  children: JSX.Element | JSX.Element[];
}

const ResponsiveContainer = ({ children }: IResponsiveContainer) => {
  return (
    <S.ResponsiveContainer data-testid="ResponsiveContainer">
      {children}
    </S.ResponsiveContainer>
  );
};

export default ResponsiveContainer;
