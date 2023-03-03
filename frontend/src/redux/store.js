import {legacy_createStore, applyMiddleware, combineReducers} from "redux";
import thunk from "redux-thunk";
import { AuthReducer } from "./auth/auth.reducer";
import { SearchReducer } from "./user/user.reducer";

const rootReducer = combineReducers({
  auth: AuthReducer,
  search: SearchReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
