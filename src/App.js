// import React from 'react';

import BooksProvider from './contexts/booksContext'; 
// import { AppContext } from './contexts/appContext';

import Header from './components/Header'
import ListBooks from './components/ListBooks'
import { Container, Box} from '@chakra-ui/react'

export default function App() {
  return (
    <Container maxW='container.sm'  bgGradient={[
    'linear(to-tr, teal.300, yellow.400)',
    'linear(to-t, blue.200, teal.500)',
    'linear(to-b, orange.100, purple.300)',
  ]} centerContent>
    <Box padding='4' bgGradient={[
    'linear(to-tr, teal.300, yellow.400)',
    'linear(to-t, blue.200, teal.500)',
    'linear(to-b, orange.100, purple.300)',
  ]} color='black' maxW='sm'>
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
    </Box>
           </Container>
  )
}

