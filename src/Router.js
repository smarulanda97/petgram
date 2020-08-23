import React, { useContext, useEffect } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { Context } from './Context'

import Home from './pages/Home'
import User from './pages/User'
import Login from './pages/Login'
import Detail from './pages/Detail'
import Register from './pages/Register'
import Favorites from './pages/Favorites'

const PrivateRoute = ({ component: Component, isAuth, loginPath = process.env.APP_AUTH_URL, ...rest }) => (
  <Route
    render={props => isAuth ? <Component {...props} /> : <Redirect from={rest.path} to={`${loginPath}?redirect=${rest.path}`} />} { ...rest }
  />
)

export const Router = ({ children }) => {
  const { isAuth } = useContext(Context);

  return (
    <BrowserRouter>
      <Switch>
        <Route path={'/'} component={Home} exact/>
        <Route path={'/photos/:categoryId'} component={Home} exact/>
        <Route path={'/auth/register'} component={Register} exact />
        <Route path={process.env.APP_AUTH_URL} component={Login} exact />
        <Route path={'/detail/:id'} component={Detail} exact />
        <PrivateRoute path={'/user'} component={User} isAuth={isAuth}/>
        <PrivateRoute path={'/favorites'} component={Favorites} isAuth={isAuth}/>
      </Switch>
    </BrowserRouter>
  )
}
