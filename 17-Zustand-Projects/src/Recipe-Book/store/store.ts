import { create } from "zustand";

export type Recipe = {

    id : number,
    name : string,
    ingredients : string[],
    instructions : string

}

interface RecipeStore {
    recipes : Recipe[],
    addrecipe : (recipe:Recipe) => void
    removerecipe : (id:number) => void
}


export const UseStore = create<RecipeStore>((set) => ({
    recipes: [],
    
    addrecipe : (recipe) => set((state) => ({
        recipes : [...state.recipes,recipe]
    })),

    removerecipe : (id) => set((state) => ({
        recipes : state.recipes.filter((recipe)=> recipe.id != id)
    }))
}))
