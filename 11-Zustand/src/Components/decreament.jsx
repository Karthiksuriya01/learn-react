import React from 'react';
import { useCounter } from '../store';

const Decreament = () => {
    const {decreamentCount} = useCounter()
      return (
    <button onClick={decreamentCount}>Decreament</button>
  );
}

export default Decreament;
