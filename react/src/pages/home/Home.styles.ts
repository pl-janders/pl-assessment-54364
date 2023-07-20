import styled from 'styled-components';

export const GridContainer  = styled.div`
  margin: 60px auto;
  padding-bottom: 60px;
`;

export const Grid  = styled.div(
  ({ theme }) => `
    max-width: 1000px;
    width: 100%;

    border: 2px solid ${theme.colors.purple};
    border-radius: 10px;
    margin-left: auto;
    margin-right: auto;
    
    display: grid;

    grid-template-columns: minmax(300px, 400px) minmax(auto, auto);
    gap: 10px;
  `
);