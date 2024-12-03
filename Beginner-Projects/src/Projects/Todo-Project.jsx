import React, { useState } from 'react';

const TOdoproject = () => {

  const [todos, setTodos] = useState([])
  const [inputValue, setInputValue] = useState('')

  const handlesubmit = (e) =>
  {
     e.preventDefault()
     setTodos([...todos, inputValue])
     setInputValue('')
    
  }
  function handleChange(e)
  {
     setInputValue(e.target.value)
  }

  const handleDelete = (index) => {
    const newTodos = todos.filter((_, i) => i !== index)
    setTodos(newTodos)
  }

  return (
    <div>
      <form onSubmit={handlesubmit}>
        <input type="text" value={inputValue} onChange={handleChange} placeholder='add new todo'/>
        <button type='submit'>Add</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TOdoproject;
