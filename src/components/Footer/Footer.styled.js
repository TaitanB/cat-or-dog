import styled from 'styled-components';

export const FooterSection = styled.footer`
  padding: 0 20px;
`;

export const FooterContent = styled.div`
  background-color: rgba(217, 217, 217, 0.2);
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  padding: 20px 0;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  justify-items: center;
  align-items: center;
`;

export const FooterBtn = styled.button`
  font-family: inherit;
  padding: 10px;
  border-radius: 10px;
  background-color: rgb(68 68 70);
  cursor: pointer;
  border: none;
  color: #f8eeee;
  font-size: 18px;
  font-weight: 700;
  text-shadow: -1px -1px 0px #212121, 3px 3px 0px #212121, 4px 4px 0px #00000055;
  transition: all 0.4s ease-in-out;

  :hover,
  :focus {
    scale: 0.95;
    background-color: #2684ff;
  }
`;

export const FooterLink = styled.a`
  display: flex;
  gap: 10px;
  padding: 10px;
  font-size: 20px;
  text-align: center;
  color: #f8eeee;
  font-weight: 800;
  align-items: center;
  text-shadow: -1px -1px 0px #212121, 3px 3px 0px #212121, 4px 4px 0px #00000055;
  border-radius: 10px;
  transition: all 0.4s ease-in-out;

  > div {
    transition: all 0.4s ease-in-out;
  }

  :hover,
  :focus {
    scale: 1.2;
    color: #2684ff;

    > div {
      color: #2684ff;
    }
  }
`;

export const FooterLogo = styled.p`
  text-align: center;
  padding: 5px;
  font-size: 36px;
  font-weight: 800;
  color: #f8eeee;
  text-shadow: -1px -1px 0px #212121, 3px 3px 0px #212121, 4px 4px 0px #00000055;
  margin-bottom: 15px;
  transition: all 0.4s ease-in-out;

  :hover,
  :focus {
    scale: 1.2;
    color: #2684ff;
  }
`;

export const FooterIcon = styled.div`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.75);
  padding: 5px;
  color: #1d2725;
`;
