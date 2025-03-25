import { Mock } from 'vitest'
import { renderHook, act, waitFor } from '@testing-library/react'
import { getGif, getTrendingGifs, searchGifs } from '@services/api'
import { Gif } from '@models/index'
import { useFetchGifs } from './useGiphy'

vi.mock('@services/api', () => ({
  getGif: vi.fn(),
  getTrendingGifs: vi.fn(),
  searchGifs: vi.fn(),
}))

describe('useFetchGifs Hook', () => {
  const mockGif: Gif = {
    id: '1',
    title: 'Sample Gif',
    images: {
      original: {
        webp: 'https://via.placeholder.com/150.webp',
      },
    },
  } as Gif

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should fetch trending gifs', async () => {
    ;(getTrendingGifs as Mock).mockResolvedValue([mockGif])

    const { result } = renderHook(() => useFetchGifs())

    act(() => {
      result.current.fetchGifs()
    })

    await waitFor(() => {
      expect(result.current.gifsList).toEqual([mockGif])
      expect(result.current.loading).toBe(false)
    })
  })

  it('should fetch a single gif by id', async () => {
    ;(getGif as Mock).mockResolvedValue(mockGif)

    const { result } = renderHook(() => useFetchGifs())

    act(() => {
      result.current.fetchGif('1')
    })

    await waitFor(() => {
      expect(result.current.gif).toEqual(mockGif)
      expect(result.current.loading).toBe(false)
    })
  })

  it('should search gifs by query', async () => {
    ;(searchGifs as Mock).mockResolvedValue([mockGif])

    const { result } = renderHook(() => useFetchGifs())

    act(() => {
      result.current.search('cats')
    })

    await waitFor(() => {
      expect(result.current.gifsList).toEqual([mockGif])
      expect(result.current.loading).toBe(false)
    })
  })
})
