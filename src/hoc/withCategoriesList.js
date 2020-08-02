import React from 'react'
import { CategoriesList } from '../components/categories-list'

export const withCategoriesList = (WrappedComponent) => (config = {}) => () => {
  return (
    <>
      <CategoriesList/>
      <WrappedComponent/>
    </>
  )
}
