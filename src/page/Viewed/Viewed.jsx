import React from 'react';
import { FaArrowUp } from 'react-icons/fa';

import Pet from '../../components/Pet/Pet';
import { useAppContext } from '../../hooks/useAppContext';
import { offBlur } from '../../helpers/offBlur';
import { handleScrollUp } from '../../helpers/handleScrollUp';

import { ViewedList, ViewedTitle, ViewedUp, NoViewed } from './Viewed.styled';

export default function Viewed() {
  const { petsViewed } = useAppContext();

  return (
    <>
      <ViewedTitle>Your viewed pets</ViewedTitle>
      <ViewedList>
        {petsViewed.length === 0 ? (
          <NoViewed>
            You have not yet viewed information about any pets
          </NoViewed>
        ) : (
          petsViewed.map(pet => (
            <li key={pet.id}>
              <Pet pet={pet} />
            </li>
          ))
        )}
      </ViewedList>
      {petsViewed.length > 1 && (
        <ViewedUp
          onClick={event => {
            offBlur(event);
            handleScrollUp();
          }}
        >
          <FaArrowUp />
        </ViewedUp>
      )}
    </>
  );
}
