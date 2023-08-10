import React, { useState, useEffect } from 'react';
import Select from 'react-select';

export default function BreedSelect({ breeds, onSelect }) {
  const [selectedOption, setSelectedOption] = useState(null);

  let options = [];

  if (breeds) {
    options = breeds.map(breed => ({
      value: breed.id,
      label: breed.name,
    }));
  }

  useEffect(() => {
    setSelectedOption(null);
  }, [breeds]);

  const handleChange = option => {
    setSelectedOption(option);
    onSelect(option.value);
  };

  return (
    <Select
      styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          backgroundColor: state.isFocused
            ? '#6ba9fae2'
            : ' rgba(255, 255, 255, 0.75)',
          borderRadius: '20px',
          width: '1050px',
          padding: ' 0 30px',
          marginBottom: '30px',
        }),
        menu: baseStyles => ({
          ...baseStyles,
          backgroundColor: '#6ba9fae2',
          fontWeight: '700',
          fontSize: '20px',
          borderRadius: '20px',
          padding: '10px 30px',
          margin: '0',
        }),
      }}
      classNamePrefix="react-select"
      value={selectedOption}
      placeholder={'Select the breed of pet'}
      options={options}
      onChange={handleChange}
    />
  );
}
