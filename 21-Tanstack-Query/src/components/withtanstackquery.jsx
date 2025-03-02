import { useQuery } from '@tanstack/react-query';
import React from 'react';

const fetchdata = async () => 
    {
     const res = await fetch("https://fakestoreapi.com/products")
     if(!res.ok) throw new Error("Something went wrong")
     return res.json()
    }
const With_T_Q = () => {
    
   const {data,isLoading,error} =  useQuery({queryKey:["cart"],
    queryFn: fetchdata})
  
   if(isLoading)
         return <h1>Loading...</h1>
   if(error) return <h1>Error</h1>

  return (
    <div>
        <h1>With TanStack Query</h1>   
        <pre className='text-green'>{JSON.stringify(data,null,2)}</pre>
    </div>
  );
}

export default With_T_Q;
