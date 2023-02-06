// import csrfFetch from "./csrf";

const SET_CURRENT_USER = 'session/setCurrentUser';
const REMOVE_CURRENT_USER = 'session/removeCurrentUser';

const setCurrentUser = user => {
    return {
        type: SET_CURRENT_USER,
        user
    }
}

const removeCurrentUser = () => {
    return {
        type: REMOVE_CURRENT_USER
    }
}



// export const loginUser = user => async dispatch => {
//     let res = await csrfFetch('/api/session', {
//         method: 'POST',
//         body: JSON.stringify(user)
//     });

//     let data = await res.json();
//     sessionStorage.setItem('currentUser', JSON.stringify(data.user));
//     dispatch(receiveUser(data.user))
// }

// export const logoutUser = userId => async dispatch => {
//     let res = await csrfFetch('/api/session', {
//         method: 'DELETE'
//     });

//     sessionStorage.setItem('currentUser', null)
//     dispatch(removeUser(userId));
// }

// export const createUser = user => async dispatch => {
//     let res = await csrfFetch('/api/users', {
//         method: 'POST',
//         body: JSON.stringify(user)
//     });
//     let data = await res.json()
//     sessionStorage.setItem('currentUser', JSON.stringify(data.user));
//     dispatch(receiveUser(data.user));
// }