import { Route, Routes } from 'react-router-dom'
import { GifModal } from '@components/index'
import { Home } from '@pages/Home'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/gif/:id" element={<GifModal />} />
      </Route>
    </Routes>
  )
}

export default App
