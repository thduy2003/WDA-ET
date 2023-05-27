
const authReducer = (state = {
    authData: null, loading: false, error: null, updateLoading: false
}, action) => {
    switch (action.type) {
        case "AUTH_START":
            return { ...state, loading: true, error: null }
        case "AUTH_SUCCESS":
            localStorage.setItem("profile", JSON.stringify({ ...action?.data }))
            return { ...state, authData: action.data, loading: false, error: false }
        case "AUTH_FAIL":
            return { ...state, loading: false, error: action?.message }

        case "UPDATING_START":
            return { ...state, updateLoading: true, error: false }
        case "UPDATING_SUCCESS":
            localStorage.setItem("profile", JSON.stringify({ ...action?.data }))
            return { ...state, authData: action.data, updateLoading: false, error: false }
        case "UPDATING_FAIL":

            return { ...state, updateLoading: false, error: false }
        case "FOLLOW_USER":
            return { ...state, authData: { ...state.authData, user: { ...state.authData.user, follow: [...state.authData.user.follow, action.data], } } }

        case "UNFOLLOW_USER":
            return { ...state, authData: { ...state.authData, user: { ...state.authData.user, follow: [...state.authData.user.follow.filter((personId) => personId !== action.data)] } } }
        case "LIKE_LANDMARK":
            return { ...state, authData: { ...state.authData, user: { ...state.authData.user, favorite_landmark: [...state.authData.user.favorite_landmark, action.data], } } }

        case "UNLIKE_LANDMARK":
            return { ...state, authData: { ...state.authData, user: { ...state.authData.user, favorite_landmark: [...state.authData.user.favorite_landmark.filter((landMarkId) => landMarkId !== action.data)] } } }
        case "LOG_OUT":
            localStorage.clear()
            return { ...state, authData: null, loading: false, error: false, updateLoading: false }
        default:
            return state
    }
}
export default authReducer