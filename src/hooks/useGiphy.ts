import { useState } from 'react'
import { Gif } from '@models/index'
import { getGif, getTrendingGifs } from '@services/api'

export function useFetchGifs() {
  const [gifsList, setData] = useState<Gif[]>([])
  const [gif, setGif] = useState<Gif | null>(null)
  const [loading, setLoading] = useState(true)

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

  const fetchGif = async (id: string) => {
    setLoading(true)
    try {
      const response = await getGif(id)
      setGif(response)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return { data: gifsList, loading, fetchGifs, fetchGif, gif }
}
