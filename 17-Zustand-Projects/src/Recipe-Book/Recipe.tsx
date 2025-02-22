import { useState } from "react";
import { UseStore } from "./store/store";
import { LucideDelete, Pen, Plus } from "lucide-react";
import {Recipe} from '@/Recipe-Book/store/store'


const RecipeApp = () => {

    const {recipes,addrecipe,removerecipe} = UseStore()
    const [name, setname] = useState("");
    const [ingredients, setingredients] = useState<string>("");
    const [instructions, setinstructions] = useState<string>();
    const [Editing, setEditing] = useState<Recipe | null>(null);


    const handleAddRecipe = () => {
      if(name.trim() == '' || ingredients.trim() == '' || instructions?.trim() == '')
      {
          return
      }
      addrecipe({
        id: Date.now(),
        name,
        ingredients: ingredients.split(",").map((ingredient) => ingredient.trim()),
        instructions: instructions || '',
      })

      setname('')
      setingredients('')
      setinstructions('')
    }
    const handleEdit = (recipe:Recipe) => 
    {
      setEditing(recipe)
      setname(recipe.name)
      setingredients(recipe.ingredients.join(','))
      setinstructions(recipe.instructions)
    }

    const handleUpdate = () =>
    {
      if(name.trim() == '' || ingredients.trim() == '' || instructions?.trim() == '')
        {
            return
        }
      if(Editing){

        removerecipe(Editing.id)
        
        addrecipe({
          id: Date.now(),
          name,
          ingredients: ingredients.split(",").map((ingredient) => ingredient.trim()),
          instructions: instructions || '',
        })
        setEditing(null)

      }
      
      setname('')
      setingredients('')
      setinstructions('')
    }

    const handleCancelEdit = () =>
    {
      setEditing(null)
      setname('')
      setingredients('')
      setinstructions('')
       
    }
  

  return (
      <div className="border p-10 rounded-lg flex flex-col gap-4 w-96">

        <h1 className="text-4xl font-semibold ">Recipe Book</h1>
        <div className="m-y-4 flex flex-col">
          <label htmlFor="Name" className="text-s">Name</label>
          <input type="text" className="text-black focus:outline-none bg-opacity-75 p-2 rounded-md" value={name} onChange={e => setname(e.target.value)}/>
        </div>
        <div className="flex flex-col">
          <label htmlFor="ingredients" className="text-s">Ingredients</label>
          <input type="text" className="text-black focus:outline-none p-2 rounded-md" value={ingredients} onChange={e => setingredients(e.target.value)}/>
        </div>
        <div className="flex flex-col">
          <label htmlFor="instructions" className="text-s">Instructions</label>
          <textarea className="text-black focus:outline-none p-2 rounded-md" value={instructions} onChange={e => setinstructions(e.target.value)}></textarea>
        </div>
        <div>
          {
            Editing ? (
              <div className="flex justify-between items-center">
              
              <button className="border flex border-gray-500 rounded-md p-2 bg-green-600 gap-2" onClick={handleUpdate}>
                Update
              </button>
              <button className="border flex border-gray-500 rounded-md p-2 bg-red-600 gap-2" onClick={handleCancelEdit}>Cancel</button>
              </div>

            ) : ( 
              <>
                <button className="border flex border-gray-500 rounded-md p-2 bg-green-600 gap-2" onClick={handleAddRecipe}><Plus/> Add Recipe</button>
              </>
            )
          }
        </div>
            <ul>

              {
                recipes.map((recipe) =>
                  (
                    <li key={recipe.id} className="flex justify-between">
                      <div>
                        <h1>{recipe.name}</h1>
                        <p>
                          <strong>{recipe.ingredients.join(',')}</strong>
                          <strong>{recipe.instructions}</strong>
                        </p>

                      </div>
                      <div className="flex flex-row">
                            <button className="border flex gap-2 items-center border-gray-500 rounded-md p-2 mx-2" onClick={() => handleEdit(recipe)}>
                              <Pen size={15}/> Edit
                            </button>
                            <button className="border border-gray-500 rounded-md p-2 flex gap-2 items-center" onClick={() => removerecipe(recipe.id)}><LucideDelete size={20}/> Delete</button>
                      </div>


                    </li>
                  ))
                
              }
              
            </ul>

      </div>
  );
}

export default RecipeApp;
