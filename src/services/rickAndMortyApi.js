export const getAllCharacters = async() => {
  return await fetch('https://rickandmortyapi.com/api/character')
    .then(res => res.json());
};

export const getDetails = async(id) => {
  return await fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then(res => res.json());
};
