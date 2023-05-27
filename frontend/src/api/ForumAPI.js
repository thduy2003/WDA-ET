import { API } from './AxiosClient'
API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }

    return req;
});

export const addPost = async (data) => {

    const result = await API.post('/post/add', data)

    return result.data
}
export const getTimeline = async (id) => {
    const result = await API.get(`post/${id}/timeline`)
    return result.data
}
export const likePost = (id, userId) => API.put(`post/like/${id}`, { userId: userId })