import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Remove StrictMode in production for better performance
// StrictMode causes double rendering which can cause lag
createRoot(document.getElementById('root')).render(<App />)
