import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles.css';

const Meals = () => {

    const [items,setMeals] = useState([])
    useEffect(() => 
    {
        axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood").then(
            (res) => {console.log(res.data.meals)
                setMeals(res.data.meals); 
            }
        ).catch(err => {console.log(err)})
    },[]);

  return (
    <div>
           <h1>hello</h1>   
           {console.log('124')}
    </div>
  );
}

export default Meals;
