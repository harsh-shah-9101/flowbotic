import './App.css'
import { lazy, Suspense } from 'react'

// Lazy load home page for better initial load performance
const Home = lazy(() => import('./pages/home'))

// Loading fallback component
function LoadingFallback() {
  return (
    <div className="min-h-screen w-full bg-black flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="loader"></div>
        <p className="text-neutral-400 text-sm">Loading...</p>
      </div>
    </div>
  )
}

function App() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Home />
    </Suspense>
  )
}

export default App
