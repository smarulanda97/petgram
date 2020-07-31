import React, { useState, useEffect } from 'react';
import { List, Item} from './styles'
import { Category } from '../category'
import { useWindowScroll } from '../../hooks/useWindowScroll'

export const CategoriesList = () => {
  const { scrollY } = useWindowScroll()
  const [categories, setCategories] = useState([])
  const [showFixed, setShowFixed] = useState(false)

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await fetch(`https://petgram-api-smarulanda97.vercel.app/categories`)
        const data = await response.json()
        setCategories(data)
      } catch (e) {
        console.log(e)
      }
    }
    getCategories()
  }, [])

  useEffect(() => {
    const newShowFixed = scrollY > 200;
    (showFixed !== newShowFixed) && setShowFixed(newShowFixed)
  }, [scrollY]);

  const renderList = (fixed) => (
    <section>
      <List className={fixed ? 'fixed' : ''}>
        {categories.map((category) => (
          <Item key={category.id}>
            <Category {...category}/>
          </Item>
        ))}
      </List>
    </section>
  )

  return (
    <>
      { renderList() }
      { showFixed && renderList(true) }
    </>
  )
}
