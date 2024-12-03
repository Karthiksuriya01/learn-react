import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';


const useFetch = (url) => {

    const [data, setData] = useState(0)
    useEffect(()=>
    {
        fetch(url).then(res => res.json())
        .then(data => setData(data))
    },[])

    return [data] //return array of data
}

export default useFetch;
