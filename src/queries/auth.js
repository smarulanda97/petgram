import { gql } from '@apollo/client'

export const SING_UP = gql`
  mutation singup($input: UserCredentials!) {
    signup(input: $input)
  }
`

export const SING_IN = gql`
  mutation login($input: UserCredentials!) {
    login(input: $input)
  }
`
