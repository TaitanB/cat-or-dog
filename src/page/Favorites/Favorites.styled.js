import styled from 'styled-components';
import tracks from '../../image/png/tracksLeft.png';

export const FavoritesList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-bottom: 150px;
`;

export const FavoritesTitle = styled.h1`
  font-size: 48px;
  font-weight: 800;
  color: #f8eeee;
  padding-top: 150px;
  margin-bottom: 30px;
  text-shadow: -1px -1px 0px #212121, 3px 3px 0px #212121, 4px 4px 0px #00000055;
`;

export const FavoritesUp = styled.a`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.75);
  position: fixed;
  bottom: 150px;
  right: 50px;
  align-items: center;
  display: flex;
  justify-content: center;
  color: #2684ff;
  transition: all 0.4s ease-in-out;

  :hover,
  :focus {
    scale: 1.2;
    color: #fff;
    background-color: #2684ff;
  }
`;

export const NoFavorites = styled.div`
  display: flex;
  gap: 30px;
  padding: 80px;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.85);
  border-radius: 20px;
  font-size: 28px;
  color: #212121;
  text-shadow: -1px -1px 0 #2684ff, 1px -1px 0 #2684ff, -1px 1px 0 #2684ff,
    1px 1px 0 #2684ff;

  background-image: url(${tracks});
  background-repeat: no-repeat;
  background-position: left;
  background-size: contain;
`;
