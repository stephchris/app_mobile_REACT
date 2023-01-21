import { Container, Box, Flex, Grid } from '@chakra-ui/react';
import { createContext, useState, useEffect } from 'react';
import API from '../api/booksAPI';


export const BooksContext = createContext(null);

export default function BooksProvider ({children}) {
  const [books, setBooks] = useState();
  
  // const duplicationBook = (duplicateBook) => {
  //   setBooks(books.map(book => {
  //     if(book.id === duplicateBook.id) {
  //       return duplicateBook
     
  //   }}))
  // }

  useEffect(() => {                 // récupération des books
    console.log("MessageChannel")
    API.getBooks().then(books => setBooks(books));   
  },[]);

  
  return (
    <Container maxW='container.sm' bg='gray.100' color='#262626' centerContent>
      <Grid>
      <Box padding='2' bg='gray.100' color='black' maxW='md'>
      <Flex alignItems='center' gap='2'>

    <BooksContext.Provider value={{
        books, 
        setBooks,
        // duplicationBook,
        
    }}>
        {children}
        
    </BooksContext.Provider>
   
    </Flex>
    </Box>
    </Grid>
    </Container>
  );
}

