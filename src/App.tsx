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
document.cookie =
  'TokenFM=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJBQ0NFU1NfVE9LRU4iLCJjbGllbnRJZCI6IjE0ODgwYTExMzliMDQzYmFhNTU1ZjRkMTI2NzNiMWQ3Iiwic2NvcGUiOiJyLXN0YWZmIiwidG9rZW4iOiIxMzgxMDI5IiwiaWF0IjoxNzIxODcwNTU5LCJleHAiOjE3MjI0NzUzNTl9.n3E9m81Oe2_pFusEXKkKhDJNpUpVQeyk02yNPcXhKSs'
function App() {
  const router = createHashRouter(allRoutes)
  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  )
}

export default App
