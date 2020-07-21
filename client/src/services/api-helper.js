import axios from 'axios';

const baseUrl = process.env.NODE_ENV === 'production' ? 'https://scotts-blog.herokuapp.com/' : 'http://localhost:3000'

const api = axios.create({
 baseURL: baseURL
})

export default api;