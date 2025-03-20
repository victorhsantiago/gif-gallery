import { useFetchGifs } from '@hooks/useGiphy'

function App() {
  const { data, loading } = useFetchGifs()
  return (
    <>
      <h1>Trending Gifs</h1>
      {loading && <p>Loading...</p>}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  )
}

export default App
