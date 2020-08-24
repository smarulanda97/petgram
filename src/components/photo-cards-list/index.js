import React from 'react';
import PropTypes from 'prop-types'
import { PhotoCard } from '../photo-card'

export const PhotoCardsList = ({ photos }) => {
  return(
    <section>
      {photos.map((photo) => <PhotoCard key={photo.id} {...photo} />)}
    </section>
  )
}

PhotoCardsList.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    liked: PropTypes.bool.isRequired,
    likes: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
  }))
}
