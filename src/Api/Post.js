import AxiosClient from '../Axios/index';


export const getAllPost  = ()=>{
    const url = "posts"
    return AxiosClient.get(url)

}

export const getOne  = (par)=>{
    const url = "posts";
    return AxiosClient.get(url ,
        {
            params : {
                id : par
            }
        }
    )
}