import { useState } from 'react'

export function usePagination(initialOffset = 0, limit = 24) {
  const [offset, setOffset] = useState(initialOffset)
  const [hasMore, setHasMore] = useState(true)

  const updatePagination = (newDataLength: number) => {
    setOffset((prev) => prev + limit)
    setHasMore(newDataLength > 0)
  }

  const resetPagination = () => {
    setOffset(initialOffset)
    setHasMore(true)
  }

  return { offset, hasMore, resetPagination, updatePagination }
}
