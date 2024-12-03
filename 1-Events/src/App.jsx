import React from 'react';

const Button = () =>
{
  const OnclicEvent = () => console.log(Math.round(Math.random() * 10))
  return <button onClick={OnclicEvent}> CLICK ME</button>
}


export default function App() {
  return (
    <div>
      <Button />
    </div>
  );
}

// Read Readme file 