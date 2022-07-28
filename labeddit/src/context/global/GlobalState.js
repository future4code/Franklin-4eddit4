import { React, useState, createContext } from 'react';

const GlobalContext = createContext();

const GlobalState = ({ children }) => {
  const [post, setPost] = useState({});

  const state = { post };
  const setters = { setPost };

  return (
    <GlobalContext.Provider value={{ state, setters }}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalState };
