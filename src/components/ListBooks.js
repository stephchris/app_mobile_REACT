import ItemBook from './ItemBook';
import { BooksContext } from '../booksContext';
import { useContext } from 'react';


const ListBooks = (onUpdateBook) => {
    const booksContext = useContext(BooksContext);

    return (
        <ul className="book">
            {books.map(book => (
                <li className= "book_item" key={book.id}>
                   
                    <p>{book.title}</p>
                    <p>{book.author}</p>
                    <p>{book.available}</p>
                    <ItemBook
                        book={book}
                        onUpdateBook={onUpdateBook}
                    />

                </li>
            ))}
        </ul>
    )
}


export default ListBooks












