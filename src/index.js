import { ColorModeScript } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppProvider } from './contexts/appContext';
import {ChakraProvider,theme,} from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <ChakraProvider theme={theme}>
    <ColorModeScript />
    <AppProvider />
    </ChakraProvider>
    
  </React.StrictMode>
);


