import { Gif, GiphyResponse } from '@models/index'

const GIPHY_BASE_URL = 'https://api.giphy.com/v1/gifs'
const GIPHY_TRENDING_URL = `${GIPHY_BASE_URL}/trending`
const GIPHY_SEARCH_URL = `${GIPHY_BASE_URL}/search`

const GIPHY_API_KEY = import.meta.env.VITE_GIPHY_API_KEY

async function fetchGifs(
  url: string,
  params?: Record<string, string>
): Promise<Gif[]> {
  try {
    const fullUrl = new URL(url)
    fullUrl.search = new URLSearchParams({
      api_key: GIPHY_API_KEY,
      ...params,
    }).toString()

    const response = await fetch(fullUrl.toString())

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

export async function getTrendingGifs({
  limit = 24,
  offset = 0,
}: {
  limit?: number
  offset?: number
} = {}): Promise<Gif[]> {
  return fetchGifs(GIPHY_TRENDING_URL, {
    limit: String(limit),
    offset: String(offset),
  })
}

export async function getGif(id: string): Promise<Gif> {
  try {
    const fullUrl = new URL(`${GIPHY_BASE_URL}/${id}`)
    fullUrl.search = new URLSearchParams({
      api_key: GIPHY_API_KEY,
    }).toString()

    const response = await fetch(fullUrl.toString())

    if (!response.ok) {
      throw new Error(`Error fetching gifs: ${response.statusText}`)
    }

    const { data }: { data: Gif } = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching gifs:', error)
    throw error
  }
}

export async function searchGifs({
  query,
  limit = 24,
  offset = 0,
}: {
  query: string
  limit?: number
  offset?: number
}): Promise<Gif[]> {
  return fetchGifs(GIPHY_SEARCH_URL, {
    q: query,
    limit: String(limit),
    offset: String(offset),
  })
}
