import React from 'react';
import { FaCat, FaDog } from 'react-icons/fa';

import { Button, ButtonContainer, ButtonText, Text } from './Buttons.styled';

export default function Buttons({ selectCat, selectDog, petType }) {
  return (
    <ButtonContainer>
      <Button type="button" onClick={selectCat}>
        <FaCat
          style={{
            width: '32',
            height: '32',
            fill: petType === 'cat' ? 'rgb(255, 215, 0)' : 'rgb(248, 238, 238)',
          }}
        />
        <ButtonText>cat ?</ButtonText>
      </Button>
      <Text>or</Text>
      <Button type="button" onClick={selectDog}>
        <FaDog
          style={{
            width: '36',
            height: '36',
            transform: 'scale(-1, 1)',
            fill: petType === 'dog' ? 'rgb(255, 215, 0)' : 'rgb(248, 238, 238)',
          }}
        />
        <ButtonText>dog ?</ButtonText>
      </Button>
    </ButtonContainer>
  );
}
