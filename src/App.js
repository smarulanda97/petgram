import React from 'react'
import { Router } from './Router'
import { Apollo } from './Apollo'
import { Provider } from './Context'

export const App = () => (
  <Provider>
    <Apollo>
      <Router />
    </Apollo>
  </Provider>
)

