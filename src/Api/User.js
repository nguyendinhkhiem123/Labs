import AxiosClient from '../Axios/index';


export const getAllUser  = ()=>{
    const url = "users"
    return AxiosClient.get(url)
}