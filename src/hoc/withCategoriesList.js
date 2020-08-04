import React from 'react'
import { CategoriesList } from '../components/categories-list'

export const withCategoriesList = (WrappedComponent) => (props) => () => {
  return (
    <>
      <CategoriesList/>
      <WrappedComponent/>
    </>
  )
}
