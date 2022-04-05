import * as S from './styles';

export interface IResponsiveContainer {
  children: JSX.Element;
}

const ResponsiveContainer = ({ children }: IResponsiveContainer) => {
  return (
    <S.Container data-testid="ResponsiveContainer">{children}</S.Container>
  );
};

export default ResponsiveContainer;
