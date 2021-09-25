import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Greetings from '../Greeting/Greeting'
import Places from '../Places/Places'
import Movies from '../Movies/Movies'
import PassphraseForm from '../Pass/PassphraseForm';
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
                    <Route exact path='/'>
                        <Greetings />
                    </Route>
                    <Route path='/movies'>
                        <Movies />
                    </Route>
                    <Route path='/places'>
                        <Places />
                    </Route>
                </Switch >
            </>
        </Router >
    );
};
export const UnAuthenticatedRoutes = () => {
    return <PassphraseForm />
}