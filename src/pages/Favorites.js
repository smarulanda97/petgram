import React from 'react'
import { withLayout } from '../hoc/withLayout'

const Favorites = () => {
  return (
    <h1>Favs pages</h1>
  )
}

export default withLayout(Favorites, {
  categoryList: false
})
