import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import connector from './connector';
import useStyles from './styles';

import ModalComponent from '../../components/modal/modal.jsx';

const Modal = ({
    modal: {
        display,
        ...rest
    } = {}
}) => {
    const classes = useStyles();

    return display && (
        <div className={classes.modalLayout}>
            <ModalComponent {...rest}/>
        </div>
    );
};

export default withRouter(connect(connector)(Modal));