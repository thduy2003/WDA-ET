import * as AuthAPI from '../api/AuthAPI'
export const logIn = (formData) => async (dispatch) => {
    dispatch({ type: 'AUTH_START' })
    try {
        const data = await AuthAPI.logIn(formData)
        dispatch({ type: 'AUTH_SUCCESS', data: data })
    } catch (error) {
        console.log(error)
        dispatch({ type: 'AUTH_FAIL', message: error.response.data })
    }
}
export const signUp = (formData) => async (dispatch) => {
    dispatch({ type: 'AUTH_START' })
    try {
        const data = await AuthAPI.signUp(formData)

        dispatch({ type: 'AUTH_SUCCESS', data: data })
    } catch (error) {
        console.log(error)
        dispatch({ type: 'AUTH_FAIL', message: error.response.data })
    }

}

export const logOut = () => async (dispatch) => {
    dispatch({ type: "LOG_OUT" })
}