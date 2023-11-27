import React, { createContext } from "react";

const ObserverContext = createContext(null);

const ObserverContextProvider = ({ children, value }) => {
  return (
    <ObserverContext.Provider value={value}>
      {children}
    </ObserverContext.Provider>
  );
};

const useObserverContext = () => {
  const context = React.useContext(ObserverContext);
  if (!context) {
    throw new Error(
      `useObserverContext must be used within a ObserverContextProvider`
    );
  }
  return context;
};

export { ObserverContextProvider, useObserverContext };
