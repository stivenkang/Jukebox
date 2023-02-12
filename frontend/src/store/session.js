import csrfFetch from "./csrf";

const SET_CURRENT_USER = 'session/setCurrentUser';
const REMOVE_CURRENT_USER = 'session/removeCurrentUser';

// export const getUser = () => (state) => {
//     if (state && state.user) {
//         return state.user
//     } else {
//         return null
//     }
// }
// import getuser and useSelector in the homepage invoked, 
// useSelector(getUser()) into the home page which will give you the current user and display on the page

const setCurrentUser = user => {
    return {
        type: SET_CURRENT_USER,
        user
    };
};

const removeCurrentUser = () => {
    return {
        type: REMOVE_CURRENT_USER
    };
};

const storeCSRFToken = response => {
    const csrfToken = response.headers.get("X-CSRF-Token");
    if (csrfToken) sessionStorage.setItem("X-CSRF-Token", csrfToken);
}
  
const storeCurrentUser = user => {
    if (user) sessionStorage.setItem("currentUser", JSON.stringify(user));
    else sessionStorage.removeItem("currentUser");
}

export const login = ({ credential, password }) => async dispatch => {
    const res = await csrfFetch('/api/session', {
        method: 'POST',
        body: JSON.stringify({ credential, password })
    });
    const data = await res.json();
    sessionStorage.setItem('currentUser', JSON.stringify(data.user));
    storeCurrentUser(data.user);
    dispatch(setCurrentUser(data.user));
    return res;
};

export const signup = user => async dispatch => {
    const { username, email, password } = user;
    const res = await csrfFetch("/api/users", {
        method: 'POST',
        body: JSON.stringify({ username, email, password })
    });
    const data = await res.json();
    storeCurrentUser(data.user);
    dispatch(setCurrentUser(data.user));
    return res;
}

export const logout = () => async (dispatch) => {
    const res = await csrfFetch("/api/session", {
      method: "DELETE"
    });
    storeCurrentUser(null);
    dispatch(removeCurrentUser());
    return res;
};

export const restoreSession = () => async dispatch => {
    const res = await csrfFetch('/api/session');
    storeCSRFToken(res);
    const data = await res.json();
    storeCurrentUser(data.user);
    dispatch(setCurrentUser(data.user));
    return res;
}

const initialState = { user: JSON.parse(sessionStorage.getItem('currentUser'))};

const sessionReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_CURRENT_USER:
        return { ...state, user: action.user };
      case REMOVE_CURRENT_USER:
        return { ...state, user: null };
      default:
        return state;
    }
};
  
export default sessionReducer;

