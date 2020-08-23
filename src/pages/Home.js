import React from 'react'
import { withLayout } from '../hoc/withLayout'
import { PhotosListWithQuery } from '../containers/PhotosListWithQuery'

const HomePage = (props) => {
  const { params } = props.match;
  return (
    <PhotosListWithQuery categoryId={params.categoryId} />
  )
}

const Home = React.memo(HomePage, (prevProps, props) => {
  const { params: prevParams } = prevProps.match
  const { params } = props.match
  return prevParams.categoryId === params.categoryId;
})

export default withLayout(Home, {
  categoryList: true,
  title: 'Home',
  description: 'Within Petgram you can find the best pictures of prettiest pets'
})
