import React from 'react';
import CharacterCard from '../../components/characterCard/CharacterCard';
import styles from './AllCharacters.css';
import { useCharacters } from '../../hooks/characters';

function AllCharacters() {
  const { loading, quotes } = useCharacters();

  if(loading) return <h1> Still loading the universe</h1>;
  return (
    <>
      <div className={styles.AllCharacters}>
        {quotes.map(quote => 
          <CharacterCard
            key={quote.id} 
            name={quote.name}
            image={quote.image}
            id={quote.id} />
        )}
      </div>
    </>
  );
}

export default AllCharacters;
