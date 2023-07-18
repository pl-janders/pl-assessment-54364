import styled from 'styled-components';

export const GameContainer = styled.span`
  width: 100%;
  Display: flex;
  font-size: 18px;
  align-items: center;
  justify-content: center;
`;

export const Team = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 45%
`;

export const TeamLeft = styled(Team)`
  justify-content: flex-end;
`;

export const TeamRight = styled(Team)`
  justify-content: flex-start;
`;

export const Logo = styled.img`
  position: relative;
  width: 30px;
  height: 30px;
  min-width: 30px;
  min-height: 30px;
  margin-left: 5px;
  margin-right: 5px;
  overflow: hidden; 
  border-radius: 50%;  
`;
