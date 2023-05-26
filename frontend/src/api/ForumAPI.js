import { API } from './AxiosClient'


export const addPost = async (data) => {

    const result = await API.post('/post/add', data)

    return result.data
}
export const getTimeline = async (id) => {
    const result = await API.get(`post/${id}/timeline`)
    return result.data
}