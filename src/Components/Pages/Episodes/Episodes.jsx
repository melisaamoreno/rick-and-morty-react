import { Heading, VStack, Spinner, List,Alert, AlertIcon, ListIcon, ListItem, Container, Button, Grid} from "@chakra-ui/react"
import { useFetch } from "../../../hooks/useFetch"
import {AiFillPlayCircle} from 'react-icons/ai'
import { GrNext, GrPrevious } from 'react-icons/gr';


export const Episodes = () => {

    const {data, isLoading, error, page, setPage} = useFetch()
    
    return (
        <>
            <VStack>
            <Heading>Episodes</Heading>
            {isLoading && <Spinner />}
            {data.results && 
            <Grid templateColumns='repeat(3, 1fr)' gap={6}>
                <List>
                    {data.results.map(episode => <List key={episode.id}>
                        <ListIcon color='green.200' as={AiFillPlayCircle} />
                        <ListItem>{episode.name}</ListItem>
                    </List>)}
                </List>
                </Grid>
            }
            {error && <Alert>
                    <AlertIcon  />
                    An error ocurred!
                </Alert>}
        </VStack>
        <Container display='flex' justifyContent='center' padding='20px'>
        Prev <Button mr='20px' ml='15px' onClick={() => setPage(page - 1)}><GrPrevious /></Button>
        <Button mr='20px' ml='15px'  onClick={() => setPage(page + 1)}><GrNext/></Button> Next
        </Container>
        </>
    )
} 