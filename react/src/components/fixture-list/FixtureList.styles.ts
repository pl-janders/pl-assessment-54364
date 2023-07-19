import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;

  list-style: none;
  margin: 0;
  padding: 0;

  li {width: 100%;}
`;

export const Button = styled.button`
  background-color: white;
  border: none;
  color: #000;
  cursor: pointer;
  width: 100%;
`;
