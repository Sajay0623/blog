import { applyMiddleware, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { combineReducers } from "redux";
import { authReducer } from "./authRedux/reducer";
import { blogReducer } from "./blogRedux/reducer";

const rootReducer = combineReducers({ blogReducer, authReducer });
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
