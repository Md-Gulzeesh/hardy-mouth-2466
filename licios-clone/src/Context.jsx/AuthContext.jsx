import React, { useState } from 'react'
import { createContext } from 'react'

export const AuthContext = createContext();

export default function AuthContextProvider({children}){
    const [isAuth, setIsAuth] = useState(false);

  function handleLogin() {
    setIsAuth(true);
  }
  function handleLogout() {
    setIsAuth(false);
  }
    return (
        <AuthContext.Provider value={{isAuth,setIsAuth,handleLogin,handleLogout}}>
            {children}
        </AuthContext.Provider>
    )
}