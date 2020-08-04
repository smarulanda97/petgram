import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_PHOTO } from '../queries/photos'
import { PhotoCard } from '../components/photo-card'

export const PhotoDetailWithQuery = ({ id }) => {
  const { data = { photo: {} } } = useQuery(GET_PHOTO, { variables: { id } })
  return <PhotoCard {...data.photo} />
}
