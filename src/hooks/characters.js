import { useState, useEffect } from 'react';
import { getAllCharacters, getDetails } from '../services/rickAndMortyApi';

export const useCharacters = (count) => {
  const [loading, setLoading] = useState(true); //initialize loading to true
  const [quotes, setQuotes] = useState([]); //initialize quotes to empty string

  useEffect(() => {
    getAllCharacters(count)
      .then((quotes) => {
        setQuotes(quotes.results);
        setLoading(false);
      });
  }, [count]);

  return {
    loading,
    quotes
  };
};

export const useDetails = (id) => {
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    getDetails(id)
      .then((info) => {
        setInfo(info);
        setLoading(false);
      });
  }, []);

  return {
    loading,
    info
  };

};
