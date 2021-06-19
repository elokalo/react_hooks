import React, {useState, useEffect} from 'react'

function HookMouse() {

  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  const logMousePosition = e => {
    console.log('mouse event')
    setX(e.clientX)
    setY(e.clientY)
  }

  useEffect(() => {
    console.log('useEffect called')
    window.addEventListener('mousemove', logMousePosition)


    /**The representation of lifecycle method componentWillUnmount 
     * is return a callback function on the callback function of useEffect Hook
    */
    return () => {
      console.log('component unmonting code')
      window.removeEventListener('mousemove', logMousePosition)
    }
  }, [])

  return (
    <div>
      <p>Hooks</p>
      <p>X - {x}</p>
      <p>Y - {y}</p>
    </div>
  )
}

export default HookMouse
