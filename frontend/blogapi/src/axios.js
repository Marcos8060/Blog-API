import axios from 'axios'

const baseURL = 'http://127.0.0.1:8000/api/'

const axiosInstance = axios.create({
    baseURL : baseURL,
    timeout : 4000,
    headers : {
        Authorization : localStorage.getItem('access_token')
            ? 'jwt ' + localStorage.getItem('access_token')
            : null,
        'Content-Type' : 'application/json',
        accept: 'application/json',
    },
});



export default axiosInstance