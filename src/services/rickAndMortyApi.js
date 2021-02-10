export const getAllCharacters = async(count) => {
  return await fetch(`https://rickandmortyapi.com/api/character/?page=${count}`)
    .then(res => res.json());
};

export const getDetails = async(id) => {
  return await fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then(res => res.json());
};
