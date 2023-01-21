import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import BooksProvider from "../contexts/booksContext";
import { BooksContext } from "../contexts/booksContext";

import { Heading, chakra } from '@chakra-ui/react'

export default function Detail() {
  const navigate = useNavigate()
  const { state } = useLocation()
  const booksContext = useContext(BooksContext)
    return (
      
      


    <BooksProvider>
    <section className="wrapper">
      
      <Heading as='h1' size='xl' noOfLines={1}>
        Détails du livre
      </Heading>  
      <p>{ state }</p> 
      <chakra.button
                    px='3'
  py='2'
  bg='gray.300'
  rounded='md'
  _hover={{ bg: 'gray.600', color: 'white' }} onClick={() => navigate("/basket")}>Emprunter</chakra.button>
       
        

      
      <Link to='/'>Retour vers la page d'accueil</Link>
    </section>
    </BooksProvider>
    )
  
}




    
  