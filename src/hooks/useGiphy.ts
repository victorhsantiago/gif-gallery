import { useState } from 'react'
import { Gif } from '@models/index'
import { getGif, getTrendingGifs, searchGifs } from '@services/api'

export function useFetchGifs() {
  const [gifsList, setGifsList] = useState<Gif[]>([])
  const [gif, setGif] = useState<Gif | undefined>(undefined)

  const [loading, setLoading] = useState(true)

  const fetchGifs = async () => {
    setLoading(true)
    try {
      const response = await getTrendingGifs()
      setGifsList(response)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  const fetchGif = async (id: string) => {
    setLoading(true)
    try {
      const data = await getGif(id)
      setGif(data)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  const search = async (query: string) => {
    setLoading(true)
    try {
      const response = await searchGifs({ query })
      setGifsList(response)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return { gif, gifsList, loading, fetchGifs, fetchGif, search }
}
