import React from 'react';
import PropTypes from 'prop-types';

function CharacterCard({ name, image, id }) {
  return (
    <a href={`characters/${id}`}>
      <p>{name}</p>
      <img src={image} />
    </a>
  );
}

CharacterCard.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  id: PropTypes.number
};

export default CharacterCard;
