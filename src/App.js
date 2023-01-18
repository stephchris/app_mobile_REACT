// import React from 'react';

import BooksProvider from './contexts/booksContext'; 
// import { AppContext } from './contexts/appContext';

import Header from './components/Header'
import ListBooks from './components/ListBooks'
import { Container, } from '@chakra-ui/react'

export default function App() {
  return (
    // <Container>
    <BooksProvider>
      <section className="wrapper">
        
          <Header />
          
  {/* <Box bg='tomato' height='80px'></Box>
  
  <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box> */}

          <ListBooks />
        
          
        
      </section>
    </BooksProvider>
   //</Container> 
  )
}

