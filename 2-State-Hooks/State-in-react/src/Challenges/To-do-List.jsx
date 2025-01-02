import { useState } from 'react';

const Todolist = () => {

    const [todos, setTodos] = useState([])
    const [inputValue, setInputValue] = useState("")

    const handlesubmit = e => 
    {
        e.preventDefault()
        if(inputValue.trim())
        {
            setTodos([...todos, inputValue])
        }
        setInputValue("")
    }

    const handlechange = (e) =>
    {
        setInputValue(e.target.value)
    }

    const handleDelete = (index) => {
        setTodos(todos.filter((_, i) => i !== index))
    }

    return (
        <div>
            <h1>To do list</h1>
            <form onSubmit={handlesubmit}>
                <input type="text" value = {inputValue} onChange={handlechange} placeholder='Add a new Todo'/>
                <button type='submit'>Add</button>
            </form>

            <ul>
                {todos.map((todo, index) => (
                    <li key={`todo-${index}`}>
                        {todo}
                        <button onClick={() => handleDelete(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Todolist;
