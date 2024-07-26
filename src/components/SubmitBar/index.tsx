import React from 'react'
import { SafeArea } from 'antd-mobile'
interface IProps {
  children: React.ReactNode
  className?: string
  fixed?: boolean
  height?: string
  style?: React.CSSProperties
}
export default function SubmitBar(props: IProps) {
  const { children, className = '', height = '', fixed = true, style = {} } = props

  return (
    <>
      <div className={`bg-white ${fixed ? 'fixed w-full bottom-0' : ''} ${className}`}>
        <div style={{ height, ...style }}>{children}</div>
        <SafeArea position="bottom" />
      </div>
      <div className={className}>
        <div style={{ height }}></div>
        <SafeArea position="bottom" />
      </div>
    </>
  )
}
