import React, {useState, useEffect} from 'react'

function IntervalHookCounter() {

  const [count, setCount] = useState(0)

  const tick = () => {
    setCount(prevCount  =>  prevCount + 1)
  }

  useEffect(() => {
    const inverval = setInterval(tick, 1000)

    return () => {
      clearInterval(inverval)
    }
  }, [])

  return (
    <div>
      <h2>{count}</h2>
    </div>
  )
}

export default IntervalHookCounter
