import { API } from './AxiosClient'


export const postProvince = async (data) => {

    const result = await API.post('/province/create', data)

    return result.data
}
export const getProvince = async () => {
    const result = await API.get('/province')
    return result.data
}
export const searchProvince = async (data) => {
    const result = await API.post('/province/search', data)
    return result.data
}
export const getProvinceById = async (id) => {
    const result = await API.get(`/province/${id}`)
    console.log(result)
    return result.data
}