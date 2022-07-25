import { Center, Heading } from '@chakra-ui/react'
import {TbAlertTriangle} from 'react-icons/tb'

export const Error404 = () => {
  return (
    <>
      <Center mt="10%">
        <TbAlertTriangle color="red" size="50px" />
      </Center>
      <Center>
        <Heading>Error 404</Heading>
      </Center>
    </>
  )
}