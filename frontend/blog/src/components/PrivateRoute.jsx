import React from "react";
import Login from "./Login";
import { shallowEqual, useSelector } from "react-redux";

const PrivateRoute = ({ children }) => {
  const { login } = useSelector((store) => {
    return {
      login: store.authReducer.isLogin,
    };
  }, shallowEqual);

  console.log(login);
  if (!login) {
    return <Login />;
  }

  return children;
};

export default PrivateRoute;
