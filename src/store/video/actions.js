import { api } from '../../services/youtube_api';

const getVideosBySearchName = async ({commit}) => {

    const payload = {
        "part": "snippet",
        "order": "viewCount",
        "type": "video",
        "q": "felipe"
    }
    
    return await api.get('/search', {params: payload})
        .then((res) => {
            alert('deu bom')
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