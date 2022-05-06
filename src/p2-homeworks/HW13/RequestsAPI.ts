import axios from 'axios'



const instance = axios.create({
    baseURL: 'https://neko-cafe-back.herokuapp.com/auth/test'
    //withCredentials:,
    //headers: {
    //    'API-KEY': ''
    //}
})
export const requestAPI = {
    postRequest: (value: boolean) => {
        return instance.post('', {success: value})
            .then(response => response.data)
    }
}