import React, { useContext, useEffect, Suspense } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { Context } from './Context'

const Home = React.lazy(() => import('./pages/Home'))
const User = React.lazy(() => import('./pages/User'))
const Login = React.lazy(() => import('./pages/Login'))
const Detail = React.lazy(() => import('./pages/Detail'))
const Register = React.lazy(() => import('./pages/Register'))
const Favorites = React.lazy(() => import('./pages/Favorites'))

const RenderLoader = () => <div/>;

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
        <Suspense fallback={<RenderLoader />}>
          <Route path={'/'} component={Home} exact/>
          <Route path={'/photos/:categoryId'} component={Home} exact/>
          <Route path={'/auth/register'} component={Register} exact />
          <Route path={process.env.APP_AUTH_URL} component={Login} exact />
          <Route path={'/detail/:id'} component={Detail} exact />
          <PrivateRoute path={'/user'} component={User} isAuth={isAuth}/>
          <PrivateRoute path={'/favorites'} component={Favorites} isAuth={isAuth}/>
        </Suspense>
      </Switch>
    </BrowserRouter>
  )
}
