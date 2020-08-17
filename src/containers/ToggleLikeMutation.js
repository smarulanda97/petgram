import React, { Fragment } from 'react'
import { useMutation } from '@apollo/client'
import { LIKE_PHOTO } from '../queries/likes'

export const ToggleLikeMutation = ({ render }) => {
  const [toggleLike] = useMutation(LIKE_PHOTO)
  return (
    <Fragment>
      { render(toggleLike) }
    </Fragment>
  )
}
