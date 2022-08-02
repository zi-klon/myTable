import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import connector from './connector';
import dispatcher from './dispatcher';

const Table = ({
    tableData = [],

    gotoForm,
    getTableData,
    increaseCounter
}) => {
    return (
        <div>
            <h1>My Table</h1>
            <p>Здесь будет таблица</p>
            <button onClick={gotoForm}>
                Переход на форму
            </button>
            <button onClick={getTableData}>
                getTableData
            </button>
        </div>
    );
};

export default withRouter(connect(connector, dispatcher)(Table));