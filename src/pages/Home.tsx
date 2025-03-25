import { useFetchGifs } from '@hooks/useGiphy'
import { Card, Grid, Header } from '@components/index'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

export function Home() {
  const { gifsList: gifs, fetchGifs, search } = useFetchGifs()
  const location = useLocation()

  useEffect(() => {
    fetchGifs()
  }, [])
  return (
    <>
      <Header onSearch={search} onClearSearch={fetchGifs} />
      <Grid>
        {gifs.map((gif) => (
          <Link
            key={gif.id}
            to={`/gif/${gif.id}`}
            state={{
              backgroundLocation: location,
              focusId: `gif-link-${gif.id}`,
            }}
            id={`gif-link-${gif.id}`}
          >
            <Card imageUrl={gif.images.original.webp} title={gif.title} />
          </Link>
        ))}
      </Grid>

      <Outlet />
    </>
  )
}
