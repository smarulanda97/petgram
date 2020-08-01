import React from 'react'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: process.env.API_ENDPOINT_GRAPHQL,
  cache: new InMemoryCache()
})

export const Apollo = ({ children }) => (
  <ApolloProvider client={client}>
    { children }
  </ApolloProvider>
)
