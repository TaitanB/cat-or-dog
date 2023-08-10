import React from 'react';
import { Toaster } from 'react-hot-toast';

import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import BgContainer from '../BgContainer/BgContainer';
import { Loader } from '../../components/Loader';
import { LoaderContainer } from '../../components/App.styled';
import { Container } from '../SharedLayout/SharedLayout.styled';

export default function SharedLayout() {
  return (
    <Container>
      <BgContainer />
      <Header />
      <Suspense
        fallback={
          <LoaderContainer>
            <Loader />
          </LoaderContainer>
        }
      >
        <Outlet />
      </Suspense>
      <Footer />
      <Toaster position="top-center" />
    </Container>
  );
}
