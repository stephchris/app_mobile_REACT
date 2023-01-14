import React from 'react';
import {ChakraProvider,theme,} from '@chakra-ui/react';
import BooksProvider from './contexts/booksContext'; 
import { useNavigate } from 'react-router-dom';

import Header from './components/Header'
import ListBooks from './components/ListBooks'

export default function App() {
  const navigate = useNavigate()
  return (
    <BooksProvider>
      <section className="wrapper">
        <ChakraProvider theme={theme}>
        <Header />
        <ListBooks />
        </ChakraProvider>
      </section>
    </BooksProvider>
  );
}

