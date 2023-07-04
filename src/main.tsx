import React from 'react'
import ReactDOM from 'react-dom/client'
import FormStep2 from './pages/FormStep2/index.tsx'
import FormStep3 from './pages/FormStep3/index.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/step2',
    element: <FormStep2 />,
  },
  {
    path: '/step3',
    element: <FormStep3 />,
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)