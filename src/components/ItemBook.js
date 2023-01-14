
import { useContext, useState } from 'react';
import { BooksContext } from '../contexts/booksContext'
import { Link } from "react-router-dom";

// function Itembook() {
//   return (
//     <div>
//       <Link className="btn_detail" to='/itemBook'>Detail</Link>          {/* link puis to et le chemin, et non pas a href   cf discord 11/01 9h02 */}      
      
//     </div>
//   )
// }

const ItemBook = ({book}) => {
    // const [isNotAvailable, setIsNotAvailable] = useState(false)
    const booksContext = useContext(BooksContext);
    // let itemContent

//   if(isNotAvailable) {
//   itemContent = (
//     <>
//         <input
//             type="text"
//             value={book.title}
//             onChange={(e) => {
//                 booksContext.updateBook({
//                     ...book,
//                     title: e.target.value,
//                     available: false
//                 })
//             }}
//             />
//             <button
//             type="button"
//             className="btn_borrow"
//             onClick={() => setIsNotAvailable(false)}><i className="fa-solid fa-save">Déjà emprunté</i></button>
//     </>
//   )
//     } else {
//     itemContent = (
//         <>
//         <input
//             type="text"
//             value={book.title}
//             className={book.available ? 'available' : ''}
//             available={true}
//         />
//         <div>
//             <p>Disponible</p>
//         </div>
//             </>
// )
//     }
// }

return (
    <div>
      <Link className="btn_detail" to='/itemBook'>Detail</Link>          {/* link puis to et le chemin, et non pas a href   cf discord 11/01 9h02 */}      
      
    </div>
  )
}

export default ItemBook