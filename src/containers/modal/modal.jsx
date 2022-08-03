import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {createUseStyles} from 'react-jss'

import connector from './connector';

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
    const useStyles = createUseStyles({
        modalLayout: {
            position: 'absolute',
            top: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        modalContainer: {
            width: 400,
            backgroundColor: '#fff',
            borderRadius: '12px',
            position: 'fixed',
            padding: 20,
            fontSize: 20,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end'
        },
        modalContent: {
            width: '100%'
        },
        modalButtons: {
            display: 'flex',
            width: '30%',
            justifyContent: 'end',
            marginTop: 10,
            '& > button': {
                backgroundColor: '#db7d7d',
                fontSize: 16,
                minWidth: 50,
                height: 40,
                borderRadius: 10,
                border: 'none',
                margin: [[0, 5]],
                '&:hover': {
                    cursor: 'pointer'
                },
                '&:first-child': {
                    backgroundColor: '#7ddbd0'
                }
            }
        }
    });
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