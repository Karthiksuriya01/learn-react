import React from 'react';
import { useCounter } from './store';
import Increament from './Components/increament';
import Decreament from './Components/decreament';


const App = () => {
  const {count, increament, decreament} = useCounter()

  return (
    <div>
      <h1>Count : {count}</h1>
      <Increament />
      <Decreament />
    </div>
  );
}

export default App;
