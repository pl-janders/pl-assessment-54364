import styled from 'styled-components';

export const HeaderContainer = styled.div`
  grid-area: header;
  display: flex;
  align-items: center;
  justify-content: center;
  color: {props => props.theme.color.purple};
`;

export const HeaderText = styled.h1`
  color: #3B175C;
`;