import React from 'react'
import PropTypes from 'prop-types'

import { Button } from './styles'

export const SubmitButton = ({ children, onClick, disabled }) => {
  return (
    <Button onClick={onClick} disabled={disabled}>
      { children }
    </Button>
  )
}

SubmitButton.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  disabled: PropTypes.bool.isRequired,
}
