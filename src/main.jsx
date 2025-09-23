import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// We're no longer using the index.css here since we import it in App.jsx
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
