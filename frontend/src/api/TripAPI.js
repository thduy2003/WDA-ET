import { API } from './AxiosClient'
export const getTrip = async (data) => {

    const result = await API.get('/trip', { params: data })

    return result.data
}