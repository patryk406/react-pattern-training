import withData from "../withData/withData"
import { Text, Box } from "@chakra-ui/react"
function Greeting(props) {
    return (
        <Box>
            <Text bgGradient="linear(to-l, #7928CA, #FF0080)"
                bgClip="text"
                fontSize="6xl"
                fontWeight="extrabold">
                Greetings {props.name}
            </Text>
        </Box>
    )
}
export default withData(Greeting)