import React, { useEffect, useState } from 'react';

const Data_fetch = () => {

    const [data,setData] = useState([])
    useEffect(() =>
    {
        async function getData()
        {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts')
            const response = await res.json()
            setData(response)
        }
        getData();

    },[]) // empty array means that this function run only once
    
  
    return (


    <div>
        {
        
            data.map((todo) => 
            (
                <dl key={todo.id}>
                    <dt>Title -- {todo.title}</dt>
                    <dd>Body -- {todo.body}</dd>
                </dl>
            )
        
        )}
        
    </div>
  );
}

export default Data_fetch;
