import { Heading } from '@chakra-ui/react'
import { useContext, useState } from 'react'
import { BooksContext}  from '../contexts/booksContext'



const Header = () => {
    const [ title, setTitle ] = useState ('')
    const booksContext = useContext(BooksContext);

    return (
      <>
        <Heading as='h1' size='4xl' noOfLines={1}>
          Borrowed Book
        </Heading>
        <form id="book_form" onSubmit={(e) => {
        e.preventDefault()
        if(!title) 
          return
        booksContext.createBook(title)
        setTitle('')
        }}>
        
        </form>
      </>     
    )

}
    export default Header



