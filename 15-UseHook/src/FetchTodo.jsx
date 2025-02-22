// import React from 'react';
import { use } from 'react'
const FetchTodo = () => {
    const fetchData = async () =>
    {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
        return response.json()
    }
    const data = use(fetchData())
  return (
    <div>{data.title}</div>
  )
    
}

export default FetchTodo;
