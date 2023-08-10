import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCat, FaDog } from 'react-icons/fa';

import { offBlur } from '../../helpers/offBlur';
import AboutUs from '../About/About';
import FeedbackForm from '../Form/Form';

import {
  FooterSection,
  FooterContent,
  FooterBtn,
  FooterLink,
  FooterLogo,
  FooterIcon,
} from './Footer.styled';

export default function Footer() {
  const [activeModal, setActiveModal] = useState(null);

  const toggleModal = event => {
    offBlur(event);
    setActiveModal(activeModal === null ? event.target.name : null);
    document.body.style.overflow = activeModal === null ? 'hidden' : 'auto';
  };

  return (
    <FooterSection>
      <FooterContent>
        <FooterLink
          href="https://cfa.org/"
          target="_blank"
          rel="noopener noreferrer"
          onClick={offBlur}
        >
          <FooterIcon>
            <FaCat style={{ width: '24', height: '24' }} />
          </FooterIcon>
          The CFA
        </FooterLink>
        <FooterBtn type="button" name="feedback" onClick={toggleModal}>
          Give feedback
        </FooterBtn>
        {activeModal === 'feedback' && (
          <FeedbackForm onCloseForm={toggleModal} />
        )}
        <Link to="/">
          <FooterLogo>catORdog</FooterLogo>
        </Link>
        <FooterBtn type="button" name="about" onClick={toggleModal}>
          About Us
        </FooterBtn>
        {activeModal === 'about' && <AboutUs onCloseModal={toggleModal} />}
        <FooterLink
          href="https://dogtime.com/"
          target="_blank"
          rel="noopener noreferrer"
          onClick={offBlur}
        >
          The dogtime
          <FooterIcon>
            <FaDog
              style={{
                width: '28',
                height: '28',
                transform: 'scale(-1, 1)',
              }}
            />
          </FooterIcon>
        </FooterLink>
      </FooterContent>
    </FooterSection>
  );
}
