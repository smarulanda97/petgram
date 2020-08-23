import React from 'react'
import { Layout } from '../components/layout'
import { CategoriesList } from '../components/categories-list'

export const withLayout = (WrappedComponent, config= {
  categoryList: false
}) => (props) => {
  return (
    <Layout {...config}>
      { config.categoryList && <CategoriesList />}
      <WrappedComponent {...props}/>
    </Layout>
  )
}

