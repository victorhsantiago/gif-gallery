import { useState } from 'react'
import { Gif } from '@models/index'
import { getGif, getTrendingGifs, searchGifs } from '@services/api'
import { usePagination } from './usePagination'

export function useFetchGifs() {
  const [gifsList, setGifsList] = useState<Gif[]>([])
  const [gif, setGif] = useState<Gif | undefined>(undefined)
  const [loading, setLoading] = useState(false)
  const { offset, hasMore, resetPagination, updatePagination } = usePagination()

  const fetchGifs = async (reset = false) => {
    if (loading) return
    setLoading(true)

    try {
      const response = await getTrendingGifs({
        limit: 24,
        offset: reset ? 0 : offset,
      })
      setGifsList((prev) => (reset ? response : [...prev, ...response]))

      if (reset) resetPagination()

      updatePagination(response.length)
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

  const search = async (query: string, reset = false) => {
    if (loading) return
    setLoading(true)

    try {
      const response = await searchGifs({ query, limit: 24, offset: 0 })
      setGifsList((prev) => (reset ? response : [...prev, ...response]))

      if (reset) resetPagination()

      updatePagination(response.length)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return { gif, gifsList, loading, hasMore, fetchGifs, fetchGif, search }
}
