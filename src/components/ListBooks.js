// import ItemBook from './ItemBook';
import { BooksContext } from '../contexts/booksContext';
import { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { Button, SimpleGrid, Box, Heading } from '@chakra-ui/react'
import API from '../api/booksAPI'


const ListBooks = () => {
    const booksContext = useContext(BooksContext);
    const navigate = useNavigate();
    let books = [];
    if(booksContext.books) {
        books = booksContext.books.map(book => (
            
            <li className= "book_item" key={book.id}>
                 
                 
                <Heading as='h21' size='2xl' noOfLines={1}>{book.name}</Heading>
                    <p>{book.author}</p>
                <img src={book.cover}></img>
                <p>Date de publication : {book.published_date}</p>
                {/* <p>{book.synopsis}</p> */}
                <p>{book.available}</p>
                
                <Button colorScheme='blue' onClick={() => navigate("/detail")}>Détails</Button> 
                
               
            </li>
           
            
            ))
        }
    // API.getBooks().then(books => console.log(books))

    return (
        <>
        <ul className="book">
           {books}
           
        </ul>
       
            
        
      
        </>
    )
}


export default ListBooks












