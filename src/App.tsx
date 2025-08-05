import * as React from 'react'
import { Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { createHashRouter, RouteObject, RouterProvider } from 'react-router'
import { unstableSetRender } from 'antd-mobile/es'
import Root from './pages/_app'
import { Loading } from './components'

import routes from 'virtual:generated-pages-react'

type RenderType = Parameters<typeof unstableSetRender>[0]
type ContainerType = Parameters<RenderType>[1] & {
  _reactRoot?: ReturnType<typeof createRoot>
}

unstableSetRender((node: React.ReactNode, container: ContainerType) => {
  container._reactRoot ||= createRoot(container)
  const root: ReturnType<typeof createRoot> = container._reactRoot
  root.render(node)

  return () =>
    new Promise<void>(resolve => {
      setTimeout(() => {
        root.unmount()
        resolve()
      }, 0)
    })
})

const allRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Root />,
    children: routes,
  },
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
