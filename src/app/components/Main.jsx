import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store';
import { Router, Route } from "react-router-dom";
import { history } from '../store/history';
import { ConnectedEventDetail } from './EventDetail';


import { ConnectedNavigation } from './Navigation';
import { Home } from './Home';

export const Main = () => (
    <Router history={history}>
        <Provider store={store}>
            <>
                <ConnectedNavigation />
                <Route exact path="/" render={() => (<Home />)} />
                <Route path="/events/:id" component={ConnectedEventDetail} />
            </>
        </Provider>
    </Router>
);