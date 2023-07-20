import styled from 'styled-components';

export const Container = styled.div(
({ theme }) => `
  border-right: 2px solid ${theme.colors.purple};
  display: flex;
  flex-direction: column;
  padding: 20px;
  text-align: center;
`);

export const HeaderText = styled.h2(
  ({ theme }) => `
  font-family: 'PremierLeagueBold';
  color: ${theme.colors.purple};
  font-size: 24px;
`);