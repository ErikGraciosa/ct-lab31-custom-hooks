import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '../../hooks/toggleThemeContext';
import styles from './DetailsCard.css';


function DetailsCard({ name, image, species, status }) {
  const { theme } = useTheme();

  return (
    <div className={`${styles[theme]}`}>
      <p>{name}</p>
      <img src={image} />
      <p>Species: {species}</p>
      <p>Status: {status}</p>
    </div>
  );
}

DetailsCard.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  species: PropTypes.string,
  status: PropTypes.string
};

export default DetailsCard;
