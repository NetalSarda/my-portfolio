"use client";
import { createContext, useContext, useState, useEffect } from "react";

const ConfigContext = createContext();

export const ConfigProvider = ({ children }) => {
  const [clicked, setClicked] = useState(false);

  useEffect(()=>{
    if(window.location.pathname != "/"){
        setClicked(true)
    }
  },[])

  return (
    <ConfigContext.Provider
      value={{
        clicked,
        setClicked,
      }}
    >
      {children}
    </ConfigContext.Provider>
  );
};

export const useConfig = () => {
  const context = useContext(ConfigContext);
  if (!context) {
    throw new Error("useConfig must be used within an ConfigProvider");
  }
  return context;
};

// Context Set of variables that are available throughout the wrapped component
