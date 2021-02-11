import React from 'react';
import PropTypes from 'prop-types';
import styles from './Paging.css';
import { useTheme } from '../../hooks/toggleThemeContext';

const Paging = ({ increment, decrement, count }) => {
  const { theme } = useTheme(); //this needs to be what toggles
  console.log(theme);
  return (
    <div>
      <button onClick={decrement}>-1</button>
      <span>--{count}--</span>
      <button onClick={increment}>+1</button>
      <div className={`${styles.Paging} ${styles[theme]}`}>Theme Color</div>
    </div>
  );
};

Paging.propTypes = {
  increment: PropTypes.func,
  decrement: PropTypes.func,
  count: PropTypes.number.isRequired
};

export default Paging;
