import { Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import { GifModal } from '@components/index'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/gif/:id" element={<GifModal />} />
      </Route>
    </Routes>
  )
}

export default App
