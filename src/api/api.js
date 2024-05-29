import axios from "axios";

export const fetchCharacters = async (page, name, status) => {
  try {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character?page=${page}&name=${name}&status=${status}`,
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
