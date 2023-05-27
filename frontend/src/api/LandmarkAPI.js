import { API } from './AxiosClient'


export const postLandmark = async (data) => {

    const result = await API.post('/landmark/create', data)

    return result.data
}
export const getLandmark = async () => {
    const result = await API.get('/landmark')
    return result.data
}
export const searchLandmark = async (data) => {
    const result = await API.post('/landmark/search', data)
    return result.data
}
export const getLandmarkById = async (id) => {
    const result = await API.get(`/landmark/${id}`)
    return result.data
}
export const getAllLandMarksByType = async (data) => {
    const result = await API.get('landmark/getAll', { params: data })
    return result.data
}
export const getAllLikedLandMarks = async (data) => {
    const result = await API.post('landmark/favourite', data)
    return result.data
}