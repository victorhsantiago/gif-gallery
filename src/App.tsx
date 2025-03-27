import { Outlet, useNavigate } from 'react-router-dom'
import { Header } from '@components/index'

function App() {
  const navigate = useNavigate()

  function onSearch(query: string) {
    navigate(`/search?q=${query}`)
  }

  function onClearSearch() {
    navigate('/')
  }

  return (
    <>
      <Header onSearch={onSearch} onClearSearch={onClearSearch} />

      <Outlet />
    </>
  )
}

export default App
