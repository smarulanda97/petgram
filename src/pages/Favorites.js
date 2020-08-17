import React from 'react'
import { withLayout } from '../hoc/withLayout'
import { FavoritesWithQuery } from '../containers/FavoritesWithQuery'

const Favorites = () => {
  return (
    <FavoritesWithQuery />
  )
}

export default withLayout(Favorites, {
  categoryList: false
})
