import { useFetchGifs } from '@hooks/useGiphy'
import { Card, Grid } from '@components/index'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

function Home() {
  const { data: gifs, fetchGifs } = useFetchGifs()
  const location = useLocation()

  useEffect(() => {
    fetchGifs()
  }, [])
  return (
    <>
      <h1>Trending Gifs</h1>
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

      <Outlet context={{ gifs }} />
    </>
  )
}

export default Home
