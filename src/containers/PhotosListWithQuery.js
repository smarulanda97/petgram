import React from 'react';
import { useQuery } from '@apollo/client'
import { GET_PHOTOS } from '../queries/photos'
import { PhotoCardsList } from './../components/photo-cards-list/index'

export const PhotosListWithQuery = ({ categoryId }) => {
  const { data = { photos: [] } } = useQuery(GET_PHOTOS, { variables: { categoryId } })
  return <PhotoCardsList photos={data.photos} />
}
