import React from 'react';
import FocusInput from './components/focusInput';
import Timer from './components/Timer';
const App = () => {
  return (
    <div>
       {/* <FocusInput /> */}
       <Timer />
    </div>
   
  );
}

export default App;

// logic is simple in javascript we use document.getElementById('')
// But here we use useRef Hook to manipulate the DOM