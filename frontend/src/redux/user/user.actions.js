import { SEARCH_FAILURE, SEARCH_REQUEST, SEARCH_SUCCESS } from "./user.type";

export const searchData =
  (q) =>
  async (dispatch) => {
    try {
      dispatch({type: SEARCH_REQUEST});
      let res = await fetch(`http://localhost:8080/user/search?q=${q}`);
      res = await res.json();
      dispatch({type: SEARCH_SUCCESS, payload: res});
    } catch (e) {
      console.log(e);
      dispatch({type: SEARCH_FAILURE});
    }
  };
  
