import {create} from 'zustand'

export const useStories = create((set) => 
({
  recipes : [],
  addrecipe : (recipe) => set((state) => ({
    recipes : [...state.recipes, recipe]
  })),
  removerecipe : (id) => set((state) =>
  ({
    recipes : [state.recipes.filter(e => e.id != id)]
  }))
}))
