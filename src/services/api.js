import axios from 'axios';

const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/posts', // API de ejemplo
});

export default api;
