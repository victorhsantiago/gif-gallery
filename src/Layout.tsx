import Home from '@pages/Home'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div style={{ position: 'relative' }}>
      <Home />
      <Outlet />
    </div>
  )
}

export default Layout
