import React, { useEffect, useState } from 'react';

const Without_T_Q = () => {

  // ------- Without TanStackQuery -------
  // Here you see we have to define states for loading, error and data
  // in real world we have to define a lot of these type of states 
  // and also have to write a lot of code to handle these states
  // but with the help of TanStackQuery we can handle lot of these states easily
  // see the exaple of tanstack query in src/components/withtanstackquery.tsx
  const [id,setId] = useState(1)
  const [data,setdata] = useState(null)
  const [loading,setLoading] = useState(true)
  const [error,setError] = useState(null)
  
  useEffect(() => {
    // let rc = false
    setLoading(true)
    setError(null)
    const fetchData = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`)
        if(!response.ok){
          throw new Error('Something went wrong')
        }
        const result = await response.json()
        setdata(result)
       
    }
    catch (error) {
      setError(error)
    }
    finally{
      setLoading(false)
    }
  }

  fetchData()
},[id])

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {data && <p className='text-emerald-50'>{JSON.stringify(data)}</p>}
      <button onClick={() => setId((prevId) => prevId+1)}>Next</button>
    </div>
  );
}

export default Without_T_Q;
