import { API } from './AxiosClient'

export const signUp = async (formData) => {

    const result = await API.post('/auth/register', formData)

    return result.data
}
export const logIn = async (formData) => {

    const result = await API.post('/auth/login', formData)

    return result.data
}