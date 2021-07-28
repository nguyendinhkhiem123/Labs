import axios from 'axios';

const REACT_APP_API_URL = 'https://6100180bbca46600171cf71b.mockapi.io/';

// https://mockapi.io/projects/6100180bbca46600171cf71c 
// MOCK API URL 

const axiosClient = axios.create({
  baseURL: REACT_APP_API_URL,
  headers: {
    'content-type': 'application/json',
  },

});


axiosClient.interceptors.request.use((config) => {

  return config;
}, function error() {
  return Promise.reject(error);
});

axiosClient.interceptors.response.use((response) => {
  
  return response;
}, (error) => {
    return new Promise((resolve) => {
  
        return Promise.reject(error)
      })
});


export default axiosClient;