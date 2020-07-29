import React from 'react'
import { GlobalStyles } from './GlobalStyles'
import { CategoriesList } from './components/categories-list'
import { PhotoCardsList } from './components/photo-cards-list'
import { Logo } from './components/logo'

const App = () => {
  return (
    <>
      <GlobalStyles />
      <header>
        <Logo />
      </header>
      <main>
        <CategoriesList />
        <PhotoCardsList />
      </main>
    </>
  )
}

export default App
