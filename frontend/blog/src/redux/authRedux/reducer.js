import { Authentication } from "./actionTypes";


const initState = {
   
    email : "",
    gender : "" ,
    token : "",
    isLogin : false,
    isError : false,
    isLoading : false ,
}


export const authReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case Authentication.LOGIN_PENDING:
      return { ...state, isLoading: true };
    case Authentication.LOGIN_SUCCESS:
      return { ...state, isLoading: false, isLogin: true, ...payload };
    case Authentication.LOGIN_FAILURE:
      return { ...state, isLoading: false, isError: true };
    case Authentication.LOGOUT_SUCCESS:
      return { ...state, isLoading: false };
    default:
        return state
       
  }
};
