import { useQuery } from '@apollo/client'
import { GET_CATEGORIES } from '../queries/categories'

export function useCategoriesData() {
  const { data = { categories: [] }, error, loading } = useQuery(GET_CATEGORIES)

  return { categories: data.categories, loading };
}
