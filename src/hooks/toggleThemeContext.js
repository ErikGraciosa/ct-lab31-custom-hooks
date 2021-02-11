import React, { createContext, useState, useContext } from 'react'; 
import PropTypes from 'prop-types';

const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.any
};

export const useTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return { 
    theme,
    setTheme
  };
};
