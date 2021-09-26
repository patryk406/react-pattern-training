import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Greeting from '../Greeting/Greeting'
import Places from '../Places/Places'
import Movies from '../Movies/Movies'
import PassphraseForm from '../Pass/PassphraseForm';
import { UserProvider } from '../Contexts/UserContext'
import Nav from '../Nav/Nav';
import { Flex, Center, ChakraProvider } from '@chakra-ui/react'
export const AuthenticatedRoutes = () => {
    return (
        <ChakraProvider>
            <Router>
                <Flex>
                    <Nav />
                    <Switch>
                        <UserProvider>
                            <Center w='100%' h='100vh' flexDirection='column' color='purple.400' bgGradient='linear(teal.200 0%, cyan.100 25%, pink.100 50%)' fontWeight='bold'>
                                <Route exact path='/' component={Greeting} />
                                <Route path='/movies' component={Movies} />
                                <Route path='/places' component={Places} />
                            </Center>
                        </UserProvider>
                    </Switch >
                </Flex>
            </Router >
        </ChakraProvider>
    );
};
export const UnAuthenticatedRoutes = () => {
    return <PassphraseForm />
}