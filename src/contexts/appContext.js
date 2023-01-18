import { createContext, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App';
import Detail from '../routes/Detail';
import Basket from '../routes/Basket';

export const AppContext = createContext(null)

export function AppProvider() {
  const [name, setName] = useState()

  

  const router = createBrowserRouter([
    {
      path: '/detail',
      element: <Detail />
    },
    {
      path: '/',
      element: <App />
      
    },
    {
      path: '/basket',
      element: <Basket />
    }
  ])

  return (
    <AppContext.Provider value={{name, setName}}>
      <RouterProvider router={router} />
    </AppContext.Provider>
  )
}