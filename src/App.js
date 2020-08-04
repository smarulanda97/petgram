import React from 'react'
import Home from './pages/Home'
import Detail from './pages/Detail'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')

  return (
    <BrowserRouter>
      <Switch>
        <Route path={'/'} component={Home} exact/>
        <Route path={'/favorites'} component={Home} exact/>
        <Route path={'/user'} component={Home} exact/>
        <Route path={'/detail/:id'} component={Detail} exact />
      </Switch>
    </BrowserRouter>
  )
}

export default App
