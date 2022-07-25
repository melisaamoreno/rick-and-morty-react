import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container, Heading, Box, Text, Image } from "@chakra-ui/react";
import { BsFillCircleFill } from 'react-icons/bs'

export const CharacterCard = () => {
  const [details, setDetails] = useState(null)
  let { id } = useParams()

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then(res => res.json())
      .then(setDetails)
  }, [id])
 if(!details){
  return null
 }
  return (
    <Container
    w="600px"
    mt='50px'
    color="black"
    borderRadius="10px"
    padding="2%"
    display="flex"
  >
    <Box>
      <Image src={details.image} />
    </Box>

    <Box>
      <Heading fontSize='25px' padding='5px'>{details.name}</Heading>
      <Text padding='5px'> {details.status === 'Alive' ? <BsFillCircleFill size='10px' color="green"/> : <BsFillCircleFill size='10px' color="red"/>} {details.status} - {details.species}</Text>
      <Text padding='5px'>Gender: {details.gender}</Text>
      <Text padding='5px'><b>Last know location:</b> {details.location.name}</Text>
    </Box>
  </Container>
  )
}