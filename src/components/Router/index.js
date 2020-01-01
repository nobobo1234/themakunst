import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Home from '../../pages/Home';

const RouterPages = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/:year/:period/:exercise">
                <h1>Exercise</h1>
            </Route>
        </Switch>
    );
};

export default RouterPages;
