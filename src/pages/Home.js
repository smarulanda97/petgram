import React from 'react'
import { PhotosListWithQuery } from '../containers/PhotosListWithQuery'
import { withLayout } from '../hoc/withLayout'

const Home = (props) => {
  return <PhotosListWithQuery />
}

export default withLayout(Home)
