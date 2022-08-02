import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';

import Store from './store';
import App from './App.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={Store}>
        <BrowserRouter>
            <Switch>
                <Route
                    path="/"
                    component={App}>
                </Route>
            </Switch>
        </BrowserRouter>
    </Provider>
);