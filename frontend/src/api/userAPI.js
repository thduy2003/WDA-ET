import { API } from './AxiosClient'
API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }

    return req;
});
export const postFollowUser = async (id, data) => {
    API.put(`/profile/follow/${id}`, data)
}
export const postUnFollowUser = async (id, data) => {
    API.put(`/profile/unfollow/${id}`, data)
}
export const getAllUsers = async () => {
    const result = await API.get('/profile/getAll')
    return result.data
}
export const getUser = async (id) => {
    const result = await API.get(`/profile/${id}`)
    return result.data
}
export const updateUserApi = (id, formData) => API.put(`/profile/${id}`, formData)

export const postLikeLandmark = async (id, data) => {
    API.put(`/profile/favourite/${id}`, data)
}
export const postUnLikeLandmark = async (id, data) => {
    API.put(`/profile/favourite/${id}`, data)
}