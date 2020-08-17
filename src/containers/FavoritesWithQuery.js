import React from 'react';
import { useQuery } from '@apollo/client'
import { GET_FAVORITES } from '../queries/photos'
import { PhotoCardsList } from './../components/photo-cards-list/index'

export const FavoritesWithQuery = ({ categoryId }) => {
  const { data = { favs: [] } } = useQuery(GET_FAVORITES, { fetchPolicy: 'cache-and-network' })
  return <PhotoCardsList photos={data.favs} />
}
