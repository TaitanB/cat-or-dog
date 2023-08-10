import React, { useState, useEffect } from 'react';

import { onFetchBgImg } from '../../Servises/Api';

import { BgContainerStyled } from './BgContainerStyled.styled';

export default function BgContainer() {
  const [randomBgImage, setRandomBgImage] = useState(null);

  useEffect(() => {
    const fetchBg = async () => {
      try {
        const hits = await onFetchBgImg();
        const randomIndex = Math.floor(Math.random() * hits.length);
        const randomImage = hits[randomIndex];
        const randomImageUrl = randomImage.largeImageURL;

        setRandomBgImage(randomImageUrl);
      } catch (error) {
        setRandomBgImage({
          error: 'Sorry, something went wrong...',
        });
      }
    };

    fetchBg();
  }, []);

  return (
    <BgContainerStyled
      style={{
        backgroundImage: `url(${randomBgImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    ></BgContainerStyled>
  );
}
