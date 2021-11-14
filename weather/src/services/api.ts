//Libraries
import axios from 'axios'; 

//Key Api
export const key = '10f49b24';

export const api = axios.create({
    baseURL: 'https://api.hgbrasil.com'
});
