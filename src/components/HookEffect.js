import React, {useState, useEffect} from 'react'

function HookEffect() {

const [count, setCount] = useState(0)
const [name, setName] = useState('')


/**The lifecycle function 'useEffect' executed every render time
 * useEffect run on initial render and every update render
*/
useEffect(() => {
  console.log('useEffect - updating document title')
  document.title = `You clicked ${count} times`
}, [count])

  return (
    <div>
       <input
        type='text'
        value={name}
        onChange={e => {
          setName(e.target.value)
        }}
      />
      <button onClick={() => setCount(count + 1)}>
        Click {count} times
      </button>      
    </div>
  )
}

export default HookEffect
