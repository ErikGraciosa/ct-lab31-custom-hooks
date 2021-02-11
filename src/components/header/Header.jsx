import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../hooks/toggleThemeContext';
import styles from './Header.css';

const Header = () => {
  const { theme, setTheme } = useTheme();

  const onClick = () => {
    if(theme === 'dark') {
      setTheme('light');
    }
    if(theme === 'light') {
      setTheme('dark');
    }
  };

  return (
    <div  className={`${styles[theme]}`}>
      <p>Welcome to Dimension C-132</p>
      <Link className="nav-link-button" to="/">| Home |</Link>
      <button onClick={onClick}>Toggle Dark Mode</button>
      <p>-----------------------------------------------------</p>
    </div>
  );
};

export default Header;
