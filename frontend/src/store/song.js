export const RECEIVE_SONGS = 'songs/receiveSongs'

export const receiveSongs = (songs) => {
    return {
        type: RECEIVE_SONGS,
        songs
    }
};

export const getSongs = (state) => (state.songs) ? Object.values(state.songs) : [];

export const fetchSongs = () => async dispatch => {
    const res = await fetch(`/api/songs`);
    const data = await res.json();
    return dispatch(receiveSongs(data));
}

const songsReducer = (state={}, action) => {
    const newState = {...state}

    switch(action.type) {
        case RECEIVE_SONGS:
            return {...newState, ...action.songs}
        default:
            return state;
    }
}

export default songsReducer;