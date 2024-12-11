import React from 'react';

const Keypad = ({input,updateInput }) => {
    const handleClick = (value) => {
        updateInput(input + value);
    }
    const clearfunc = () =>
    {
        updateInput('')
    }
    const logicpart = () =>
    {
        const output = eval(input)
        updateInput(output)
    }
  return (
    <div>
      <div className="row1">
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("/")}>/</button>
      </div>
      <div className="row2">
        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("-")}>-</button>
      </div>
      <div className="row3">
        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("+")}>+</button>
      </div>
      <div className="row4">
        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={() => clearfunc("C")}>C</button>
        <button onClick={() => logicpart("=")}>=</button>
      </div>
    </div>
  )
}

export default Keypad;
