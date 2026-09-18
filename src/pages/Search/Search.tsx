import { useEffect } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { useFetchGifs } from '@hooks/useGiphy'
import { Card, Grid, Loading } from '@components/index'
import { useInfiniteScroll } from '@hooks/useInfiniteScroll'

export function Search() {
  const { gifsList: gifs, loading, hasMore, search } = useFetchGifs()
  const location = useLocation()
  const params = new URLSearchParams(location.search).get('q')

  useEffect(() => {
    if (params) search(params)
  }, [])

  const lastGifRef = useInfiniteScroll(() => search(params!), hasMore, loading)

  return (
    <>
      <Grid>
        {gifs.map((gif, index) => (
          <Link
            key={gif.id}
            to={`${gif.id}`}
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
