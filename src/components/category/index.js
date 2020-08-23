import React from 'react';
import { Anchor, Image } from './styles'

export const Category = ({ cover, path, emoji = '?', id }) => {
  return (
    <Anchor to={`/photos/${id}`}>
      <Image src={cover} alt={'Category image'}/>
      {/*<span>{ emoji }</span>*/}
    </Anchor>
  )
}
