const SET_VIDEOS_FOUND = (state, videos) => {
    state.videos = videos
}

const SET_NEXT_PAGE_TOKEN = (state, nextPageToken) => {
    state.nextPageToken = nextPageToken
}

const SET_FAVORITES = (state, favorites) => {
    state.favorites = favorites
}

export {
    SET_VIDEOS_FOUND,
    SET_NEXT_PAGE_TOKEN,
    SET_FAVORITES
}