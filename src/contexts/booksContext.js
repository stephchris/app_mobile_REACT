import { createContext, useState, useEffect } from 'react';
import API from '../api/booksAPI';


export const BooksContext = createContext(null);

export default function BooksProvider ({children}) {
  const [books, setBooks] = useState();

  useEffect(() => {
    console.log("MessageChannel")
    API.getBooks().then(books => setBooks(books));  // FETCH
  },[]);

 
  return (
    <BooksContext.Provider value={{
        books, 
        setBooks
    }}>
        {children}
    </BooksContext.Provider>
  );
}

