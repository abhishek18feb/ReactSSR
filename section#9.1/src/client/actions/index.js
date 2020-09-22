import axios from 'axios';

export const fetchUsers = () => async (dispatch, getState, api) => {
    const res = await api.get('/users');
  
    dispatch({
      type: FETCH_USERS,
      payload: res
    });
};

// export const FETCH_USERS = 'fetch_users';
// export const fetchUsers = () => async dispatch => {
//     const res = await axios.get('https://react-ssr-api.herokuapp.com/users');
//     dispatch({
//         type: FETCH_USERS,
//         payload: res
//     })
// };

