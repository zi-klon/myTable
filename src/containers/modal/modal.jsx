import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {createUseStyles} from 'react-jss'

import connector from './connector';
import useStyles from './styles';

const Modal = ({
    modal: {
        display,
        message,
        confirm,
        decline,
        canReject = true,
        resolve
    } = {}
}) => {
    const classes = useStyles();

    return display && (
        <div className={classes.modalLayout}>
            <div className={classes.modalContainer}>
                <div className={classes.modalContent}>
                    {message}
                </div>
                <div className={classes.modalButtons}>
                    <button onClick={() => resolve(true)}>
                        {confirm}
                    </button>
                    {canReject &&
                        <button onClick={() => resolve(false)}>
                            {decline}
                        </button>
                    }
                </div>
            </div>
        </div>
    );
};

export default withRouter(connect(connector)(Modal));