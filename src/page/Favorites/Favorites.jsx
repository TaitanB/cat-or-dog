import React from 'react';

import { FaArrowUp } from 'react-icons/fa';
import { offBlur } from '../../helpers/offBlur';
import { handleScrollUp } from '../../helpers/handleScrollUp';
import { useAppContext } from '../../hooks/useAppContext';
import Pet from '../../components/Pet/Pet';

import {
  FavoritesList,
  FavoritesTitle,
  FavoritesUp,
  NoFavorites,
} from './Favorites.styled';

export default function Favorites() {
  const { petsFavorites } = useAppContext();

  return (
    <>
      <FavoritesTitle>Your favorite pets</FavoritesTitle>
      <FavoritesList>
        {petsFavorites.length === 0 ? (
          <NoFavorites>You haven't added any favorite pets yet</NoFavorites>
        ) : (
          petsFavorites.map(pet => (
            <li key={pet.id}>
              <Pet pet={pet} />
            </li>
          ))
        )}
      </FavoritesList>
      {petsFavorites.length > 1 && (
        <FavoritesUp
          onClick={event => {
            offBlur(event);
            handleScrollUp();
          }}
        >
          <FaArrowUp />
        </FavoritesUp>
      )}
    </>
  );
}
