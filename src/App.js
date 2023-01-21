 import React from 'react';
import { Routes, Route } from "react-router-dom";
import BooksProvider from './contexts/booksContext'; 
// import { AppContext } from './contexts/appContext';

import Header from './components/Header'
import ListBooks from './components/ListBooks'
import { Form } from 'react-router-dom';
import { Container, SimpleGrid, Box} from '@chakra-ui/react'

export default function App() {
  return (
    <Container>
     
    
      <BooksProvider>
        <section className="wrapper">
          <Header />
        <div className='grid'>
        <SimpleGrid
  bg='gray.50'
  columns={{ sm: 2, md: 4 }}
  spacing='1'
  p='10'
  textAlign='center'
  rounded='lg'
  color='gray.400'
>
<Box boxShadow='6xl' p='2' rounded='2xl' bg='white'>
  
 
          <ListBooks />
          </Box>
          </SimpleGrid>
        </div>
        </section>
      </BooksProvider>
      
      </Container>
  )
}

