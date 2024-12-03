import React, { useRef } from 'react';

const FocusInput = () => {

    const inputRef = useRef(null)
    const focus = () => 
    {
        if(inputRef.current) 
        {
              inputRef.current.focus()
        }
        inputRef.value = "surya"
    }
    
  return (
    <div>
      <input type="text" ref={inputRef} placeholder='Click the button to focus' />
      <button onClick={focus}>click to focus input</button>
    </div>
  );
}

export default FocusInput;

// logic is simple in javascript we use document.getElementById('')
// But here we use useRef Hook to manipulate the DOM