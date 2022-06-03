import { api } from '../../services/youtube_api';

const getVideosBySearchName = async ({commit}, data) => {

    const payload = {
        "part": "snippet",
        "order": "viewCount",
        "type": "video",
        "q": data
    }
    
    return await api.get('/search', {params: payload})
        .then((res) => {
            console.log(res)
            // const videos = res.data;

            // commit('SET_VIDEOS_FOUND', videos)
            
        }).catch(error => {
            return window._Vue.$tools.prepareErrorMessasge(error)
        })
}

export {
    getVideosBySearchName
}