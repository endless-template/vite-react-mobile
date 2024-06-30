import React from 'react'
import { ErrorBlock } from 'antd-mobile'
import Catch from './boundary'

// import { Button } from 'antd-mobile';
/**
 * 包裹组件，在渲染错误的时候显示
 * <ErrorBoundary>
 *    <RError />
 * </ErrorBoundary>
 */
interface Props {
  children: React.ReactNode
}

const ErrorBoundary = Catch((props: Props, error?: Error) => {
  if (error) {
    return (
      <div className="text-center">
        <ErrorBlock fullPage title="页面出错误了" description="数据错误或页面渲染出错" />
        <div className="mt-2">
          <a
            className="text-primary hover:!underline "
            onClick={() => window.location.replace(document.referrer)}
          >
            返回上一页
          </a>
        </div>
        <div className="bg-danger/30 dark:bg-info/30 m-5 text-center inline-block p-2 rounded">
          <p>{error.message}</p>
        </div>
      </div>
    )
  }
  return <>{props.children}</>
})

export default ErrorBoundary
