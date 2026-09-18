import { act, renderHook } from '@testing-library/react'
import { usePagination } from './usePagination'

describe('usePagination Hook', () => {
  it('should return initial values', () => {
    const { result } = renderHook(() => usePagination())

    const { offset, hasMore } = result.current

    expect(offset).toBe(0)
    expect(hasMore).toBe(true)
  })

  it('should update pagination', () => {
    const { result } = renderHook(() => usePagination())

    act(() => {
      result.current.updatePagination(24)
    })

    expect(result.current.offset).toBe(24)
    expect(result.current.hasMore).toBe(true)
  })

  it('should reset pagination', () => {
    const { result } = renderHook(() => usePagination())

    act(() => {
      result.current.updatePagination(24)
      result.current.resetPagination()
    })

    expect(result.current.offset).toBe(0)
    expect(result.current.hasMore).toBe(true)
  })
})
