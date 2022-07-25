import { Container, Heading, Text } from "@chakra-ui/react"
import { NavLink } from "react-router-dom"

export const Nav = () => {
  return (
    <>
    <nav>
      <Heading color="white">Rick and Morty API</Heading>
    </nav>
      <Container maxW='100%' display='flex' justifyContent='center' alignItems='center' fontSize='20px' bg='green.200'>
      <NavLink to="/">Home / </NavLink>
      <NavLink to="character">Characters / </NavLink>
      <NavLink to="episode">Episodes / </NavLink>
      <NavLink to="location">Location</NavLink>
      </Container>
    </>
  )
}