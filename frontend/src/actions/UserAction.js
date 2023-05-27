import { postFollowUser, postLikeLandmark, postUnFollowUser, postUnLikeLandmark, updateUserApi } from '../api/userAPI'

export const followUser = (id, data) => async (dispatch) => {

    dispatch({ type: "FOLLOW_USER", data: id })

    postFollowUser(id, data)

}
export const unFollowUser = (id, data) => async (dispatch) => {

    dispatch({ type: "UNFOLLOW_USER", data: id })
    postUnFollowUser(id, data)

}
export const likeLandmark = (id, data) => async (dispatch) => {

    dispatch({ type: "LIKE_LANDMARK", data: id })

    postLikeLandmark(id, data)

}
export const unLikeLandmark = (id, data) => async (dispatch) => {

    dispatch({ type: "UNLIKE_LANDMARK", data: id })
    postUnLikeLandmark(id, data)

}
export const updateUser = (id, formData) => async (dispatch) => {
    dispatch({ type: "UPDATING_START" })
    try {
        const { data } = await updateUserApi(id, formData)
        dispatch({ type: "UPDATING_SUCCESS", data: data })
    } catch (error) {
        dispatch({ type: "UPDATING_FAIL" })
        console.log(error)
    }
}