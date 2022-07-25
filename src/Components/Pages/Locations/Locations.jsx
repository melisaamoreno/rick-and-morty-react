import { Heading, VStack, Spinner, List,Alert, AlertIcon, ListIcon, ListItem, Container, Button, Grid} from "@chakra-ui/react"
import { useFetch } from "../../../hooks/useFetch"
import {BiWorld} from 'react-icons/bi'
import { GrNext, GrPrevious } from 'react-icons/gr';


export const Locations = () => {

    const {data, isLoading, error, page, setPage} = useFetch()
    
    return (
        <>
            <VStack>
            <Heading>Locations</Heading>
            {isLoading && <Spinner />}
            {data.results && 
            <Grid templateColumns='repeat(3, 1fr)' gap={6}>
                <List>
                    {data.results.map(location => <List key={location.id}>
                        <ListIcon color='green.200' as={BiWorld} />
                        <ListItem>{location.name}</ListItem>
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