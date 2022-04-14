import { ResponsiveContainer } from 'components/ResponsiveContainer/styles';

import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  ${ResponsiveContainer} {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
