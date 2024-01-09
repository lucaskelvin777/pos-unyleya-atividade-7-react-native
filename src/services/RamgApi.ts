import axios from 'axios';
import { DetailGame, Games, Results } from '../interfaces/Games';


const SearchApi = async (term: string): Promise<Results> => {
    try {
        const resp = await axios.get(`https://api.rawg.io/api/games?key=d1a2ec8e0f7849ae90bd3bb94e12fe9c&dates=2000-01-01,2024-01-01&platforms=18,1,7&search=${term}`);
        return resp?.data;
    } catch (ex: any) {
        return [] as Results;
    }
}
const SearchById = async (id: number): Promise<DetailGame>  => {
    try {
        const resp = await axios.get(`https://api.rawg.io/api/games/${id}?key=d1a2ec8e0f7849ae90bd3bb94e12fe9c`);
        return resp?.data;
    } catch (ex: any) {
        return [] as DetailGame;
    }
}

export {
    SearchApi,
    SearchById
};