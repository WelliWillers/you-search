import axios from 'axios';

const api = axios.create({
    baseURL: `${process.env.VUE_APP_YOUTUBE_API_URL}`,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
})


export { api }