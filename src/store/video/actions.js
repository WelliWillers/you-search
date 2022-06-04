import { api } from '../../services/youtube_api';

const getVideosBySearchName = async ({commit}, data) => {

    const payload = {
        part: "snippet",
        order: "viewCount",
        type: "video",
        key: "AIzaSyBki-aoGwHPy3O2WjK0F06oKvmjQ_1C3FY",
        q: data
    }
    
    return await api.get('/search', {params: payload})
        .then((res) => {
            console.log(res)
            const videos = res.data.items;
            commit('SET_VIDEOS_FOUND', videos)
        }).catch(error => {
            return window._Vue.$tools.prepareErrorMessasge(error)
        })
}

export {
    getVideosBySearchName
}