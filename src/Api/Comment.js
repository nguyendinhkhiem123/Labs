import AxiosClient from '../Axios/index';


export const getAllComment  = ()=>{
    const url = "comments"
    return AxiosClient.get(url)
}