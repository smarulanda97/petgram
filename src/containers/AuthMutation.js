import React from 'react'
import { useMutation } from '@apollo/client'
import { SING_IN, SING_UP } from '../queries/auth'

export const AuthMutation = ({ children }) => {
  const [singup, { data: dataSingUp, loading: loadingSingUp, error: errorSingUp }] = useMutation(SING_UP)
  const [singIn, { data: dataSingIn, loading: loadingSingIn, error: errorSingIn }] = useMutation(SING_IN)

  return children({
    register: {
      singup,
      data: dataSingUp,
      loading: loadingSingUp,
      error: errorSingUp
    },
    login: {
      singIn,
      data: dataSingIn,
      loading: loadingSingIn,
      error: errorSingIn
    }
 })
}
