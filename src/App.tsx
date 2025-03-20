import { useFetchGifs } from '@hooks/useGiphy'
import { Grid } from './components'

function App() {
  const { data: gifs, loading } = useFetchGifs()
  return (
    <>
      <h1>Trending Gifs</h1>
      {loading && <p>Loading...</p>}
      <Grid>
        {gifs.map((gif) => (
          <img key={gif.id} src={gif.images.original.webp} alt={gif.title} />
        ))}
      </Grid>
    </>
  )
}

export default App
