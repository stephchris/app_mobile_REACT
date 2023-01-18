
import { useContext, useState } from 'react';
import { BooksContext } from '../contexts/booksContext'
// import { Link } from "react-router-dom";
import API from '../api/booksAPI';


// function Detail() {
 
// }

const ItemBook = ({book}) => {
    const [isNotAvailable, setIsNotAvailable] = useState(false)
    const booksContext = useContext(BooksContext);
    const [name, setName] = useState(book.name);
    let itemContent;

  if(isNotAvailable) {
  itemContent = (
    <>
 
            <button 
                type='button'
                value={name}
                available = "false"
                        
                onClick={(e) => setIsNotAvailable(false)
    
                      }
                
                    >Indisponible
            </button>
                </>)
             
    } else {
    itemContent = (
        
        <button 
            type='button' 
            onChange={() => setIsNotAvailable(true)}>Disponible</button>
            
    )
}




    return (
        <>
        {itemContent}
        <button 
        type="button" 
        className={book.avaible && !isNotAvailable ? 'btn-check':''}
        disabled={setIsNotAvailable}
        onClick={() => {
          API.updateBook(book.id, {
            ...book,
           available: !book.available
          }).then(res => {
            if (res) {
              API.getBooks().then(books => booksContext.rebuildBooks(books));
            }
          });
        }}><i className="étails"></i></button>
        <button 
            type='button'
            className={book.available && !isNotAvailable ? "Détails" : 'Indisponible'}
            onClick={() => {
                API.getBooks(book.id.then(res => {
                    if (res) {
                        API.getBooks().then(book);
                    }
                } ));
            }}
            ><i className="Détails"></i></button>
            </>
    )
}

export default ItemBook