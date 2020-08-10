import React, { createContext, useState } from 'react'

export const Context = createContext({
  isAuth: false
})

export const Provider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false)
  const value = {
    isAuth,
    setIsAuth
  }

  return (
    <Context.Provider value={value}>
      { children }
    </Context.Provider>
  )
}
