import { API } from './AxiosClient'


export const postCommentProvince = async (data) => {

    const result = await API.post('/comment-province/create', data)

    return result.data
}
export const getAllCommentsProvince = async (id) => {
    const result = await API.get(`/comment-province/${id}`)
    return result.data
}

export const postCommentLandmark = async (data) => {
    const result = await API.post('/comment-landmark/create', data)
    return result.data
}
export const getAllCommentsLandmark = async (id) => {
    const result = await API.get(`/comment-landmark/${id}`)
    return result.data
}

export const postCommentPost = async (data) => {
    const result = await API.post('/comment-post/create', data)
    return result.data
}
export const getAllCommentsPost = async (id) => {
    const result = await API.get(`/comment-post/${id}`)
    return result.data
}