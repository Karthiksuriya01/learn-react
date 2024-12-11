import React, { useState } from 'react';
import Inputfield from './inputfield';
import Keypad from './keypad';
import './styles.css'

const Main = () => {
    const [input, updateInput] = useState('');
  return (
    <div>
      <Inputfield value = {input}/>
      <Keypad input ={input} updateInput = {updateInput} />
    </div>
  );
}

export default Main;
