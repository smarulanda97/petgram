import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'

import { useNearScreen } from '../../hooks/useNearScreen'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { Card, ImgWrapper, Img, Button } from './styles'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60';

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE } = {}) => {
  const [show, ref] = useNearScreen()
  const [liked, setLiked] = useLocalStorage(`like-${id}`, false)

  return (
    <Card ref={ref}>
      { !show
        ? null
        :
          <Fragment>
            <Link to={`/detail/${id}`}>
              <ImgWrapper>
                <Img src={src} alt=""/>
              </ImgWrapper>
            </Link>
            <Button onClick={() => setLiked(!liked)}>
              { !liked ? <MdFavoriteBorder size={`32px`}/> : <MdFavorite size={`32px`}/> } { likes }
            </Button>
          </Fragment>
      }
    </Card>
  )
}
