import React from 'react'
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
