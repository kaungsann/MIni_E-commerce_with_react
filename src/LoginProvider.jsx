import React from "react";
const LoginContext = React.createContext();
export const LoginProvider = (props) => {
  const getVaue = window.localStorage.getItem("valid");
  const convertObj = JSON.parse(getVaue);
  return (
    <LoginContext.Provider value={{ convertObj }}>
      {props.children}
    </LoginContext.Provider>
  );
};
export default LoginContext;
