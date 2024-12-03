import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Counter from './part-1/counter'
import Example from './part-1/add-remove-array'
import Update_object from './part-1/update-object'
import Todolist from './Challenges/To-do-list'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Counter />
    <Example />
    <Update_object />
    <Todolist />
  </StrictMode>,
)
