import csrfFetch from './csrf';

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
    const playlists = await res.json()
    return dispatch(receivePlaylists(playlists))
}

export const fetchPlaylist = (playlistId) => async dispatch => {
    const res = await fetch(`/api/playlists/${playlistId}`)
    // if (res.ok) {
        const playlist = await res.json()
        return dispatch(receivePlaylist(playlist))
    // }
}

// export const createPlaylist = (playlist) => async dispatch => {
//     // Added csrf to the fetch below since there was an error with authenticity
//     const res = await csrfFetch(`/api/playlists`, {
//         method: 'POST',
//         headers: { 'Content-Type' : 'application/json' },
//         body: JSON.stringify({playlist: playlist})
//     });
//     if (res.ok) {
//         const playlist = await res.json()
//         dispatch(receivePlaylist(playlist))
//     }
// }
export const createPlaylist = (sessionUser, history) => async dispatch => {
    debugger
    const res = await fetch(`/api/playlists`, {
        method: 'POST',
        headers: { 'Content-Type' : 'application/json' },
        body: JSON.stringify({playlist: {
            title: "New Playlist",
            author_id: sessionUser,
        }})
    });
    if (res.ok) {
        const playlist = await res.json()
        dispatch(receivePlaylist(playlist))
        history.push(`/playlists/${playlist.id}`)
    }
}


export const updatePlaylist = (playlistId) => async dispatch => {
    const res = await fetch(`/api/playlists/${playlistId}`, {
        method: 'PATCH',
        headers: { 'Content-Type' : 'application/json' },
        body: JSON.stringify(playlistId)
    });
    if (res.ok) {
        const data = await res.json()
        dispatch(receivePlaylist(data))
    }
}
// export const updatePlaylist = (updatedPlaylist) => async dispatch => {
//     const res = await fetch(`/api/playlists/${updatedPlaylist.id}`, {
//         method: 'PATCH',
//         headers: { 'Content-Type' : 'application/json' },
//         body: JSON.stringify(updatedPlaylist)
//     });
//     if (res.ok) {
//         const data = await res.json()
//         dispatch(receivePlaylist(data))
//     }
// }

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