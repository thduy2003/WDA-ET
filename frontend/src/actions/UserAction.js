import { postFollowUser, postUnFollowUser } from '../api/userAPI'

export const followUser = (id, data) => async (dispatch) => {

    dispatch({ type: "FOLLOW_USER", data: id })

    postFollowUser(id, data)

}
export const unFollowUser = (id, data) => async (dispatch) => {

    dispatch({ type: "UNFOLLOW_USER", data: id })
    postUnFollowUser(id, data)

}