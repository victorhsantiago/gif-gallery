import { useCallback, useEffect, useRef } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { useFetchGifs } from '@hooks/useGiphy'
import { Card, Grid, Header, Loading } from '@components/index'

export function Home() {
  const { gifsList: gifs, fetchGifs, search, loading, hasMore } = useFetchGifs()
  const location = useLocation()
  const observer = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    fetchGifs(true)
  }, [])

  const lastGifRef = useCallback(
    (node: HTMLAnchorElement | null) => {
      if (loading) return
      if (observer.current) observer.current.disconnect()
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          fetchGifs()
        }
      })
      if (node) observer.current.observe(node)
    },
    [loading, hasMore, fetchGifs]
  )

  return (
    <>
      <Header onSearch={search} onClearSearch={fetchGifs} />
      <Grid>
        {gifs.map((gif, index) => (
          <Link
            key={gif.id}
            to={`/gif/${gif.id}`}
            state={{
              backgroundLocation: location,
              focusId: `gif-link-${gif.id}`,
            }}
            id={`gif-link-${gif.id}`}
            ref={index === gifs.length - 1 ? lastGifRef : null}
          >
            <Card imageUrl={gif.images.original.webp} title={gif.title} />
          </Link>
        ))}
      </Grid>

      {loading && <Loading />}

      <Outlet />
    </>
  )
}
