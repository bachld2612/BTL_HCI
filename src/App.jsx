import { useState } from 'react'
import Header from '../src/components/Header'
import { RouterProvider } from 'react-router-dom'
import { routes } from './routes'
function App() {
  return <RouterProvider router={routes} />
}

export default App
