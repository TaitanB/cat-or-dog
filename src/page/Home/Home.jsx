import React, { useState } from 'react';

import { fetchBreeds, fetchPetByBreed } from '../../Servises/Api';

import Buttons from '../../components/Buttons/Buttons';
import BreedSelect from '../../components/BreedSelect/BreedSelect';
import Pet from '../../components/Pet/Pet';
import { Loader } from '../../components/Loader';
import { offBlur } from '../../helpers/offBlur';

import { Title } from './Home.styled';
import { LoaderContainer, ErrorMessage } from '../../components/App.styled';

import {
  CAT_BASE_URL,
  DOG_BASE_URL,
  CAT_API_KEY,
  DOG_API_KEY,
} from '../../constants/constants';

export default function Home() {
  const [breeds, setBreeds] = useState([]);
  const [pet, setPet] = useState(null);
  const [error, setError] = useState(null);
  const [petType, setPetType] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const selectPetType = async (event, type) => {
    offBlur(event);

    try {
      if (pet !== null) {
        setPet(null);
      }

      if (petType !== type) {
        setIsLoading(true);
        setPetType(type);
        const breedsList = await fetchBreeds(
          type === 'cat' ? CAT_BASE_URL : DOG_BASE_URL,
          type === 'cat' ? CAT_API_KEY : DOG_API_KEY
        );
        setBreeds(breedsList);
        setIsLoading(false);
      }
    } catch (error) {
      setError(
        'Could not load animal breeds, please reload the page and try again.'
      );
    }
  };

  const selectBreed = async breedId => {
    try {
      if (petType === 'dog') {
        setIsLoading(true);
        const Pet = await fetchPetByBreed(DOG_BASE_URL, DOG_API_KEY, breedId);
        Pet && setPet(Pet);
        setIsLoading(false);
      }

      if (petType === 'cat') {
        setIsLoading(true);
        const Pet = await fetchPetByBreed(CAT_BASE_URL, CAT_API_KEY, breedId);
        Pet && setPet(Pet);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
      setError(
        "Oops, we couldn't load the pet 😭. Please try again or reload the page 😇."
      );
    }
  };

  return (
    <>
      <Buttons
        selectCat={event => selectPetType(event, 'cat')}
        selectDog={event => selectPetType(event, 'dog')}
        petType={petType}
      />
      <Title>Choose yor pet!</Title>
      {petType !== '' && <BreedSelect breeds={breeds} onSelect={selectBreed} />}
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {pet && <Pet pet={pet} petType={petType} />}
      <LoaderContainer>{isLoading === true && <Loader />}</LoaderContainer>
    </>
  );
}
