import styled from 'styled-components';

export const Container = styled.div`
  border-right: 2px solid #000;
  display: flex;
  flex-direction: column;
  color: {props => props.theme.color.purple};
  padding: 20px;
  text-align: center;
`;

export const HeaderText = styled.h1`
  color: #3B175C;
  font-size: 24px;
`;