import React from 'react';
import { useQuery } from '@apollo/client'

import { GET_PHOTOS } from '../queries/photos'
import { PhotoCardsList } from './../components/photo-cards-list/index'
import { withCategoriesList } from '../hoc/withCategoriesList'

const PhotosListContainer = ({ categoryId }) => {
  const { data = { photos: [] } } = useQuery(GET_PHOTOS, { variables: { categoryId } })
  return <PhotoCardsList photos={data.photos} />
}

export default withCategoriesList(PhotosListContainer)()
