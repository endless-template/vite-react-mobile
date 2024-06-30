import { useState } from 'react'
import { Button } from 'antd-mobile'

const Hello = () => {
  console.log('hello')
  return <div>this is hello</div>
}

export default function ReactCompiler() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>React Compiler</h1>
      <Button color="primary" onClick={() => setCount(count + 1)}>
        {count}
      </Button>
      <Hello />
    </div>
  )
}
