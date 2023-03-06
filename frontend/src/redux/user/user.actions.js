import { CONTACTS_FAILURE, CONTACTS_REQUEST, CONTACTS_SUCCESS, NEWCHAT_REQUEST, SEARCH_FAILURE, SEARCH_REQUEST, SEARCH_SUCCESS } from "./user.type";

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
  
export const newChat=(token,id)=>async(dispatch)=>{
  try {
    dispatch({type:NEWCHAT_REQUEST})
    let res = await fetch("http://localhost:8080/chat",{
      method:"post",
      headers:{
        "Content-Type":"application/json",
        token
      },
      body:JSON.stringify({id})
    });

    res = await res.json()
    console.log(res)
    
  } catch (e) {
    console.log(e)
  }
}

export const showContacts=(token)=>async(dispatch)=>{
  try {
    dispatch({type:CONTACTS_REQUEST})

    let res = await fetch("http://localhost:8080/chat",{
      headers:{
        token
      }
    });
    res = await res.json()
    dispatch({type:CONTACTS_SUCCESS,payload:res})
    
  } catch (e) {
    console.log(e)
    dispatch({type:CONTACTS_FAILURE})
  }
}