import { createBrowserRouter, RouteObject } from 'react-router-dom'
import { Home, Search } from './pages'
import { GifModal } from './components'
import App from './App'

const homeRoutes: RouteObject[] = [
  {
    path: '/',
    Component: Home,
    children: [
      {
        path: 'gif/:id',
        Component: GifModal,
      },
    ],
  },
]

const searchRoutes: RouteObject[] = [
  {
    path: '/search',
    Component: Search,
    children: [
      {
        path: ':id',
        Component: GifModal,
      },
    ],
  },
]

export const router = createBrowserRouter([
  {
    Component: App,
    children: [...homeRoutes, ...searchRoutes],
  },
])
