import React from 'react';
import { PhotoCard } from '../photo-card'

export const PhotoCardsList = ({ photos }) => {
  return(
    <section>
      {photos.map((photo) => <PhotoCard key={photo.id} {...photo} />)}
    </section>
  )
}
