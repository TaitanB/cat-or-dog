import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const SharedLayout = lazy(() =>
  import('../components/SharedLayout/SharedLayout')
);
const Home = lazy(() => import('../page/Home/Home'));
const Favorites = lazy(() => import('../page/Favorites/Favorites'));
const Viewed = lazy(() => import('../page/Viewed/Viewed'));
const NotFound = lazy(() => import('../page/NotFound/NotFound'));

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />}></Route>
        <Route path="/favorites" element={<Favorites />}></Route>
        <Route path="/viewed" element={<Viewed />}></Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
