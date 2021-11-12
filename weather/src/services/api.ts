import axios from 'axios'; 

//https://api.hgbrasil.com/weather?key=d8bf89e4&lat=-23.682&lon=-46.875

export const key = '10f49b24';

const api = axios.create({
    baseURL: 'https://api.hgbrasil.com/'
});

export default api;