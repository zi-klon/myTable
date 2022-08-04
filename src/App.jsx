import React from 'react';
import {Switch, Route, withRouter, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {createUseStyles} from 'react-jss'

import Main from './containers/main/main.jsx';
import AddTableRow from './containers/addTableRow/addTableRow.jsx';
import Modal from './containers/modal/modal.jsx';

const App = ({
    match: {
        path
    }
}) => {

    const useStyles = createUseStyles({
        appContainer: {
            position: 'relative',
            background: 'linear-gradient(#c1cee8, #6895ed)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: '98vh',
            overflow: 'hidden'
        }
    });
    const classes = useStyles();

    return (
        <div className={classes.appContainer}>
            <Modal/>
            <Switch>

                <Route
                    path={`${path}table`}
                    component={Main}/>

                <Route
                    path={`${path}form`}
                    component={AddTableRow}/>

                <Redirect to={`${path}table`}/>

            </Switch>
        </div>
    );
};

export default withRouter(connect(null, null)(App));