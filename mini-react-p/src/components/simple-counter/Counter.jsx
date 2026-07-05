import { useState } from 'react'


function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h1>Count: {count}</h1>

      <button onClick={()=>{if(count > 0) setCount(count - 1)}}>
        Decrease
      </button>

      <button
        onClick={() => setCount(count + 1)}
        style={{ marginLeft: "10px" }}
      >
        Increase
      </button>
      <button
        onClick={()=>{if(count >= 5) setCount(count - 5)}}
        style={{ marginLeft: "10px" }}
      >
        Decrease -5
      </button>
      <button
        onClick={() => setCount(count + 5)}
        style={{ marginLeft: "10px" }}
      >
        Increase +5
      </button>
      <button
        onClick={() => setCount(0)}
        style={{ marginLeft: "10px" }}
      >
        Reset
      </button>
    </div>
  )
}

export default Counter
