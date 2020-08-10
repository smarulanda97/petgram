import { useEffect, useState } from 'react'

export function useCategoriesData() {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await fetch(`https://petgram-api-smarulanda97.vercel.app/categories`)
        const data = await response.json()
        setCategories(data)
        setLoading(false)
      } catch (e) {
        setError(e);
      }
    }
    getCategories()
  }, [])

  return { categories, loading };
}
