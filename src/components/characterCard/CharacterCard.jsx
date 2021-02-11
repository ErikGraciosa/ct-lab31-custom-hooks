import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '../../hooks/toggleThemeContext';
import styles from './CharacterCard.css';

function CharacterCard({ name, image, id }) {
  const { theme } = useTheme();

  return (
    <a className={`${styles[theme]}`} href={`characters/${id}`}>
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
