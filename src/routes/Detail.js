// import { AppContext } from './context/appContext';
import { Link } from "react-router-dom";


export default function Detail() {
    // const appContext = useContext(AppContext);
    
// const ItemBook = ({book}) => {
//     const [isNotAvailable, setIsNotAvailable] = useState(false)
//     const booksContext = useContext(booksContext);
//     let itemContent;

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
//             <button type='button'>Indisponible</button>
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
//             onChange={(e) => {}}
//         />
//         <button type='button'>Disponible</button>
//             </>
//     )
// }



    
  return (

    <section className="wrapper">
    <h1>Détails du livre</h1>
    
    <div>
      <Link className="btn_borrow" to='/detail'>Emprunter</Link>                
      
    </div>
    </section>
  )
}

