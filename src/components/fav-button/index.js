import React from 'react'
import PropTypes from 'prop-types';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md/index'
import { Button } from './styles'

export const FavButton = ({ onClick, liked, likes }) => {
  const Icon = liked ? MdFavorite : MdFavoriteBorder

  return (
    <Button onClick={onClick}>
      <Icon size={`32px`}/> { likes }
    </Button>
  )
}

FavButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  liked: PropTypes.bool.isRequired,
  likes: function (props, propName, componentName) {
    const propValue = props[propName];

    if (propValue === undefined)
      return  new Error(`${propName} value must be defined`)

    if (propValue < 0)
      return new Error(`${propName} value must be greater than 0`)
  }
}
