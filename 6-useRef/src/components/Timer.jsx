import { useEffect, useState } from 'react';
import { useRef } from 'react';


const Timer = () => {

    const [count, setCount] = useState(0)
    const intervalRef = useRef(null);
    useEffect(()=>
    {
        intervalRef.current = setInterval(()=>
        {
            setCount((prevCount) => prevCount + 1);
        }, 1000)

        return () => 
        {
            clearInterval(intervalRef.current)
        }
    },[])

  return (
    <div>
      <h1>Timer : {count} </h1>
      <button onClick={() => clearInterval(intervalRef.current)}>Stop</button>
    </div>
  );
}

export default Timer;
