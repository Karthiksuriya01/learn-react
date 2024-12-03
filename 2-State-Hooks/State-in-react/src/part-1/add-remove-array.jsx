import React from 'react';
import { useState } from 'react';

export default function Example() {
   
  const [friends, setFriends] = useState(['anirudh','chaitanya','nuthan']);  // intialise friends = ['anirudh','chaitanya','nuthan']

  const Addfriend = () => setFriends([...friends, 'saddam'])    // ...friends - get the existing the data from the array
  
  const Removefriend = () => setFriends(friends.filter(f => f != 'anirudh' ))
  return (
    <div>
      <h1>Add and Remove items in a Array using Usestate Hook</h1>
        {friends.map(f => <li key={Math.random()}>{f}</li>)}    
        
        <button onClick={Addfriend}>Add friend</button>
        <button onClick={Removefriend}>Remove friend</button>  
       </div>
  );
}
