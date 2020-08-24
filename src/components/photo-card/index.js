import PropTypes from 'prop-types'
import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import { FavButton } from '../fav-button'
import { Card, ImgWrapper, Img } from './styles'
import { useNearScreen } from '../../hooks/useNearScreen'
import { ToggleLikeMutation } from '../../containers/ToggleLikeMutation'

export const PhotoCard = ({ id, liked, likes = 0, src } = {}) => {
  const [show, ref] = useNearScreen()
  const handleToggleLike = (toggleLike) => toggleLike({ variables: { input: { id } } })

  return (
    <Card ref={ref}>
      { !show
        ?
         null
        :
        <>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} alt=""/>
            </ImgWrapper>
          </Link>
          <ToggleLikeMutation render={(toggleLike) => (
            <FavButton
              likes={likes}
              liked={liked}
              onClick={() => handleToggleLike(toggleLike)}
            />)}
          />
        </>
      }
    </Card>
  )
}

PhotoCard.propTypes = {
  id: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  likes: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
}
