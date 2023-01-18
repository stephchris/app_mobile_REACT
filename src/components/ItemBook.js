
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
//   itemContent = (
//     <>
//         <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//         /> 
//             <button 
//                 type='button'
//                 onChange={() => {
//                     API.updateBook(name.id, {
//                         ...name,
//                         name: name,
//                         available: false
//                       }).then(res => {
//                         if (res) {
//                           API.getBooks().then(books => booksContext.rebuildBooks(books));
//                         }
//                       });
//                       setIsNotAvailable(false)
//                     }}>Indisponible
//             </button>
//                 </>
//               )  
//     } else {
//     itemContent = (
//         <>
//         <input
//             type="text"
//             value={book.name}
//             className={book.available ? 'available' : ''}
//             available={true}
//             onChange={(e) => {}}
//         />
//         <button 
//             type='button' 
//             onChange={() => setIsNotAvailable(true)}>Disponible</button>
//             </>
//     )
}




    return (
        <>
        {itemContent}
        <button 
            type= "button"
            className= {book.available && !isNotAvailable ? 'Disponible' : 'Indisponible'}
            onChange={() => {
                API.updateBook(book.id, {
                    ...book,
                    available: !book.available
                }).then(res => {
                    if(res) {
                        API.getBooks().then(books => booksContext.rebuildBooks(books));
                    }
                });
            }}></button>
        </>
    )
}

export default ItemBook