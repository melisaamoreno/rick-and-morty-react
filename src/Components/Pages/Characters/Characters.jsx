import { Container, Heading, Text, Grid, Box, Image, Select, Input, HStack, Center, Button} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BsFillCircleFill } from 'react-icons/bs';
import { GrNext, GrPrevious } from 'react-icons/gr';
import { NavLink, useSearchParams } from "react-router-dom";
import axios from "axios";

export const Characters = () => {

  let [searchParams, setSearchParams] = useSearchParams();
  const [pages, setPages] = useState(1)
  const [characters, setCharacters] = useState([])
  const [search, setSearch] = useState(searchParams.get("search") || "")
  const [status, setStatus] = useState(searchParams.get("status") || "")
  const [species, setSpecies] = useState(searchParams.get("species") || "")
  console.log(pages)


  useEffect(() => {
    const getCharacters = async () => {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character/?page=${pages}?name=${search}&status=${status}&species=${species}`
      )
      setCharacters(response.data.results)
      setPages(pages)
    }
    getCharacters()
    setSearchParams({search, status, species})
  }, [search, status,species])

  return (
    <>
    <Center>
      <HStack mt='15px'>
        <Select placeholder="Select option" w="200px" value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="dead">Dead</option>
          <option value="alive">Alive</option>
          <option value="unknown">Unknown</option>
        </Select>

        <Select placeholder="Select option" w="200px" value={species} onChange={(e) => setSpecies(e.target.value)}>
          <option value="human">Human</option>
          <option value="alien">Alien</option>
          <option value="unknown">Unknown</option>
        </Select>
        <Input placeholder="Search" w="200px" onChange={(e) => setSearch(e.target.value)} value={search}></Input>

        <Button>Search</Button>
      </HStack>
        </Center>

      <Grid templateColumns="repeat(3, 1fr)" gap={4} p="10px">
        {characters.map((item) => (
          <Container
            w="400px"
            bg="green.200"
            color="black"
            borderRadius="10px"
            padding="2%"
            display="flex"
            key={item.id}
          >
            <Box>
              <Image src={item.image} />
            </Box>

            <Box>
              <Heading fontSize="25px" padding="5px">
                {item.name}
              </Heading>
              <Text padding="5px">
                {' '}
                {item.status === 'Alive' ? (
                  <BsFillCircleFill size="10px" color="green" />
                ) : (
                  <BsFillCircleFill size="10px" color="red" />
                )}{' '}
                {item.status} - {item.species}
              </Text>
              <Text padding="5px">
                <b>Last know location:</b> {item.location.name}
              </Text>
            </Box>
            <NavLink to={`/character/${item.id}`}>Details</NavLink>
          </Container>
        ))}
      </Grid>
      <Container display='flex' justifyContent='center' padding='20px'>
        Prev <Button mr='20px' ml='15px' onClick={() => setPages(pages - 1)}><GrPrevious /></Button>
        <Button mr='20px' ml='15px'  onClick={() => setPages(pages + 1)}><GrNext/></Button> Next
        </Container>
    </>
  )
}
