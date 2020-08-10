import React from 'react'
import { withLayout } from '../hoc/withLayout'

const User = () => {
  return (
    <h1>User pages</h1>
  )
}

export default withLayout(User, {
  categoryList: false
})
