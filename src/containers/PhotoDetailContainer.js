import React from 'react'
import { useQuery } from '@apollo/client'
import { useParams } from 'react-router-dom'

import { PhotoCard } from '../components/photo-card'
import { GET_PHOTO } from '../queries/photos'
import { withCategoriesList } from '../hoc/withCategoriesList'

const PhotoDetailContainer = () => {
  const { id } = useParams()
  const { data = { photo: {} } } = useQuery(GET_PHOTO, { variables: { id } })
  return <PhotoCard {...data.photo} />
}

export default withCategoriesList(PhotoDetailContainer)()
