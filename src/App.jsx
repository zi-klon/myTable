import React from 'react';
import {Switch, Route, withRouter, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import Table from './components/table/table.jsx';
import Form from './components/form/form.jsx';

const App = ({
    match: {
        path
    }
}) => {
    return (
        <>
            <Switch>

                <Route
                    path={`${path}table`}
                    component={Table}/>

                <Route
                    path={`${path}form`}
                    component={Form}/>

                <Redirect to={`${path}table`}/>

            </Switch>
        </>
    );
};

export default withRouter(connect(null, null)(App));