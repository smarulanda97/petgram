import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import { FavButton } from '../fav-button'
import { Card, ImgWrapper, Img } from './styles'
import { useNearScreen } from '../../hooks/useNearScreen'
import { ToggleLikeMutation } from '../../containers/ToggleLikeMutation'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60';

export const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMAGE } = {}) => {
  const [show, ref] = useNearScreen()
  const handleToggleLike = (toggleLike) => toggleLike({ variables: { input: { id } } })

  return (
    <Card ref={ref}>
      { !show
        ?
        null
        :
        <Fragment>
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
        </Fragment>
      }
    </Card>
  )
}
