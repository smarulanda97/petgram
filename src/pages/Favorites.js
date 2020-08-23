import React, { Fragment } from 'react'
import { withLayout } from '../hoc/withLayout'
import { FavoritesWithQuery } from '../containers/FavoritesWithQuery'

const Favorites = () => {
  return (
    <FavoritesWithQuery />
  )
}

export default withLayout(Favorites, {
  categoryList: false,
  title: 'Your favorites',
  description: 'Here you cand find your favorite pets'
})
