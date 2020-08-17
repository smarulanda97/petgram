import React, { createContext, useState } from 'react'

export const Context = createContext({
  isAuth: false
})

export const Provider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(() => window.sessionStorage.getItem(`token`))
  const value = {
    isAuth,
    setIsAuth: token => {
      setIsAuth(true)
      window.sessionStorage.setItem(`token`, token)
    }
  }

  return (
    <Context.Provider value={value}>
      { children }
    </Context.Provider>
  )
}
