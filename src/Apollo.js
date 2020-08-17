import React from 'react'
import { ApolloClient, ApolloProvider, createHttpLink, from, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { onError } from '@apollo/client/link/error'

const errorLink = onError(error => {
  const { networkError } = error

  if (!(networkError && networkError.result.code === 'invalid_token'))
    return

  window.sessionStorage.removeItem('token')
  window.location.href = process.env.APP_AUTH_URL
})

const authLink = setContext((_, { headers }) => {
  const token = window.sessionStorage.getItem('token')
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    },
  }
})

const httpLink = createHttpLink({
  uri: process.env.API_ENDPOINT_GRAPHQL,
})

const client = new ApolloClient({
  link: from([
    errorLink,
    authLink,
    httpLink
  ]),
  cache: new InMemoryCache(),
})

export const Apollo = ({ children }) => (
  <ApolloProvider client={client}>
    { children }
  </ApolloProvider>
)
