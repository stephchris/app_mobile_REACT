import { Link } from "react-router-dom";
import { Heading } from '@chakra-ui/react'
import { Button, Box } from '@chakra-ui/react'



export default function Basket () {


return (
    <>
    <Box w="100%" bgImage="url('./img/livre_bg.jpg')"/>
    <Heading as='h1' size='4xl' noOfLines={1}>
        Panier
    </Heading>

    <Button colorScheme='blue' type="submit" className="btn_pay" to='/basket'>Monnaie d'échange</Button> 

    <Link to='/detail'>Retour vers la page détail</Link> 

    <Link to='/'>Retour vers la page d'accueil</Link>
    </>
)
}
