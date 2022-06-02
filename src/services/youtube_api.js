import axios from 'axios';

const api = axios.create({
    baseURL: `${process.env.VUE_APP_YOUTUBE_API_URL}`,
    data: `key=${process.env.VUE_APP_YOUTTUBE_API_KEY}`
})

export { api }