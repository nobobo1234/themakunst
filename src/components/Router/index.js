import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import Exercise from '../../pages/Exercise';
import EmailEditor from 'react-email-editor';

const RouterPages = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/exercise/:year/:period/:exercise">
                <Exercise />
            </Route>
            <Route path="/admin">
                <h1>Admin</h1>
                <EmailEditor />
            </Route>
        </Switch>
    );
};

export default RouterPages;
