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

        const videoToFavorite = favorites.filter(f => {
            return f.id.videoId === video.id.videoId
        })

        if(videoToFavorite.length > 0) {
            const error = {
                status: 404
            }
            return window._Vue.$tools.prepareErrorMessasge(error, 'This video already exists in your favorites list')
        }

        const newFavorites = [
            ...favorites,
            video
        ]
        
        localStorage.setItem('favorites', JSON.stringify(newFavorites))
        
        commit('SET_FAVORITES', newFavorites)
    } else {
        const favorites = [
            video
        ]
        localStorage.setItem('favorites', JSON.stringify(favorites))
        commit('SET_FAVORITES', favorites)
    }
}

const loadFavorite = async ({commit}) => {
    if(localStorage.getItem('favorites')){
        const favorites = JSON.parse(localStorage.getItem('favorites'))
        
        commit('SET_FAVORITES', favorites)
    } 
}

const removeFromFavorites = async ({commit}, videoId) => {
    if(localStorage.getItem('favorites')){
        const favorites = JSON.parse(localStorage.getItem('favorites'))
        
        const newFavorites = favorites.filter(favorite => {
            return favorite.id.videoId != videoId
        })

        localStorage.setItem('favorites', JSON.stringify(newFavorites))
        commit('SET_FAVORITES', newFavorites)
    } 
}

const clearSearchFilter = async ({commit}, videoId) => {
    
    commit('SET_VIDEOS_FOUND', [])
    commit('SET_NEXT_PAGE_TOKEN', '')
    
}

export {
    getVideosBySearchName,
    addToFavorite,
    loadFavorite,
    removeFromFavorites,
    clearSearchFilter
}