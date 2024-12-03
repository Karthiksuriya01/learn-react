import React from 'react';
import { useState } from 'react';
export default function Counter() {
  
  const [count,setCount] = useState(0);

  const increament = () => setCount(count + 1)
  
  const decreament = () => setCount(count - 1)
  
  return (
    <div>
     <h1>Counter using Usestate Hooks</h1>
     
     <button onClick={increament}>+</button>
     <h1>{count}</h1>
     <button onClick={decreament}>-</button>
    </div>
  );
}
