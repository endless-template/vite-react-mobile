import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { ConfigProvider } from 'antd-mobile'
import { ErrorBoundary, Loading } from '@/components'

export default function Root() {
  return (
    <Suspense fallback={<Loading />}>
      <ErrorBoundary>
        <ConfigProvider
          navBar={{
            backIcon: backIcon()
          }}
          list={{
            arrowIcon: arrowIcon()
          }}
        >
          <Outlet />
        </ConfigProvider>
      </ErrorBoundary>
    </Suspense>
  )
}

function backIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.375rem"
      height="1.375rem"
      viewBox="0 0 24 24"
      fill="var(--adm-color-text)"
    >
      <path
        fillOpacity="0.85"
        d="M16.62 2.99a1.25 1.25 0 0 0-1.77 0L6.54 11.3a.996.996 0 0 0 0 1.41l8.31 8.31c.49.49 1.28.49 1.77 0s.49-1.28 0-1.77L9.38 12l7.25-7.25c.48-.48.48-1.28-.01-1.76"
        clipRule="evenodd"
      ></path>
    </svg>
  )
}

function arrowIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 8 24"
      fill="var(--adm-color-text)"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.85353 6.64643C9.65826 6.45118 9.34168 6.45119 9.14643 6.64647C8.97287 6.82004 8.9536 7.08947 9.08861 7.28433L9.14647 7.35357L13.793 11.999L9.14643 16.6465C8.97287 16.82 8.9536 17.0895 9.08861 17.2843L9.14647 17.3536C9.32004 17.5271 9.58947 17.5464 9.78433 17.4114L9.85357 17.3535L14.8536 12.353C15.0271 12.1794 15.0464 11.91 14.9114 11.7151L14.8535 11.6459L9.85353 6.64643Z"
        fillOpacity="0.5"
      />
    </svg>
  )
}
