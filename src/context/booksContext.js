import { createContext, useState } from 'react';

export const BooksContext = createContext(null);

export function BooksProvider ({children}) {
  const [books, setBooks] = useState(initialBooks);

  const createBook = title => {
    setBooks([
      ...books,
      {
        id: nextId++,
        title: title,
        available: false
      }
    ])
  }
  


  const updateBook = (newBook) => {
    setBooks(books.map(book => {
      if(book.available === newBook.available) {
        return newBook
      } else {
        return book
      }
    }))
  }

  return (
    <BooksContext.Provider value={{
        books, 
        createBook,
        updateBook
    }}>
        {children}
    </BooksContext.Provider>
  );
}

const initialBooks = [
      {
        id: 1,
        title: 'title 1',
        available: true
      },
      {
        id: 2,
        title: 'title 2',
        available: true
      },
      {
        id: 3,
        title: 'title 2',
        available: false
      }
    ];
    
    let nextId = initialBooks.length + 1
    



