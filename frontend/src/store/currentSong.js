export const SET_CURRENT_SONG = 'currentSong/SET_CURRENT_SONG';

export const setCurrentSong = (songId) => {
    return {
        type: SET_CURRENT_SONG,
        songId
    }
};

const currentSongReducer = (state={}, action) => {
    const newState = {...state};

    switch(action.type) {
        case SET_CURRENT_SONG:
            return action.songId;
        default:
            return state;
    }
};

export default currentSongReducer;