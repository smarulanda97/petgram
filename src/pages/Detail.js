import React from 'react'
import { PhotoDetailWithQuery } from '../containers/PhotoDetailWithQuery'
import { withLayout } from '../hoc/withLayout'

const Detail = (props) => {
  const { params = { id: '' } } = props.match;
  return <PhotoDetailWithQuery id={params.id}/>
}

export default withLayout(Detail)
