import { useFetchGifs } from '@hooks/useGiphy'
import { Card, Grid } from '@components/index'
import { Link, Outlet } from 'react-router-dom'
import { useEffect } from 'react'

function Home() {
  const { data: gifs, fetchGifs, loading } = useFetchGifs()

  useEffect(() => {
    fetchGifs()
  }, [])
  return (
    <>
      <h1>Trending Gifs</h1>
      {loading && <p>Loading...</p>}
      <Grid>
        {gifs.map((gif) => (
          <Link key={gif.id} to={`/gif/${gif.id}`}>
            <Card imageUrl={gif.images.original.webp} title={gif.title} />
          </Link>
        ))}
      </Grid>

      <Outlet context={{ gifs }} />
    </>
  )
}

export default Home
