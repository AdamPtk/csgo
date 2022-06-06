import axios from './axios';
import { PlayersData } from '../types/types';

const getPlayers = async (
  page: number,
  search: string,
): Promise<PlayersData> => {
  try {
    return await axios
      .get(`?page=${page}&size=10&searchBy=${search}`)
      .then((res) => res.data);
  } catch (err) {
    throw err;
  }
};

export default getPlayers;
