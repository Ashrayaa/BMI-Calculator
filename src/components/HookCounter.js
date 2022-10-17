import { useState } from "react"
import React from 'react'

function HookCounter() {
 const[count, setCount]  = useState(0) 
//  The above syntax is called array-destructuring
//count is the state variable
//setCount is the method
  return (
    <div>
        <button onClick={() => setCount(count+1)}>
            Count {count}
        </button>
    </div>
  )
}

export default HookCounter