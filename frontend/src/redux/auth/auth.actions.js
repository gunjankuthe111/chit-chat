import {SIGNUP_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS} from "./auth.type";

export const signupData =
  ({name, image, password, email}) =>
  async (dispatch) => {
    try {
      dispatch({type: SIGNUP_REQUEST});

      let res = await fetch("http://localhost:8080/signup", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({name, email, password, pic: image}),
      });
      res = await res.json();

      dispatch({type: SIGNUP_SUCCESS, payload: res});
    } catch (e) {
      console.log(e);
      dispatch({type: SIGNUP_FAILURE});
    }
  };

export const LoginData = (cred) => async (dispatch) => {
  try {
  } catch (e) {}
};
