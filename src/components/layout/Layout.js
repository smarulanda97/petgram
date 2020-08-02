import React, { Fragment } from 'react'
import { Logo } from '../logo'
import { GlobalStyles } from '../../styles/GlobalStyles'
import { Link } from 'react-router-dom'

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
    </Fragment>
  )
}
