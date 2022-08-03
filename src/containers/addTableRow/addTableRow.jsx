import React from 'react';
import {connect} from 'react-redux';
import {Switch, Route, withRouter} from 'react-router-dom';
import connector from './connector';
import dispatcher from './dispatcher';

const AddTableRow = ({
    gotoTable
}) => {
    return (
        <div>
            <h1>Form</h1>
            <p>Здесь будет форма</p>
            <button onClick={gotoTable}>
                Переход к таблице
            </button>
        </div>
    );
};

export default withRouter(connect(connector, dispatcher)(AddTableRow));