import React, { useEffect, useState } from 'react'
import { NavBar } from '@/components'
import request from '@/utils/request'
const FetchPage = () => {
  const [data, setData] = useState()
  useEffect(() => {
    init()
  }, [])
  function init() {
    request('https://jsonplaceholder.typicode.com/todos/1')
      .then(res => {
        console.log(res)
        setData(res)
      })
      .catch(error => {
        console.log(error)
      })
  }
  return (
    <>
      <NavBar>ofetch</NavBar>
      <h1>{data?.title}</h1>
      {/* {data?.map(item => (
        <div key={item.businessCode} className="bg-white my-2.5 p-4">
          <div className="font-500 text-lg">{item.businessName}</div>
          <hr className="border-t" />
          <div className="space-x-2">{item.reportLabel?.split(',')?.map(t => <Tag key={t}>{t}</Tag>)}</div>
        </div>
      ))} */}
    </>
  )
}

export default FetchPage
