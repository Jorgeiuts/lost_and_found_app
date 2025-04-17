import axios from 'axios';
import { getEnvVariables } from '../helper';

const {VITE_API_URL} = getEnvVariables();

const lostAndFoundApi = axios.create({
    baseURL: VITE_API_URL
})

lostAndFoundApi.interceptors.request.use( config => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default lostAndFoundApi;