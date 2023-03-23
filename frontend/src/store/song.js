export const RECEIVE_SONGS = 'songs/receiveSongs'
export const RECEIVE_SONG = 'songs/receiveSong'

export const receiveSongs = (songs) => {
    return {
        type: RECEIVE_SONGS,
        songs
    }
};

export const receiveSong = (payload) => {
    return {
        type: RECEIVE_SONG,
        payload
    }
};

export const getSong = (songId) => (state) => state.songs ? state.songs[songId] : null
export const getSongs = (state) => (state.songs) ? Object.values(state.songs) : [];

export const fetchSongs = () => async dispatch => {
    const res = await fetch(`/api/songs`);
    const data = await res.json();
    return dispatch(receiveSongs(data));
}

export const fetchSong = (songId) => async dispatch => {
    const res = await fetch(`/api/songs/${songId}`)
    if (res.ok) {
        const data = await res.json();
        return dispatch(receiveSong(data));
    };
}

const songsReducer = (state={}, action) => {
    const newState = {...state}

    switch(action.type) {
        case RECEIVE_SONGS:
            return {...newState, ...action.songs}
        case RECEIVE_SONG:
            newState[action.payload.song.id] = action.payload.song
            return newState;
        default:
            return state;
    }
}

export default songsReducer;