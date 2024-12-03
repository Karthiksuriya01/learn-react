import React, { useState } from 'react';

const Counterproject = () => {
    const [count,setCount] = useState(0)
    
    return (
        <div>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>Increament</button>
        <button onClick={() => setCount(count - 1)}>Decreament</button>

        </div>
  );
}

export default Counterproject;
