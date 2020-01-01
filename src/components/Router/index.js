import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import Exercise from '../../pages/Exercise';

const RouterPages = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/exercise/:year/:period/:exercise">
                <Exercise />
            </Route>
        </Switch>
    );
};

export default RouterPages;
