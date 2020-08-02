import React from 'react'
import { Layout } from './components/layout/Layout'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import PhotosListContainer from './containers/PhotosListContainer'
import PhotoDetailContainer from './containers/PhotoDetailContainer'

const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')

  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path={'/'} component={PhotosListContainer} exact/>
          <Route path={'/detail/:id'} component={PhotoDetailContainer} exact />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App
