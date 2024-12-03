import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Counter from './counter'
import Example from './add-remove-array'
import Update_object from './update-object'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Counter />
    <Example />
    <Update_object />
  </StrictMode>,
)
