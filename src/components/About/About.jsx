import React, { useEffect, useCallback } from 'react';
import { FaCat, FaDog } from 'react-icons/fa';

import { About, AboutTitle, AboutText } from './About.styled';

export default function AboutUs({ onCloseModal }) {
  const handleClose = useCallback(
    event => {
      if (event.code === 'Escape' || event.target.className === 'Overlay') {
        onCloseModal(event);
        document.body.style.overflow = 'auto';
      }
    },
    [onCloseModal]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleClose);

    return () => {
      window.removeEventListener('keydown', handleClose);
    };
  }, [handleClose]);

  return (
    <div className="Overlay" onClick={handleClose}>
      <About>
        <AboutTitle>
          <FaCat style={{ width: '32', height: '32' }} /> About Us
          <FaDog
            style={{
              width: '36',
              height: '36',
              transform: 'scale(-1, 1)',
            }}
          />
        </AboutTitle>
        <AboutText>
          Our page combines a lot of knowledge about different animals.
          Fortunately, people who love pets have contributed their knowledge to
          the Internet and we are able to create this resource. We take all
          information from free sources and hope that it will be interesting and
          useful!
        </AboutText>
      </About>
    </div>
  );
}
