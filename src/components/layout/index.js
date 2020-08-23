import React, { Fragment } from 'react'
import { Logo } from '../logo'
import { GlobalStyles } from '../../styles/GlobalStyles'
import { Link } from 'react-router-dom'
import { NavBar } from '../nav-bar'
import { Helmet } from 'react-helmet'

export const Layout = ({ children, title, description }) => {
  return (
    <Fragment>
      <GlobalStyles />
      <Helmet>
        { title && <title>{ title } | Petgram </title> }
        { description && <meta name={'description'} content={description}/> }
      </Helmet>
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
