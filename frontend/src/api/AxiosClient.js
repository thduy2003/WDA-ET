import axios from 'axios';
export const API = axios.create({ baseURL: 'http://127.0.0.1:6789' })
API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }

    return req;
});