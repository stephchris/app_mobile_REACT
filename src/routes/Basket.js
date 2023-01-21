import { Link } from "react-router-dom";
import { Heading } from '@chakra-ui/react'
import { Container, chakra, Box } from '@chakra-ui/react'



export default function Basket () {


return (
    <>
    <Container>
    <Box w="100%" bgImage="url('./img/livre_bg.jpg')"/>
    <Heading as='h1' size='4xl' noOfLines={1}>
        Panier
    </Heading>

    <chakra.button
                    px='3'
  py='2'
  bg='gray.300'
  rounded='md'
  _hover={{ bg: 'gray.600', color: 'white' }} type="submit" className="btn_pay" to='/basket'>Monnaie d'échange</chakra.button> 

    <Link to='/detail'>Retour vers la page détail</Link> 

    <Link to='/'>Retour vers la page d'accueil</Link>
    </Container>
    </>
)
}
