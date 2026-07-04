import { useState } from 'react'
import './App.css'

function App() {
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
    </div>
  )
}

export default App
