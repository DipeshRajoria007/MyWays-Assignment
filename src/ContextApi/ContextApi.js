import React, { useState, createContext } from "react";
import Data from "../Data/Data";
const Context = createContext();








export const ContextProvider = ({ children }) => {
  const { query: data } = Data;
  const [info, setInfo] = useState(true);
  return (
    <Context.Provider
      value={{
        info,
        setInfo,
        data,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
