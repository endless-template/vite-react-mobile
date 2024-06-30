import { Suspense } from 'react'
import { createHashRouter, RouteObject, RouterProvider } from 'react-router-dom'
import Root from './pages/_app'
import { Loading } from './components'

import routes from 'virtual:generated-pages-react'

const allRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Root />,
    children: routes
  }
]
function App() {
  const router = createHashRouter(allRoutes)
  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  )
}

export default App
