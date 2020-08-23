import React, { Fragment } from 'react'
import { withLayout } from '../hoc/withLayout'
import { PhotosListWithQuery } from '../containers/PhotosListWithQuery'

const Home = (props) => {
  const { params } = props.match;
  return (
    <PhotosListWithQuery categoryId={params.categoryId} />
  )
}

export default withLayout(Home, {
  categoryList: true,
  title: 'Home',
  description: 'Within Petgram you can find the best pictures of prettiest pets'
})
