export const RECEIVE_PLAYLISTS = 'playlists/receivePlaylists'
export const RECEIVE_PLAYLIST = 'plyalists/receivePlaylist'
export const REMOVE_PLAYLIST = 'playlists/removePlaylist'

const receivePlaylists = (playlists) => {
    return {
        type: RECEIVE_PLAYLISTS,
        playlists
    }
}

const receivePlaylist = (payload) => {
    return {
        type: RECEIVE_PLAYLIST,
        payload
    }
}

const removePlaylist = (playlistId) => {
    return {
        type: REMOVE_PLAYLIST,
        playlistId
    }
}

export const getPlaylist = (playlistId) => (state) => state.playlists ? state.playlists[playlistId] : null
export const getPlaylists = (state) => state.playlists ? Object.values(state.playlists) : []

export const fetchPlaylists = () => async dispatch => {
    const res = await fetch(`/api/playlists`)
    if (res.ok) {
        const playlists = await res.json()
        dispatch(receivePlaylists(playlists))
    }
}

export const fetchPlaylist = (playlistId) => async dispatch => {
    const res = await fetch(`/api/playlists/${playlistId}`)
    if (res.ok) {
        const playlist = await res.json()
        dispatch(receivePlaylist(playlist))
    }
}

export const createPlaylist = (playlist) => async dispatch => {
    const res = await fetch(`/api/playlists`, {
        method: 'POST',
        headers: { 'Content-Type' : 'application/json' },
        body: JSON.stringify(playlist)
    });
    if (res.ok) {
        const playlist = await res.json()
        dispatch(receivePlaylist(playlist))
    }
}

export const updatePlaylist = (playlist) => async dispatch => {
    const res = await fetch(`/api/playlists/${playlist.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type' : 'application/json' },
        body: JSON.stringify(playlist)
    });
    if (res.ok) {
        const playlist = await res.json()
        dispatch(receivePlaylist(playlist))
    }
}

export const deletePlaylist = (playlistId) => async dispatch => {
    const res = await fetch(`/api/playlists/${playlistId}`, {
        method: 'DELETE'
    });
    if (res.ok) {
        dispatch(removePlaylist(playlistId))
    }
}

const playlistsReducer = (state={}, action) => {
    const newState = {...state}

    switch(action.type) {
        case RECEIVE_PLAYLISTS:
            return {...newState, ...action.playlists}
        case RECEIVE_PLAYLIST:
            // debugger
            newState[action.payload.playlist.id] = action.payload.playlist
            return newState;
        case REMOVE_PLAYLIST:
            delete newState[action.playlistId]
            return newState;
        default:
            return state;
    }
}

export default playlistsReducer;