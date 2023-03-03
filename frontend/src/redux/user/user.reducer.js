import { SEARCH_FAILURE, SEARCH_REQUEST, SEARCH_SUCCESS } from "./user.type";

const initialState = {
  error: false,
  loading: false,
  searchUsers:[]
};

export const SearchReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case SEARCH_REQUEST: {
      return {...state, loading: true};
    }
    case SEARCH_SUCCESS: {
      console.log(payload)
      return {...state, loading: false, success: true, searchUsers:payload};
    }
    case SEARCH_FAILURE: {
      return {...state, error: true, loading: false};
    }
    default: {
      return state;
    }
  }
};
