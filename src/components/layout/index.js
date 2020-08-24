import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'

import { GlobalStyles } from '../../styles/GlobalStyles'
import { NavBar } from '../nav-bar'
import { Logo } from '../logo'

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

Layout.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  description: PropTypes.string,
}
