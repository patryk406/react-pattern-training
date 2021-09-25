import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Greeting from '../Greeting/Greeting'
import Places from '../Places/Places'
import Movies from '../Movies/Movies'
import PassphraseForm from '../Pass/PassphraseForm';
import { UserProvider } from '../Contexts/UserContext'
export const AuthenticatedRoutes = () => {
    return (
        <Router>
            <>
                <nav>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/movies'>Movies</Link>
                        </li>
                        <li>
                            <Link to='/places'>Places</Link>
                        </li>
                    </ul>
                </nav>

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