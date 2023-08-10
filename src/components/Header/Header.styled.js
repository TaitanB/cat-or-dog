import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderSection = styled.header`
  width: 100%;

  padding: 0 20px;
`;

export const HeaderContent = styled.div`
  background-color: rgba(217, 217, 217, 0.2);
  width: 100%;
  height: 110px;
  position: absolute;
  left: 0;
  top: 0;
  padding: 20px 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  align-items: center;
`;

export const HeaderNav = styled.nav`
  display: flex;
  gap: 10px;
`;

export const HeaderNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  color: #f8eeee;
  font-size: 20px;
  text-shadow: -1px -1px 0px #212121, 3px 3px 0px #212121, 4px 4px 0px #00000055;
  border-radius: 10px;
  background-color: rgb(68 68 70);
  transition: all 0.4s ease-in-out;

  :hover,
  :focus {
    scale: 0.9;
    background-color: #2684ff;
  }
`;
