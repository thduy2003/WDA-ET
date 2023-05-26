import { addPost, getTimeline } from '../api/ForumAPI'

export const uploadPost = (data) => async (dispatch) => {
    dispatch({ type: 'UPLOAD_START' })
    try {
        const newPost = await addPost(data)
        console.log(newPost)
        dispatch({ type: "UPLOAD_SUCCESS", data: newPost.data })
    } catch (error) {
        console.log(error)
        dispatch({ type: "UPLOAD_FAIL" })
    }
}
export const getTimelinePosts = (id) => async (dispatch) => {
    dispatch({ type: 'RETREIVING_START' })
    try {
        const result = await getTimeline(id)
        console.log(result)
        dispatch({ type: 'RETREIVING_SUCCESS', data: result.data })
    } catch (error) {
        dispatch({ type: 'RETREIVING_FAIL' })
        console.log(error)
    }
}