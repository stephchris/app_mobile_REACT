import { Heading, Container } from '@chakra-ui/react'

const Header = () => {
    // const [ name, setName] = useState('')
  return (
    <Container>
      <div className='Header'>
        <nav>
          
            <p>Login</p>
            <p>About</p>
            
          
        </nav>
      <Heading as='h1' size='3xl' noOfLines={1}>
        Borrowed Book
      </Heading>
      </div>
    </Container>)
}    
 export default Header



