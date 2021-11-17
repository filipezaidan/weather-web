//Libraries
import axios from 'axios'; 

//Key Api
export const key = 'de0c0794';

export const api = axios.create({
    baseURL: 'https://api.hgbrasil.com'
});
