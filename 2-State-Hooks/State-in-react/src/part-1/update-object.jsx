import React, { useState } from 'react';

export default function Update_object() {
    const [movies, Updatemovies] = useState({
        title: "Business Man",
        rating: 9
    })
//    method-1
//     const handleclicks = () => {
//         const copyMovies = {
//             ...movies,
//             rating: 10
//         }
//         Updatemovies(copyMovies)
//     }

//method-2
const handleclicks = () => {
    // const copyMovies = {
    //     ...movies,
    //     rating: 10
    // }
    Updatemovies({...movies,rating:5})
}
    
    return (
    <div>
      <h1>Update Objects using Usestate</h1>
      <h2>Title : {movies.title}</h2>
      <h2>Ratings : {movies.rating}</h2>

      <button onClick={handleclicks}>change ratings</button>
    </div>
  );
}
