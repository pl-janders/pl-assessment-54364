import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 40px;
`;

export const InputButton = styled.input`
  position: fixed;
  opacity: 0;
  pointer-events: none;

  &:checked+label {
    background-color: #00FF87;
    border: 1px solid #00FF87;
  }
`;

export const Label = styled.label`
  margin: 10px;
  padding: 10px;
  border: 1px solid #eee;
  border-radius: 10px;
`;

