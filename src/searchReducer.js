import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOT_ISPENDING,
  REQUEST_ROBOT_SUCCESS,
  REQUEST_ROBOT_FAILED
} from './types';

const initStateSearch = {
  searchField: ''
};

export const searchRobots = (state = initStateSearch, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return {
        ...state,
        searchField: action.payload
      };
    default:
      return state;
  }
};

const initStateRobots = {
  robots: [],
  isPending: false,
  err: null
};

export const requestRobotsReducer = (state = initStateRobots, action = {}) => {
  switch (action.type) {
    case REQUEST_ROBOT_ISPENDING:
      return {
        ...state,
        isPending: true
      };
    case REQUEST_ROBOT_SUCCESS:
      return {
        ...state,
        isPending: false,
        robots: action.payload
      };
    case REQUEST_ROBOT_FAILED:
      return {
        ...state,
        isPending: false,
        err: action.payload
      };
    default:
      return state;
  }
};
