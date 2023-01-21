import React from 'react'
import { BooksContext } from '../contexts/booksContext';
import { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { chakra, Heading } from '@chakra-ui/react'

const ListBooks = () => {
    const booksContext = useContext(BooksContext);
    const navigate = useNavigate();
    let books = [];
    // let duplicateBook;
    if(booksContext.books) {
        books = booksContext.books.map(book => (
            <li className= "book_item" key={book.id}>
                <Heading as='h21' size='xl' noOfLines={1}>
                    {book.name}
                </Heading>
                    <p>{book.author}</p>
                    <p>{book.book_id}</p>
                    <img src={book.cover}></img>
                    <p>Date de publication : {book.published_date}</p>
                <chakra.button
                    px='3'
  py='2'
  bg='gray.300'
  rounded='md'
  color= 'black'
  font-weight= 'bold'
  _hover={{ bg: 'gray.600', color: 'white' }}
                       onClick={() => navigate("/detail", { state:  book.book_id })}>Détails</chakra.button> 
            </li>
        ))
    }

    return (
        <section className="wrapper">
            <ul className="book">
                {books}
            </ul>
        </section>
    )
}



// const button = ({ onClick, book }) => {
//     return (
//       <button type="button" onClick={onClick}>
//         {book}
//       </button>
//     );
// }
export default ListBooks






