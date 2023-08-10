import React from 'react';
import { Link } from 'react-router-dom';

import { NotFoundStyle, NotFoundText } from './NotFound.styled';

export default function NotFound() {
  return (
    <NotFoundStyle>
      <NotFoundText>
        Page is not found. Go to <Link to="/">Home!</Link>
      </NotFoundText>
    </NotFoundStyle>
  );
}
