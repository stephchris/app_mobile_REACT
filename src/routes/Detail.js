// import { AppContext } from './context/appContext';
import { Link } from "react-router-dom";
import { Button } from '@chakra-ui/react'

// import ItemBook from "../components/ItemBook";
import { Heading } from '@chakra-ui/react'
import BooksProvider from "../contexts/booksContext";
import { useNavigate } from "react-router-dom";


export default function Detail() {
  const navigate = useNavigate();
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
    <BooksProvider>
    
    <section className="wrapper">
      <Heading as='h1' size='4xl' noOfLines={1}>
        Détails du livre
      </Heading>
   
    
      <p>
        <Button colorScheme='blue' onClick={() => navigate("/basket")}>Emprunter</Button>
      </p>
      <Link to='/'>Retour vers la page d'accueil</Link>
    </section>
    </BooksProvider>
  )
}
