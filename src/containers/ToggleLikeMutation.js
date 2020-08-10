import React, { Fragment } from 'react'
import { useMutation } from '@apollo/client'
import { LIKE_ANONYMOUS_PHOTO } from '../queries/likes'

export const ToggleLikeMutation = ({ render }) => {
  const [toggleLike] = useMutation(LIKE_ANONYMOUS_PHOTO)
  return (
    <Fragment>
      { render(toggleLike) }
    </Fragment>
  )
}
