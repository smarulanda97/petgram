import React, { Fragment } from 'react'
import { withLayout } from '../hoc/withLayout'
import { PhotosListWithQuery } from '../containers/PhotosListWithQuery'

const Home = (props) => {
  return (
    <PhotosListWithQuery />
  )
}

const HomeComponent = React.memo(Home, (prevProps, props) => {
  return prevProps.categoryId === props.categoryId
})

export default withLayout(HomeComponent, {
  categoryList: true,
  title: 'Home',
  description: 'Within Petgram you can find the best pictures of prettiest pets'
})
