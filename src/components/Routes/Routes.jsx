import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Greeting from '../Greeting/Greeting'
import Places from '../Places/Places'
import Movies from '../Movies/Movies'
import PassphraseForm from '../Pass/PassphraseForm';
import { UserProvider } from '../Contexts/UserContext'
import Nav from '../Nav/Nav';
export const AuthenticatedRoutes = () => {
    return (
        <Router>
            <>
                <Nav />
                <Switch>
                    <UserProvider>
                        <Route exact path='/' component={Greeting} />
                        <Route path='/movies' component={Movies} />
                        <Route path='/places' component={Places} />
                    </UserProvider>
                </Switch >
            </>
        </Router >
    );
};
export const UnAuthenticatedRoutes = () => {
    return <PassphraseForm />
}