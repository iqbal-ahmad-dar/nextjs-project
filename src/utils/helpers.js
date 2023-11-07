

import React, { createContext, useState } from "react";

const ToggleContext = createContext();


export const ToggleContextProvider = ({ children }) => {
  const [show, setShow] = useState(true);
  console.log("show",show);


  return (
    <ToggleContext.Provider value={{ show, setShow }}>
      {children}
    </ToggleContext.Provider>
  );
};

export default ToggleContext;