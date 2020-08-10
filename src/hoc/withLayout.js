import React from 'react'
import { Layout } from '../components/layout/Layout'
import { CategoriesList } from '../components/categories-list'

export const withLayout = (WrappedComponent, config= {
  categoryList: true
}) => (props) => {
  return (
    <Layout>
      { config.categoryList && <CategoriesList />}
      <WrappedComponent {...props}/>
    </Layout>
  )
}

