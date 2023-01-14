import { ColorModeScript } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Detail from './routes/Detail';
import Basket from './routes/Basket';

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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ColorModeScript />
    <RouterProvider router={router} />
  </React.StrictMode>
);


