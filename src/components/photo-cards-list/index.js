import React from 'react';
import { PhotoCard } from '../photo-card'

export const PhotoCardsList = () => {
  return(
    <section>
      {[1, 2, 3, 4, 5, 6, 7].map((photoCard) =>  <PhotoCard key={photoCard} />)}
    </section>
  )
}
