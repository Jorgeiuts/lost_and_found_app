import axios from 'axios';
import { getEnvVariables } from '../helper';

const {VITE_API_URL} = getEnvVariables();

const lostAndFoundApi = axios.create({
    baseURL: VITE_API_URL
})

export default lostAndFoundApi;