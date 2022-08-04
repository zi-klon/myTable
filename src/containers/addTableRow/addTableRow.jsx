import React from 'react';
import {connect} from 'react-redux';
import {Switch, Route, withRouter} from 'react-router-dom';

import connector from './connector';
import dispatcher from './dispatcher';
import useStyles from './styles';

import Form from '../../components/form/form.jsx';

const AddTableRow = ({
    form,
    gotoTable,
    setTitle,
    setDate,
    setSeason,
    setEpisode,
}) => {

    const classes = useStyles();

    return (
        <div>
            <h1>Форма добавления нового эпизода</h1>
            <Form
                form={form}
                submit={gotoTable}
                setTitle={setTitle}
                setDate={setDate}
                setSeason={setSeason}
                setEpisode={setEpisode}/>
        </div>
    );
};

export default withRouter(connect(connector, dispatcher)(AddTableRow));