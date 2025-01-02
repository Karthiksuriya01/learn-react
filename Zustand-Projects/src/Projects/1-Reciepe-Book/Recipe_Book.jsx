import React from 'react';
import { useState } from 'react';
import { useStories } from './store/useStories';

const Recipe_Book = () => {

    const [name,setName] = useState()
    const [ingredients, setIngredients] = useState("")
    const [instructions, setInstructions] = useState("")
    const [recipes, addrecipe, removerecipe] = useStories("")
    const [edit,setEdit] = useState("null")

    const handleAdd = () =>
    {

    }

  return (
    <div>
        <h1>Recipe Book</h1>
      <div className="form">
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
        <input type="text" value={ingredients} onChange={e => setIngredients(e.target.value)} />
        <input type="text" value={instructions} onChange={e => setInstructions(e.target.value)} />
      </div>
      <div className="buttons">
        {
        edit ? (<>
        
            <button onClick={handleUpdate}>Update</button>
            <button onClick={handleCancel}>Cancel</button>
        
        
        </>):(
            <>
                <button onClick={handleAdd(recipe)}>Add</button>
            </>
        )}
    </div>
    <div className="list-of-items">
        <ul>
          
                {
                    recipes.map((e) => 
                    {
                        <li key={e.id}>
                            <h1>{e.name}</h1>
                            <p>{e.ingredients.join(', ')}</p>
                            <p>{e.instructions}</p>
                            <button onClick={handleEdit}>Edit</button>
                            <button onClick={handleDelete}>Delete</button>
                        </li>
                       
                    }
                    )
                }
          
        </ul>
      </div>
      
    </div>
  );
}

export default Recipe_Book;
