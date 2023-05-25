import { API } from './AxiosClient'


export const postCommentProvince = async (data) => {

    const result = await API.post('/comment-province/create', data)

    return result.data
}
export const getAllCommentsProvince = async (id) => {
    const result = await API.get(`/comment-province/${id}`)
    return result.data
}