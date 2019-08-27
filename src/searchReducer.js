import { CHANGE_SEARCH_FIELD } from './types';

const initState = {
  searchField: ''
};

export const searchReducer = (state = initState, action = {}) => {
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
