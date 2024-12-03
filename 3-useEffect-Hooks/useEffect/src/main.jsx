import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Data_fetch from './fetch-data/data_fetch.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Data_fetch />
  </StrictMode>,
)
