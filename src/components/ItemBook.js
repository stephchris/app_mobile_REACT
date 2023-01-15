
import { useContext, useState } from 'react';
import { BooksContext } from '../contexts/booksContext'
import { Link } from "react-router-dom";
// import { Button } from '@chakra-ui/react';

// function Detail() {
 
// }

const ItemBook = ({book}) => {
    const [isNotAvailable, setIsNotAvailable] = useState(false)
    const booksContext = useContext(BooksContext);
    let itemContent;

  if(isNotAvailable) {
  itemContent = (
    <>
        <input
            type="text"
            value={book.title}
            onChange={(e) => {
                booksContext.updateBook({
                    ...book,
                    title: e.target.value,
                    available: false
                })
                setIsNotAvailable(false)
            }}
            />
            <button type='button'>Indisponible</button>
    </>
  )
    } else {
    itemContent = (
        <>
        <input
            type="text"
            value={book.title}
            className={book.available ? 'available' : ''}
            available={true}
            onChange={(e) => {}}
        />
        <button 
            type='button' 
            onChange={() => setIsNotAvailable(true)}>Disponible</button>
            </>
    )
}




    return (
        <>
        
        <button 
            type= "button"
            className= {book.available && !isNotAvailable ? 'Disponible' : 'Indisponible'}>
        </button>



        <div>
            <Link className="btn_detail" to='/itemBook'>Detail</Link>              
        </div>
        </>
    )
}

export default ItemBook