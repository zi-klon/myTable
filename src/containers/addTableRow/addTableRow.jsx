import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import connector from './connector';
import dispatcher from './dispatcher';

import Page from '../../components/page/page.jsx';
import Buttons from '../../components/page/components/buttons/buttons.jsx';
import Form from '../../components/form/form.jsx';

const AddTableRow = ({
    form,

    addRow,
    setTitle,
    setDate,
    setSeason,
    setEpisode,
    gotoTable
}) => {

    return (
        <Page title='Форма добавления нового эпизода'>
            <Buttons>
                <button onClick={gotoTable}>
                    Вернуться к списку
                </button>
            </Buttons>
            <Form
                form={form}
                submit={addRow}
                setTitle={setTitle}
                setDate={setDate}
                setSeason={setSeason}
                setEpisode={setEpisode}/>
        </Page>
    );
};

export default withRouter(connect(connector, dispatcher)(AddTableRow));