import React from 'react'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://petgram-api-smarulanda97.vercel.app/graphql',
  cache: new InMemoryCache()
})

export const Apollo = ({ children }) => (
  <ApolloProvider client={client}>
    { children }
  </ApolloProvider>
)
