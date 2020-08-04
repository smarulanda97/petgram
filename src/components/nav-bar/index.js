import React from 'react'
import { Link, Nav } from './styles'
import { MdHome, MdFavoriteBorder, MdPersonOutline } from 'react-icons/md'

export const NavBar = () => {
  return (
    <Nav>
      <Link to={'/'} activeClassName={'active'} exact>
        <MdHome size={'32px'}/>
      </Link>
      <Link to={'/favorites'} activeClassName={'active'} exact>
        <MdFavoriteBorder size={'32px'}/>
      </Link>
      <Link to={'/user'} activeClassName={'active'} exact>
        <MdPersonOutline size={'32px'}/>
      </Link>
    </Nav>
  )
}
