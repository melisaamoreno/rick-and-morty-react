import { Center, Heading, Image } from "@chakra-ui/react"
import Gif from '../../../Assets/ReYG.gif'


export const Home = () => {
  return (
    <>
      <Center mt="5%">
        <Heading>Welcome</Heading>
      </Center>
      <Center mt='15px'>
        <Image src={Gif}/>
      </Center>
    </>
  )
}