import React, { createContext, useState } from 'react'

export const Context = createContext({
  isAuth: false
})

export const Provider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(() => window.sessionStorage.getItem(`token`))
  const value = {
    isAuth,
    activateAuth: token => {
      setIsAuth(true)
      window.sessionStorage.setItem(`token`, token)
    },
    removeAuth: () => {
      setIsAuth(false)
      window.sessionStorage.removeItem('token')
    }
  }

  return (
    <Context.Provider value={value}>
      { children }
    </Context.Provider>
  )
}
