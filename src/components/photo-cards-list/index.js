import React from 'react';
import { PhotoCard } from '../photo-card'

export const PhotoCardsList = () => {
  return(
    <section>
      {[1, 2, 3, 4].map((photoCard) =>  <PhotoCard />)}
    </section>
  )
}
