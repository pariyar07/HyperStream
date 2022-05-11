const VideoReducer = (state, action) => {
    switch (action.type) {
        case "LOAD_VIDEO":
            return { ...state, videos: action.payload };
        case 'LIKE':{
            return {
                ...state, liked: [...state.liked, {...action.payload}]
            }
        }
        case 'WATCH_LATER':{
            return {
                ...state, watchlater: [...state.watchlater, {...action.payload}]
            }
        }
        case 'ADD_TO_PLAYLIST':{
            return {
                ...state, playlist: [...state.playlist, {...action.payload}]
            }
        }
        case 'HISTORY':{
            return {
                ...state, history: [...state.history, {...action.payload}]
            }
        }
        default:
            return state;
    }
}

export default VideoReducer;