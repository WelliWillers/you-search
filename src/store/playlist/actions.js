import { api } from '../../services/youtube_api';

const getPlaylistFirstVideoInformations = async ({commit}, playlistId) => {

    const payload = {
        part: "snippet",
        maxResults: 1,
        playlistId: playlistId,
        key: process.env.VUE_APP_YOUTUBE_API_KEY,
    }
    
    return await api.get('/playlistItems', {params: payload})
        .then((res) => {
            const video = res.data.items[0];
            commit('SET_VIDEO_PLAYLIST', video)
            
        }).catch(error => {
            return window._Vue.$tools.prepareErrorMessasge(error)
        })
}
export {
    getPlaylistFirstVideoInformations
}