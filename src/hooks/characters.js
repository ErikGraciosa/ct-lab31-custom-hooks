import { useState, useEffect } from 'react';
import { getAllCharacters } from '../services/rickAndMortyApi';

export const useCharacters = () => {
  const [loading, setLoading] = useState(true); //initialize loading to true
  const [quotes, setQuotes] = useState([]); //initialize quotes to empty string

  useEffect(() => {
    getAllCharacters()
      .then((quotes) => {
        setQuotes(quotes.results);
        setLoading(false);
      });
  }, []);

  return {
    loading,
    quotes
  };
};
