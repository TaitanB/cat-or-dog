import styled from 'styled-components';

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  padding: 20px 0;
  z-index: 0;
`;

export const Button = styled.button`
  font-family: inherit;
  background-color: #2684ff;
  box-shadow: 0 10px 0 rgb(15 57 112);
  width: 100px;
  height: 100px;
  border-radius: 50%;
  cursor: pointer;
  border: none;
  transition: all 0.4s ease-in-out;

  > svg {
    fill: #f8eeee;
    transition: all 0.4s ease-in-out;
  }

  :hover,
  :focus {
    scale: 0.95;
    > svg {
      scale: 1.2;
    }
  }
`;

export const ButtonText = styled.p`
  color: #f8eeee;
  font-size: 28px;
  font-weight: 700;
  text-shadow: -1px -1px 0px #212121, 3px 3px 0px #212121, 4px 4px 0px #00000055;
`;

export const Text = styled.span`
  color: #f8eeee;
  font-size: 72px;
  font-weight: 700;
  text-transform: uppercase;
  text-shadow: -1px -1px 0px #212121, 3px 3px 0px #212121, 4px 4px 0px #00000055;
`;
