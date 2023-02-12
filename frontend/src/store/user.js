const ADD_USER = 'users/addUser'
const ADD_USERS = 'users/addUsers'
// const REMOVE_USER = 'users/removeUser'

export const addUser = user => {
    return {
        type: ADD_USER,
        user
    }
}

export const addUsers = users => {
    return {
        type: ADD_USERS,
        users
    }
}

function usersReducer(state={}, action) {
    Object.freeze(state)
    switch (action.type) {
        case ADD_USER:
            return
        case ADD_USERS:
            return
        default:
            return state;
    }
}

export default usersReducer;