import React from 'react';
import {ChakraProvider,theme,} from '@chakra-ui/react';
import { BooksProvider } from '../booksContext'; 

import InputBook from './components/header'
import ListBooks from './components/ListBooks'

export default function App(createBook) {
  return (
    <BooksProvider>
      <section className="wrapper">
        <ChakraProvider theme={theme}>
        <InputBook onCreateBook={createBook}/>
        <ListBooks 
        // books={books}
        // onUpdateBook={updateBook}
        />
        </ChakraProvider>
      </section>
    </BooksProvider>
  );
}

