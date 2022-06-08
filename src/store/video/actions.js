import { api } from '../../services/youtube_api';

const getVideosBySearchName = async ({commit}, data) => {

    const payload = {
        part: "snippet",
        order: "viewCount",
        maxResults: 20,
        type: data.type ? data.type : 'video',
        // videoEmbeddable: data.type == "video" ? true : false,
        key: "AIzaSyBki-aoGwHPy3O2WjK0F06oKvmjQ_1C3FY",
        q: data.search,
        pageToken: data.nextPageToken ? data.nextPageToken : null
    }
    
    return await api.get('/search', {params: payload})
        .then((res) => {
            const videos = res.data.items;
            const nextPageToken = res.data.nextPageToken;

            if(!data.nextPageToken) {
                commit('SET_VIDEOS_FOUND', videos)
            } else {
                commit('SET_VIDEOS_FOUND_ON', videos)    
            }
            
            commit('SET_NEXT_PAGE_TOKEN', nextPageToken)
        }).catch(error => {
            return window._Vue.$tools.prepareErrorMessasge(error)
        })
}

const addToFavorite = async ({commit}, video) => {
    if(localStorage.getItem('favorites')){
        const favorites = JSON.parse(localStorage.getItem('favorites'))

        const newfavorites = [
            ...favorites,
            video
        ]
        
        localStorage.setItem('favorites', JSON.stringify(newfavorites))
        
        commit('SET_FAVORITES', newfavorites)
    } else {
        const favorites = [
            video
        ]
        localStorage.setItem('favorites', JSON.stringify(favorites))
        commit('SET_FAVORITES', favorites)
    }
}

const loadFavorite = async ({commit}, video) => {
    if(localStorage.getItem('favorites')){
        const favorites = JSON.parse(localStorage.getItem('favorites'))
        
        commit('SET_FAVORITES', favorites)
    } 
}

export {
    getVideosBySearchName,
    addToFavorite,
    loadFavorite
}