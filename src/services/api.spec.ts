import { Mock } from 'vitest'
import { getGif, getTrendingGifs, searchGifs } from './api'
import { Gif, GiphyResponse } from '@models/index'

const mockGif: Gif = {
  id: '1',
  title: 'Sample Gif',
  images: {
    original: {
      webp: 'https://via.placeholder.com/150.webp',
    },
  },
} as Gif

const mockGiphyResponse: GiphyResponse = {
  data: [mockGif],
  meta: {
    status: 200,
    msg: 'OK',
    response_id: '12345',
  },
  pagination: {
    total_count: 1,
    count: 1,
    offset: 0,
  },
}

global.fetch = vi.fn()

describe('API Service', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should fetch trending gifs', async () => {
    ;(fetch as Mock).mockResolvedValue({
      ok: true,
      json: async () => mockGiphyResponse,
    })

    const gifs = await getTrendingGifs()
    expect(gifs).toEqual([mockGif])
    expect(fetch).toHaveBeenCalledWith(
      expect.stringContaining('https://api.giphy.com/v1/gifs/trending')
    )
  })

  it('should fetch a single gif by id', async () => {
    ;(fetch as Mock).mockResolvedValue({
      ok: true,
      json: async () => ({ data: mockGif }),
    })

    const gif = await getGif('1')
    expect(gif).toEqual(mockGif)
    expect(fetch).toHaveBeenCalledWith(
      expect.stringContaining('https://api.giphy.com/v1/gifs/1')
    )
  })

  it('should search gifs by query', async () => {
    ;(fetch as Mock).mockResolvedValue({
      ok: true,
      json: async () => mockGiphyResponse,
    })

    const gifs = await searchGifs({ query: 'cats' })
    expect(gifs).toEqual([mockGif])
    expect(fetch).toHaveBeenCalledWith(
      expect.stringContaining('https://api.giphy.com/v1/gifs/search')
    )
  })

  it('should throw an error if the fetch fails', async () => {
    ;(fetch as Mock).mockResolvedValue({
      ok: false,
      statusText: 'Not Found',
    })

    await expect(getTrendingGifs()).rejects.toThrow(
      'Error fetching gifs: Not Found'
    )
  })
})
