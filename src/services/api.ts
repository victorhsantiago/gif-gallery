import { Gif, GiphyResponse } from '@models/index'

const GIPHY_BASE_URL = 'https://api.giphy.com/v1/gifs'
const GIPHY_TRENDING_URL = `${GIPHY_BASE_URL}/trending`
// const GIPHY_SEARCH_URL = `${GIPHY_BASE_URL}/search`

const GIPHY_API_KEY = import.meta.env.VITE_GIPHY_API_KEY

export async function getTrendingGifs({
  limit = 20,
  offset = 0,
}: {
  limit?: number
  offset?: number
} = {}): Promise<Gif[]> {
  try {
    const url = new URL(GIPHY_TRENDING_URL)
    url.search = new URLSearchParams({
      api_key: GIPHY_API_KEY,
      limit: String(limit),
      offset: String(offset),
    }).toString()

    const response = await fetch(url.toString())

    if (!response.ok) {
      throw new Error(`Error fetching gifs: ${response.statusText}`)
    }

    const data: GiphyResponse = await response.json()
    return data.data
  } catch (error) {
    console.error('Error fetching gifs:', error)
    throw error
  }
}

export async function getGif(id: string): Promise<Gif> {
  try {
    const url = new URL(`${GIPHY_BASE_URL}/${id}`)
    url.search = new URLSearchParams({
      api_key: GIPHY_API_KEY,
    }).toString()

    const response = await fetch(url.toString())

    if (!response.ok) {
      throw new Error(`Error fetching gif: ${response.statusText}`)
    }

    const { data }: { data: Gif } = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching gif:', error)
    throw error
  }
}
