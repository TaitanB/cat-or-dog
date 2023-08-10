import React, { createContext, useContext, useState, useEffect } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppContextProvider = ({ children }) => {
  const [petsViewed, setPetsViewed] = useState([]);
  const [petsFavorites, setPetsFavorites] = useState([]);
  const [viewed, setViewed] = useLocalStorage('Viewed', []);
  const [favorites, setFavorites] = useLocalStorage('Favorites', []);

  useEffect(() => {
    if (viewed) {
      setPetsViewed(prevPets =>
        prevPets.filter(pet => viewed.includes(pet.id))
      );
    }
    setPetsViewed(viewed);

    if (favorites) {
      setPetsFavorites(prevPets =>
        prevPets.filter(pet => favorites.includes(pet.id))
      );
    }
    setPetsFavorites(favorites);
  }, [viewed, setPetsViewed, favorites, setPetsFavorites]);

  const addViewed = item => {
    setPetsViewed([...petsViewed, item]);
    setViewed(prevViewed => [...prevViewed, item]);
  };

  const removeViewed = itemId => {
    setPetsViewed(petsViewed.filter(item => item.id !== itemId));
    setViewed(prevViewed => prevViewed.filter(item => item.id !== itemId));
  };

  const addFavorites = item => {
    setPetsFavorites([...petsFavorites, item]);
    setFavorites(prevFavorites => [...prevFavorites, item]);
  };

  const removeFavorites = itemId => {
    setPetsFavorites(petsFavorites.filter(item => item.id !== itemId));
    setFavorites(prevFavorites =>
      prevFavorites.filter(item => item.id !== itemId)
    );
  };

  return (
    <AppContext.Provider
      value={{
        petsViewed,
        petsFavorites,
        addViewed,
        removeViewed,
        addFavorites,
        removeFavorites,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
