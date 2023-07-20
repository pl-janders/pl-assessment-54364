import styled from 'styled-components';

export const HeaderContainer = styled.div`
  grid-area: header;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderText = styled.h1(
  ({ theme }) => `
  font-family: 'PremierLeagueBold';
  padding-left: 10px;
  color: ${theme.colors.purple};
`);
