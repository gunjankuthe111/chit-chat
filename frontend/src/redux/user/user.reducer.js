import { CONTACTS_FAILURE, CONTACTS_REQUEST, CONTACTS_SUCCESS, SEARCH_FAILURE, SEARCH_REQUEST, SEARCH_SUCCESS } from "./user.type";

const initialState = {
  error: false,
  loading: false,
  searchUsers:[],
  contacts:[]
};

export const SearchReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case SEARCH_REQUEST: {
      return {...state, loading: true};
    }
    case SEARCH_SUCCESS: {
      
      return {...state, loading: false, success: true, searchUsers:payload};
    }
    case SEARCH_FAILURE: {
      return {...state, error: true, loading: false};
    }
    case CONTACTS_REQUEST: {
      return {...state, loading: true};
    }
    case CONTACTS_SUCCESS: {
      
      return {...state, loading: false, success: true, contacts:payload};
    }
    case CONTACTS_FAILURE: {
      return {...state, error: true, loading: false};
    }
    
    default: {
      return state;
    }
  }
};
