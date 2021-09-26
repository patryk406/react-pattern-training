import React from 'react'
import withData from '../withData/withData'
import { Text, Box } from "@chakra-ui/react"

function Movies(props) {
    return (
        <>
            <Text fontSize="2rem">This is Movies Page</Text>
            <Box fontSize='1rem' py='2rem'>Hello {props.name} {props.isAdmin ? 'you are admin ! thats great' : 'your access is limited, you are not the administrator'}</Box>
            <Text fontSize='1rem' as="cite">if you have some problem, please contact support: {props.email}</Text>
        </>
    )
}

export default withData(Movies)
