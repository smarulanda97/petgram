import React from 'react'
import { GlobalStyles } from './styles/GlobalStyles'
import { CategoriesList } from './components/categories-list'
import { Logo } from './components/logo'
import { PhotoCardsListContainer } from './containers/PhotoCardsListContainer'

const App = () => {
  return (
    <>
      <GlobalStyles />
      <header>
        <Logo />
      </header>
      <main>
        <CategoriesList />
        <PhotoCardsListContainer />
      </main>
    </>
  )
}

export default App
