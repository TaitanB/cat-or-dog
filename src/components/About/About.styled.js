import styled from 'styled-components';

import tracks from '../../image/png/tracksLeft.png';

export const About = styled.div`
  width: 990px;
  height: 50vh;
  padding: 30px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 20px;
  text-align: center;

  background-image: url(${tracks});
  background-repeat: no-repeat;
  background-position: left;
  background-size: contain;
`;

export const AboutTitle = styled.h2`
  font-size: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding-bottom: 20px;
  margin-top: 20px;
`;

export const AboutText = styled.p`
  font-size: 26px;
  line-height: 1.8;
  width: 600px;
  margin: 0 auto;
`;
