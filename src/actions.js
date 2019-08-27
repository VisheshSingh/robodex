import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOT_ISPENDING,
  REQUEST_ROBOT_SUCCESS,
  REQUEST_ROBOT_FAILED
} from './types';

export const setSearchField = text => {
  return {
    type: CHANGE_SEARCH_FIELD,
    payload: text
  };
};

export const requestRobots = () => dispatch => {
  dispatch({ type: REQUEST_ROBOT_ISPENDING });
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => dispatch({ type: REQUEST_ROBOT_SUCCESS, payload: data }))
    .catch(err => dispatch({ type: REQUEST_ROBOT_FAILED, payload: err }));
};
