import React from 'react';
import { useCharacters, useCounter } from '../../hooks/characters';
import CharacterCard from '../../components/characterCard/CharacterCard';
import Paging from '../../components/paging/Paging';
import styles from './AllCharacters.css';
import { useTheme } from '../../hooks/toggleThemeContext';


function AllCharacters() {
  const { count, decrement, increment } = useCounter();
  const { loading, quotes } = useCharacters(count);
  const { theme } = useTheme();

  if(loading) return <h1> Still loading the universe</h1>;
  return (
    <>
      <div className={`${styles[theme]}`}>
        <Paging 
          count={count}
          increment={increment}
          decrement={decrement}
        />
        <div className={`${styles[theme]} ${styles.AllCharacters}`}>
          {quotes.map(quote => 
            <CharacterCard
              key={quote.id} 
              name={quote.name}
              image={quote.image}
              id={quote.id} />
          )}
        </div>
      </div>
    </>
  );
}

export default AllCharacters;
