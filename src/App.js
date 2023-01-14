import React from 'react';
import {ChakraProvider,theme,} from '@chakra-ui/react';
import BooksProvider from './contexts/booksContext'; 

import Header from './components/Header'
import ListBooks from './components/ListBooks'

export default function App() {
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

