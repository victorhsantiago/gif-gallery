import { Gif } from '@models/index'
import { getTrendingGifs } from '@services/api'
import { useEffect, useState } from 'react'

export function useFetchGifs() {
  const [data, setData] = useState<Gif[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchGifs = async () => {
      setLoading(true)
      try {
        const response = await getTrendingGifs()
        setData(response)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    fetchGifs()
  }, [])

  return { data, loading }
}
