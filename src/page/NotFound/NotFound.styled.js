import styled from 'styled-components';

import tracks from '../../image/png/tracksLeft.png';

export const NotFoundStyle = styled.div`
  width: 990px;
  height: 50vh;
  padding: 30px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 20px;

  background-image: url(${tracks});
  background-repeat: no-repeat;
  background-position: left;
  background-size: contain;
`;

export const NotFoundText = styled.p`
  font-size: 36px;
  font-weight: 800;
  text-align: center;
`;
