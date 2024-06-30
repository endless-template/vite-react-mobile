import React from 'react'
import { Loading as Spin } from 'antd-mobile'

function Loading() {
  return (
    <div className="h-[100px] leading-[100px] text-center ">
      <Spin />
    </div>
  )
}

export default Loading
