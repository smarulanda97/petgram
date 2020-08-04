import React, { Fragment } from 'react'
import { Logo } from '../logo'
import { GlobalStyles } from '../../styles/GlobalStyles'
import { Link } from 'react-router-dom'
import { NavBar } from '../nav-bar'

export const Layout = ({ children }) => {
  return (
    <Fragment>
      <GlobalStyles />
      <header>
        <Link to={'/'}>
          <Logo />
        </Link>
      </header>
      <main>
        { children }
      </main>
      <footer>
        <NavBar />
      </footer>
    </Fragment>
  )
}
