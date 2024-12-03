import React, { useState } from 'react';
import { useEffect } from 'react';



function App() {

  const [value, setvlaue] = useState(0)
  const [something, setsomething] = useState(0)

  // useEffect(() =>  {console.log('call useEffect')},[value]
  // )
//now if "value" only useEffect is called

useEffect(() =>   // now useEffect func is called when you click the something button
  {
    console.log("hello")

  },[something]
  )                               

  const handlebutton = () =>
  {
    setvlaue(value + 1)
  }

  const handlesomething = () =>
  {
    setsomething(something + 1)
  }

  return (
    <div>
      <p>{value}</p>  
      <button onClick={handlebutton}>click me</button>
      <button onClick={handlesomething}>something button</button>
    </div>
  );
}

export default App;
