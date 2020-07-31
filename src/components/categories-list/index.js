import React, { useState, useEffect } from 'react';
import { List, Item} from './styles'
import { Category } from '../category'
import { useWindowScroll } from '../../hooks/useWindowScroll'
import { useCategoriesData } from '../../hooks/useCategoriesData'

export const CategoriesList = () => {
  const { scrollY } = useWindowScroll()
  const [showFixed, setShowFixed] = useState(false)
  const { categories, loading } = useCategoriesData()

  useEffect(() => {
    const newShowFixed = scrollY > 200;
    (showFixed !== newShowFixed) && setShowFixed(newShowFixed)
  }, [scrollY]);

  const renderList = (fixed) => (
    <section>
      <List fixed={fixed}>
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
