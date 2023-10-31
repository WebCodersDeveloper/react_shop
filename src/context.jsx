import { createContext, useContext } from "react";

const AppContext = createContext();

const AppProvider = ({children}) => {
    const getLocalStorage = (key) => {
        return localStorage.getItem(key)
          ? JSON.parse(localStorage.getItem(key))
          : [];
      };
      const getLocalStorageUser = () => {
        return localStorage.getItem('user')
          ? JSON.parse(localStorage.getItem('user'))
          : false;
      };
      return (
        <AppContext.Provider value={{
            getLocalStorage,
            getLocalStorageUser,
        }}>
            {children}
        </AppContext.Provider>
      )
}

export const  useGlobalContext = () => {
    return useContext(AppContext)
}
export {AppContext , AppProvider}