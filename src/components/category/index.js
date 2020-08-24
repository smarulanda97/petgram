import React from 'react';
import PropTypes from 'prop-types';
import { Anchor, Image } from './styles'

export const Category = ({ cover, emoji = '?', id }) => {
  return (
    <Anchor to={`/photos/${id}`}>
      <Image src={cover} alt={'Category image'}/>
      <span>{ emoji }</span>
    </Anchor>
  )
}

Category.propTypes = {
  id: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  emoji: PropTypes.node.isRequired,
}
