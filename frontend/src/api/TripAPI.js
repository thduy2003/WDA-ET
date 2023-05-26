import { API } from './AxiosClient'
export const getTrip = async (data) => {

    const result = await API.get('/trip', { params: data })

    return result.data
}
export const getLandMarks = async (data) => {
    const result = await API.post('/landmark/route', data)
    return result.data
}