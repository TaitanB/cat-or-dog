import React from 'react';
import { FaRegEye, FaHeart } from 'react-icons/fa';
import toast from 'react-hot-toast';

import { useAppContext } from '../../hooks/useAppContext';

import {
  PetContainer,
  PetImg,
  CatInfoList,
  PetInfo,
  PetLink,
  PetName,
  IconLike,
  IconViewed,
  PetImgContainer,
  PetInfoContainer,
  PetText,
} from './Pet.styled';
import { offBlur } from 'helpers/offBlur';

export default function Pet({ petType, pet: { url, breeds } }) {
  const {
    bred_for,
    breed_group,
    height,
    child_friendly,
    description,
    dog_friendly,
    energy_level,
    grooming,
    health_issues,
    intelligence,
    life_span,
    name,
    origin,
    social_needs,
    stranger_friendly,
    vocalisation,
    temperament,
    weight,
    wikipedia_url,
    cfa_url,
    id,
  } = breeds[0];

  const {
    addViewed,
    removeViewed,
    addFavorites,
    removeFavorites,
    petsViewed,
    petsFavorites,
  } = useAppContext();

  const isFavorite = petsFavorites.find(favorite => favorite.id === id);
  const isViewed = petsViewed.find(viewe => viewe.id === id);

  const toggleFavorite = () => {
    const favoriteIndex = petsFavorites.findIndex(
      favorite => favorite.id === id
    );

    if (favoriteIndex === -1) {
      const newFavorite = { id, url, breeds };
      addFavorites(newFavorite);
      toast.success('Added to Favorites!');
    } else {
      removeFavorites(id);
      toast.success('Removed from Favorites!');
    }
  };

  const onViewed = event => {
    const ViewedIndex = petsViewed.findIndex(viewe => viewe.id === id);
    offBlur(event);
    if (ViewedIndex === -1) {
      const newViewed = { id, url, breeds };
      addViewed(newViewed);
      toast.success('Added to Viewed!');
    }
  };

  const offViewed = id => {
    removeViewed(id);
    toast.success('Removed from Viewed!');
  };

  return (
    <PetContainer>
      <PetImgContainer>
        {isViewed && (
          <IconViewed onClick={() => offViewed(id)}>
            <FaRegEye />
          </IconViewed>
        )}

        <IconLike
          onClick={toggleFavorite}
          className={`${isFavorite ? 'favorite' : ''}`}
        >
          <FaHeart />
        </IconLike>
        <PetImg src={url} sizes="320px" alt="pet" />
      </PetImgContainer>
      <div>
        <PetName>
          <span>Breed: </span> {name}
        </PetName>

        <PetInfoContainer>
          {bred_for && (
            <PetInfo>
              Breed for: <PetText>{bred_for}</PetText>
            </PetInfo>
          )}
          {breed_group && (
            <PetInfo>
              Breed group: <PetText>{breed_group}</PetText>
            </PetInfo>
          )}
          {life_span && (
            <PetInfo>
              Life span: <PetText>{life_span}</PetText>
            </PetInfo>
          )}
          {temperament && (
            <PetInfo>
              Temperament: <PetText> {temperament}</PetText>
            </PetInfo>
          )}
          {height?.imperial && height?.metric && (
            <PetInfo>
              Height: <PetText>{height.imperial} in.</PetText>,{' '}
              <PetText>{height.metric} cm</PetText>.
            </PetInfo>
          )}
          {weight?.imperial && weight?.metric && (
            <PetInfo>
              Weight: <PetText>{weight.imperial} pound</PetText>,{' '}
              <PetText>{weight.metric} kg</PetText>.
            </PetInfo>
          )}
          {origin && (
            <PetInfo>
              Origin: <PetText> {origin}</PetText>
            </PetInfo>
          )}
          {description && (
            <PetInfo>
              Description: <PetText> {description}</PetText>
            </PetInfo>
          )}
          <CatInfoList>
            {child_friendly && (
              <li>
                Child friendly: <b>{child_friendly}</b>
              </li>
            )}
            {dog_friendly && (
              <li>
                Dog friendly: <b>{dog_friendly}</b>
              </li>
            )}
            {stranger_friendly && (
              <li>
                Stranger friendly: <b>{stranger_friendly}</b>
              </li>
            )}
            {social_needs && (
              <li>
                Social needs: <b>{social_needs}</b>
              </li>
            )}
            {intelligence && (
              <li>
                Intelligence: <b>{intelligence}</b>
              </li>
            )}
            {energy_level && (
              <li>
                Energy level: <b>{energy_level}</b>
              </li>
            )}
            {grooming && (
              <li>
                Grooming: <b>{grooming}</b>
              </li>
            )}
            {health_issues && (
              <li>
                Health issues: <b>{health_issues}</b>
              </li>
            )}
            {vocalisation && (
              <li>
                Vocalisation: <b>{vocalisation}</b>
              </li>
            )}
          </CatInfoList>
        </PetInfoContainer>
        <PetLink
          href={
            petType === 'cat'
              ? wikipedia_url
                ? wikipedia_url
                : cfa_url
              : `https://en.wikipedia.org/wiki/${name.replace(
                  /\(([^)]+)\)/,
                  ''
                )}`
          }
          target="_blank"
          rel="noopener noreferrer"
          onClick={onViewed}
        >
          Read more...
        </PetLink>
      </div>
    </PetContainer>
  );
}
