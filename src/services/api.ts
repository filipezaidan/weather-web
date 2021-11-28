//Libraries
import axios from 'axios'; 

//Key Api
export const key = '33d8f162';

export const api = axios.create({
    baseURL: `https://api.hgbrasil.com/`
});

