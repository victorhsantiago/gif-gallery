import { useFetchGifs } from '@hooks/useGiphy'
import { Card, Grid } from '@components/index'

function Home() {
  const { data: gifs, loading } = useFetchGifs()
  return (
    <>
      <h1>Trending Gifs</h1>
      {loading && <p>Loading...</p>}
      <Grid>
        {gifs.map((gif) => (
          <Card
            key={gif.id}
            imageUrl={gif.images.original.webp}
            title={gif.title}
          />
        ))}
      </Grid>
    </>
  )
}

export default Home
